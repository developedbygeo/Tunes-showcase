import { parseDate } from '@/libs/data';
import { getBlogPosts } from '@/libs/sanity/utils';
import Image from 'next/image';
import Link from 'next/link';

const Blog = async () => {
    const data = await getBlogPosts();

    return (
        <section className="apply-py container">
            <h2 className="text-5xl font-semibold tracking-tight text-white text-shadow-hero-header sm:text-6xl">
                A deep dive into the world <span className="block text-accent">of DJ Cat Paws.</span>
            </h2>
            <p className="mt-6 w-2/4 text-base text-gray-300">
                Here you can find all the latest news about DJ Cat Paws. From new releases to upcoming events, our cat
                DJ writes about it all.
            </p>
            <ul className="mt-12 flex flex-wrap gap-12">
                {data.map((post) => {
                    const publishedDate = parseDate(post.publishedAt);
                    return (
                        <li className="group flex-1 basis-1/3" key={post._id}>
                            <Link href={`/blog/${post.slug}`}>
                                <div className="relative h-[30rem] w-full overflow-hidden">
                                    <Image
                                        className="transition-transform duration-300 will-change-transform group-hover:scale-105"
                                        src={post.image}
                                        fill
                                        alt={post.description}
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                                <div className="mt-6 flex w-full items-center justify-between">
                                    <h3 className="font-semibold transition-colors duration-300 group-hover:text-accent">
                                        {post.title}
                                    </h3>
                                    <p className="font-light">{publishedDate}</p>
                                </div>
                                <p className="mt-4">{post.description}</p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Blog;