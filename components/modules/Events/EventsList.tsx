'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { CiLocationOn } from 'react-icons/ci';

import { Event } from '@/types/sanity';
import { fadeIn } from '@/libs/animations';

import { Button } from '@/components/ui/Button';
import { WithClassName } from '@/types/UI';
import { cn } from '@/libs/ui';
import { useRef } from 'react';

type EventsListProps = WithClassName & {
    data: Event[];
};

const EventsList = ({ className, data }: EventsListProps) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref);

    return (
        <motion.div
            ref={ref}
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            whileInView="visible"
            viewport={{ once: true }}
            className="flex h-[35rem] flex-col justify-between gap-x-4 overflow-y-auto xl:flex-row"
        >
            <div className="hidden w-[22rem] xl:flex">
                <Image src="/tour.jpg" width={358} height={489} priority quality={100} alt="DJ Cat Paws on tour" />
            </div>
            <ul className="c-scrollbar flex w-80 flex-1 flex-col justify-between overflow-y-auto scroll-smooth shadow-container-neumorph">
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
                        <p className="mt-2 w-full text-center text-sm font-bold text-accent">{event.price}</p>
                        <Button className="mt-2 xl:mt-0">Get tickets</Button>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default EventsList;
