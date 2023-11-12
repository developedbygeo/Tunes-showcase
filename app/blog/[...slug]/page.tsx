import { notFound } from 'next/navigation';
import { getBlogPost } from '@/libs/sanity/utils';

import Post from '@/components/modules/Blog/Post';

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
