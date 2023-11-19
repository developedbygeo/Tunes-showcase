import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';

import { getBlogPost } from '@/libs/sanity/utils';

import Post from '@/components/modules/Blog/Post';

type MetadataProps = {
    params: { slug: string };
};

export async function generateMetadata({ params }: MetadataProps, parent: ResolvingMetadata): Promise<Metadata> {
    const { slug } = params;

    const postData = await getBlogPost(slug);

    const previousImages = (await parent).openGraph?.images || [];

    return {
        title: postData.title,
        description: postData.description,
        authors: [
            {
                name: postData.author,
            },
        ],
        openGraph: {
            title: postData.title,
            description: postData.description,
            images: [postData.image, ...previousImages],
        },
    };
}

const BlogPost = async ({ params }: { params: { slug: string } }) => {
    const postData = await getBlogPost(params.slug);

    if (!postData) return notFound();

    return (
        <section className="apply-py container ">
            <h1 className="sr-only">{postData.title}</h1>
            <Post data={postData} />
        </section>
    );
};

export default BlogPost;
