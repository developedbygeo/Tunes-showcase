'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { cn } from '@/libs/ui';
import { WithClassName } from '@/types/UI';
import { fadeIn } from '@/libs/animations';

const EventsHeader = ({ className }: WithClassName) => {
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
            className={cn('w-full text-center', className)}
        >
            <h2 className="big-title">World Tour Alert</h2>
            <p className="subtitle mt-0 xl:mt-4">Join the most purrfect tour!</p>
        </motion.div>
    );
};

export default EventsHeader;
