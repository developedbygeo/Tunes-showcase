'use client';

import { useRef } from 'react';
import { useTransform, useScroll, motion } from 'framer-motion';
import { fadeIn } from '@/libs/animations';

const EventsHero = () => {
    const target = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target,
        offset: ['end end', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);

    return (
        <motion.section
            ref={target}
            style={{ opacity }}
            variants={fadeIn('default', 0.2)}
            initial="hidden"
            animate="visible"
            className="container relative flex h-screen items-center transition-all"
        >
            <motion.div className="pb-32" style={{ scale }}>
                <motion.h3 className="text-5xl font-semibold text-shadow-hero-header">
                    <span className="leading-loose">Are you ready to party with</span>
                    <div>
                        <span className="text-accent"> DJ Cat Paws</span> <span> ?</span>
                    </div>
                </motion.h3>
                <p className="mt-6 hidden w-4/5 text-base text-gray-300 lg:block xl:w-3/5">
                    Step into the fantastical world of DJ Cat Paws, where every beat is purr-fectly curated to whisk you
                    into a frenzy of feline fun. With a scratch of the deck and a meow into the mic. Are you ready to
                    pounce on the dance floor with DJ Cat Paws? Your whiskered maestro awaits!
                </p>
            </motion.div>
        </motion.section>
    );
};

export default EventsHero;
