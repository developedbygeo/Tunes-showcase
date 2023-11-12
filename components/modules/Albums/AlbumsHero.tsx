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
            className="relative isolate overflow-hidden bg-transparent px-4 before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_1rem)_var(--y,_1rem),_#7987FF_0%,_transparent_100%)] before:opacity-40 lg:px-0"
        >
            <div className={cn('apply-pt apply-pb container flex items-center justify-between', className)}>
                <motion.div
                    variants={fadeIn('default', 0.3)}
                    initial="hidden"
                    animate="visible"
                    className="mx-auto flex max-w-[95vw] flex-shrink-0 flex-col items-start lg:mx-0 lg:max-w-xl lg:pt-8"
                >
                    <h2 className="mt-10 whitespace-break-spaces text-5xl font-semibold tracking-tight text-white text-shadow-hero-header lg:whitespace-normal">
                        Curious about <span className="text-accent">DJ Cat Paws</span>&apos; work?
                    </h2>
                    <p className="mt-6 max-w-[95vw] text-base text-gray-300 lg:max-w-[initial]">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
                        sunt amet fugiat veniam occaecat fugiat aliqua.
                    </p>
                    <Button size="lg" className="mt-10 w-[95%] lg:w-fit">
                        <span>Learn more</span>
                    </Button>
                </motion.div>
                <InteractiveVinyls className="hidden lg:block" />
            </div>
        </div>
    );
};

export default AlbumsHero;
