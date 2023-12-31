'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { SlArrowLeft } from 'react-icons/sl';

import { cn } from '@/libs/ui';
import { WithClassName } from '@/types/UI';
import { BlogPostData } from '@/types/sanity';

import ScrollToTopButton from '@/components/modules/ScrollToTop';
import { Button } from '@/components/ui/Button';

type PostProps = WithClassName & {
    data: BlogPostData;
};

const Post = ({ className, data }: PostProps) => {
    return (
        <article className={cn('flex flex-col gap-6', className)}>
            <Button asChild variant="link" className="relative left-0 my-4 self-start">
                <Link className="flex gap-4 !text-gray-400 hover:!text-white" href="/blog">
                    <SlArrowLeft className="h-4 w-4" />
                    <span>Back to posts</span>
                </Link>
            </Button>
            <ScrollToTopButton />
            <h1 className="text-3xl font-semibold">{data.title}</h1>
            <div className="relative aspect-square max-h-[30rem] w-full lg:max-h-[50rem]">
                <Image src={data.image} alt={data.description} fill />
            </div>
            <div className="portable-text mt-8">
                <PortableText value={data.body} />
            </div>
        </article>
    );
};

export default Post;
