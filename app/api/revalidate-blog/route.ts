import { update } from '@/libs/server';
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

const WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET as string;

type Data = {
    message: string;
};

const readBody = async (readable: NodeJS.ReadableStream) => {
    const chunks = [];
    for await (const chunk of readable) {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
    }
    return Buffer.concat(chunks).toString('utf8');
};

export const POST = async (req: NextRequest, res: NextResponse<Data>) => {
    // const signature = req.headers[SIGNATURE_HEADER_NAME] as string;
    const signature = req.headers.get(SIGNATURE_HEADER_NAME);

    if (!req.body || !signature) return;

    const body = await req.text(); // Read the body into a string

    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ message: 'Must be a POST request' }), {
            status: 401,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    if (!isValidSignature(body, signature, WEBHOOK_SECRET)) {
        return new Response(JSON.stringify({ message: 'Invalid signature' }), {
            status: 401,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    try {
        const { _type: type, slug } = JSON.parse(body);

        switch (type) {
            case 'blogPost':
                update([`/blog/${slug.current}`, '/blog']);

                return new Response(JSON.stringify({ success: true }), {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
        }

        return new Response(JSON.stringify({ message: 'No managed types' }), {
            status: 401,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (err) {
        return new Response(JSON.stringify({ message: 'Error revalidating' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
};
