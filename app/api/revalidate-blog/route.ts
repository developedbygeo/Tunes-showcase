import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    message: string;
};

const secret = process.env.SANITY_WEBHOOK_SECRET as string;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const signature = req.headers[SIGNATURE_HEADER_NAME] as string;
    const body = await readBody(req); // Read the body into a string

    if (req.method !== 'POST') {
        return res.status(401).json({ message: 'Must be a POST request' });
    }

    if (!isValidSignature(body, signature, secret)) {
        res.status(401).json({ message: 'Invalid signature' });
        return;
    }

    try {
        const { _type: type, slug } = JSON.parse(body);

        switch (type) {
            case 'blogPost':
                await res.revalidate(`/blog/${slug.current}`);
                await res.revalidate(`/blog`);
        }

        return res.json({ message: 'No managed type' });
    } catch (err) {
        return res.status(500).send({ message: 'Error revalidating' });
    }
}

async function readBody(readable: NodeJS.ReadableStream) {
    const chunks = [];
    for await (const chunk of readable) {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
    }
    return Buffer.concat(chunks).toString('utf8');
}
