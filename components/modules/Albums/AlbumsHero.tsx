'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import { WithClassName } from '@/types/UI';
import InteractiveVinyls from '@/components/modules/Albums/InteractiveVinyls';
import { Button } from '@/components/ui/Button';

import { fadeIn } from '@/libs/animations';
import { cn } from '@/libs/ui';

const AlbumsHero = ({ className }: WithClassName) => {
    const target = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            if (!target.current) return;
            const { clientX, clientY } = ev;
            target.current.style.setProperty('--x', `${clientX}px`);
            target.current.style.setProperty('--y', `${clientY}px`);
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <div
            ref={target}
            className="relative isolate overflow-hidden bg-transparent before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_1rem)_var(--y,_1rem),_#7987FF_0%,_transparent_100%)] before:opacity-40"
        >
            <div className={cn('apply-pt apply-pb container flex items-center justify-between px-0', className)}>
                <motion.div
                    variants={fadeIn('default', 0.3)}
                    initial="hidden"
                    animate="visible"
                    className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
                >
                    <h2 className="mt-10 text-5xl font-semibold tracking-tight text-white text-shadow-hero-header sm:text-6xl">
                        Curious about <span className="text-accent">DJ Cat Paws</span>&apos; work?
                    </h2>
                    <p className="text-light mt-6 text-base text-gray-300">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
                        sunt amet fugiat veniam occaecat fugiat aliqua.
                    </p>
                    <Button size="lg" className="mt-10">
                        <span>Learn more</span>
                    </Button>
                </motion.div>
                <InteractiveVinyls />
            </div>
        </div>
    );
};

export default AlbumsHero;
