'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

import { cn } from '@/libs/ui';
import { WithClassName } from '@/types/UI';
import { AlbumDescription } from '@/types/sanity';
import { fadeIn, fadeInChildren, simpleFadeInNoDirection } from '@/libs/animations';

type AlbumDescriptionProps = WithClassName & {
    data: AlbumDescription;
};

const AlbumsDescription = ({ className, data }: AlbumDescriptionProps) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref);

    return (
        <motion.section
            ref={ref}
            variants={fadeInChildren('default', 0.75, 2)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            whileInView="visible"
            viewport={{ once: true }}
            className={cn('relative grid grid-cols-3 overflow-hidden py-24 sm:py-32', className)}
        >
            <div className="container col-span-2 ml-auto mr-0 lg:px-0">
                <motion.div
                    variants={fadeIn('right', 1.5)}
                    initial="hidden"
                    animate="visible"
                    className="lg:pr-8 lg:pt-4"
                >
                    <div className="container mr-20">
                        <h2 className="text-base font-semibold leading-7 text-accent">{data.subtitle}</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-white text-shadow-hero-header sm:text-4xl">
                            {data.title}
                        </p>
                        <p className="mt-6 text-base leading-loose text-gray-300">{data.description}</p>
                        <motion.dl
                            variants={fadeInChildren('default', 0, 1)}
                            initial="hidden"
                            animate="visible"
                            className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none"
                        >
                            {data.features.map((feature) => (
                                <motion.article
                                    variants={simpleFadeInNoDirection()}
                                    key={feature._key}
                                    className="relative pl-4"
                                >
                                    <dt className="mb-3 flex items-center justify-start gap-3 font-semibold text-white">
                                        <Image src={feature.icon} alt={feature.title} width={24} height={24} />
                                        <h3 className="font-semibold tracking-tight">{feature.title}</h3>
                                    </dt>
                                    <dd className="text-light text-base text-gray-300">{feature.description}</dd>
                                </motion.article>
                            ))}
                        </motion.dl>
                    </div>
                </motion.div>
            </div>
            <motion.div
                variants={fadeIn('left', 1.5)}
                initial="hidden"
                animate="visible"
                className="relative h-full w-full"
            >
                <Image
                    src={data.horizontalImg}
                    alt="Party"
                    className="h-full w-full"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </motion.div>
        </motion.section>
    );
};

export default AlbumsDescription;
