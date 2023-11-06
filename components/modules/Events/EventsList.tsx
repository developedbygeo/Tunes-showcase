'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { CiLocationOn } from 'react-icons/ci';

import { Event } from '@/types/sanity';
import { WithClassName } from '@/types/UI';

import { Button } from '@/components/ui/Button';

type EventsListProps = WithClassName & {
    data: Event[];
};

const EventsList = ({ className, data }: EventsListProps) => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const extendedRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end end'],
    });
    const { scrollYProgress: scrollYProgressIncludingOverlap } = useScroll({
        target: extendedRef,
        offset: ['start end', 'end end'],
    });

    const scale = useTransform(scrollYProgressIncludingOverlap, [0.1, 0.4, 0.75, 1], [1, 2.5, 4.2, 1]);

    const contentOpacity: any = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const contentScale = useTransform(scrollYProgress, (pos) => {
        if (pos < 0.7) return 0;
        return pos;
    });
    const listScrollBehavior = useTransform(scrollYProgress, (pos) => {
        if (pos < 0.95) return 'hidden';
        return 'auto';
    });

    return (
        <>
            <motion.div
                ref={targetRef}
                className="relative z-10 mt-[-30vh] flex h-[95vh] flex-col items-center justify-center py-20"
            >
                <motion.section
                    ref={extendedRef}
                    className="container mb-8 text-center"
                    style={{ scale: contentScale, opacity: contentOpacity }}
                >
                    <h2 className="big-title text-shadow-hero-header">World Tour Alert</h2>
                    <p className="subtitle mt-0 xl:mt-4">Join the most purrfect tour!</p>
                </motion.section>
                <motion.div
                    className="container flex h-[40rem] origin-top flex-col justify-between gap-x-4 overflow-y-auto px-0 xl:flex-row"
                    style={{ scale: contentScale, opacity: contentOpacity }}
                >
                    <div className="hidden w-[22rem] xl:flex">
                        <Image
                            src="/tour.jpg"
                            width={358}
                            height={489}
                            priority
                            quality={100}
                            alt="DJ Cat Paws on tour"
                        />
                    </div>
                    <motion.section
                        style={{ overflowY: listScrollBehavior }}
                        className="c-scrollbar flex w-80 flex-1 flex-col justify-between scroll-smooth shadow-container-neumorph"
                    >
                        <h3 className="sr-only">Current locations on tour</h3>
                        <ul>
                            {data.map((event) => (
                                <li
                                    className="flex flex-col items-center justify-between gap-y-4 border-b border-white/10 px-0 py-8 text-center xl:my-0 xl:flex-row xl:gap-y-0 xl:px-6 xl:py-10 xl:text-left"
                                    key={event._id}
                                >
                                    <div className="flex flex-col items-center gap-x-6 xl:flex-row">
                                        <time
                                            className="mb-4 flex flex-col items-center justify-center leading-tight text-gray-300 xl:mb-0"
                                            dateTime={`${event.date.day}-${event.date.month}`}
                                        >
                                            <p className="font-anton text-3xl font-bold">{event.date.day}</p>
                                            <p className="text-lg">{event.date.month}</p>
                                        </time>
                                        <article className="flex w-64 flex-col justify-start gap-y-2">
                                            <h3 className="sr-only h-0">Location: {event.location.city}</h3>
                                            <p className="text-lg font-bold leading-none xl:whitespace-nowrap">
                                                {event.location.city}, {event.location.country}
                                            </p>
                                            <div className="flex items-center justify-center gap-x-1 xl:justify-start">
                                                <CiLocationOn className="h-6 w-6 text-accent/90" />
                                                <p className="font-light">{event.location.address}</p>
                                            </div>
                                        </article>
                                    </div>
                                    <p className="mt-2 w-full text-center text-sm font-bold text-accent">
                                        {event.price}
                                    </p>
                                    <Button className="mt-2 xl:mt-0">Get tickets</Button>
                                </li>
                            ))}
                        </ul>
                    </motion.section>
                </motion.div>
            </motion.div>
        </>
    );
};

export default EventsList;
