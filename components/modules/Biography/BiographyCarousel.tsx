'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { wrap } from 'popmotion';

import { WithClassName } from '@/types/UI';
import { Education } from '@/types/sanity/biography';
import { carouselImageFade, fadeIn, fadeInChildren, simpleFadeInNoDirection } from '@/libs/animations';
import { extractYearFromDate } from '@/libs/data';

import { Button } from '@/components/ui/Button';
import { cn } from '@/libs/ui';

type CarouselProps = WithClassName & {
    education: Education[];
};

const swipeConfidenceThreshold = 10_000;

const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

const BiographyCarousel = ({ className, education }: CarouselProps) => {
    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = wrap(0, education.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <motion.div className={cn('container relative flex h-screen flex-col items-start justify-center', className)}>
            <h2 className="mb-12 text-lg font-semibold">Education & Festivals</h2>

            <div className="container relative h-[60rem]">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={education[imageIndex]._key}
                        custom={direction}
                        variants={carouselImageFade}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute z-20 h-[55rem] w-full"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);
                            if (swipe < -swipeConfidenceThreshold) {
                                setPage([page + 1, 1]);
                            } else if (swipe > swipeConfidenceThreshold) {
                                setPage([page - 1, -1]);
                            }
                        }}
                    >
                        <Image
                            fill
                            priority
                            alt="Party"
                            className="pointer-events-none"
                            src={education[imageIndex].image}
                        />
                        <motion.article
                            className="absolute bottom-0 left-0 z-30 flex w-full items-center gap-2 bg-black/50 px-6 py-3 backdrop-blur-lg"
                            variants={fadeInChildren('default', 0.1, 0.05)}
                            initial="hidden"
                            animate="visible"
                        >
                            <h3 className="sr-only">{`Details about ${education[imageIndex].degree} at ${education[imageIndex].institution}`}</h3>
                            <motion.p className="text-base" variants={simpleFadeInNoDirection()}>
                                {education[imageIndex].degree} -{' '}
                                <span className="font-light">{education[imageIndex].institution}</span>
                            </motion.p>
                            <motion.p
                                className="text-base font-light text-gray-300"
                                variants={simpleFadeInNoDirection()}
                            >
                                {extractYearFromDate(education[imageIndex].year)}
                            </motion.p>
                        </motion.article>
                    </motion.div>
                </AnimatePresence>
                <Button
                    variant="ghost"
                    className="absolute right-12 top-1/2 z-30 !h-12 !w-12 rounded-full bg-white/30 !p-0 backdrop-blur-3xl hover:bg-white"
                    onClick={() => paginate(1)}
                >
                    <MdKeyboardArrowRight className="h-6 w-6 text-black" />
                </Button>
                <Button
                    variant="ghost"
                    className="absolute left-12 top-1/2 z-30 !h-12 !w-12 rounded-full bg-white/30 !p-0 backdrop-blur-3xl hover:bg-white"
                    onClick={() => paginate(-1)}
                >
                    <MdKeyboardArrowLeft className="h-6 w-6 text-black" />
                </Button>
            </div>
        </motion.div>
    );
};

export default BiographyCarousel;
