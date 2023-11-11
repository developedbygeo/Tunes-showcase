'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

import { cn } from '@/libs/ui';
import { WithClassName } from '@/types/UI';
import { AlbumDescription } from '@/types/sanity';
import { fadeInChildren } from '@/libs/animations';

type AlbumDescriptionProps = WithClassName & {
    data: AlbumDescription;
};

const AlbumsDescription = ({ className, data }: AlbumDescriptionProps) => {
    const ref = useRef<HTMLDListElement | null>(null);
    const isInView = useInView(ref);

    return (
        <section className={cn('relative flex flex-col gap-12 overflow-hidden px-0 py-24 sm:my-32', className)}>
            <div className="group relative h-[50vh] w-full lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-2/5">
                <Image
                    src={data.horizontalImg}
                    alt="Party"
                    className="h-full w-full"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>

            <div className="container relative z-10 px-0">
                <div className="mx-auto w-[95%] lg:mx-[initial] lg:w-3/6 lg:pr-8 lg:pt-4">
                    <div>
                        <h2 className="text-base font-semibold leading-7 text-accent">{data.subtitle}</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-white text-shadow-hero-header sm:text-4xl">
                            {data.title}
                        </p>
                        <p className="mt-6 text-base leading-loose text-gray-300">{data.description}</p>
                        <motion.dl
                            ref={ref}
                            variants={fadeInChildren('default', 0.75, 2)}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none"
                        >
                            {data.features.map((feature) => (
                                <article key={feature._key} className="relative pl-4">
                                    <dt className="mb-3 flex items-center justify-start gap-3 font-semibold text-white">
                                        <Image src={feature.icon} alt={feature.title} width={24} height={24} />
                                        <h3 className="font-semibold tracking-tight">{feature.title}</h3>
                                    </dt>
                                    <dd className="text-light text-base text-gray-300">{feature.description}</dd>
                                </article>
                            ))}
                        </motion.dl>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AlbumsDescription;
