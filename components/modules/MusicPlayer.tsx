'use client';

import Image from 'next/image';
import { AudioPlayer } from 'react-audio-play';
import { motion } from 'framer-motion';
import { fadeIn } from '@/libs/animations';
import { WithClassName, WithSource } from '@/types/UI';
import { cn } from '@/libs/ui';

type PlayerProps = WithClassName &
    WithSource & {
        trackImageSrc: string;
    };

const Player = ({ className, src, trackImageSrc }: PlayerProps) => {
    return (
        <>
            <motion.section
                variants={fadeIn('up', 0.65)}
                initial="hidden"
                animate="visible"
                className={cn('relative z-40 flex items-center backdrop-blur-md', className)}
            >
                <h3 className="sr-only">Get a puurfect taste of the music</h3>
                <div className="container mx-auto flex flex-col items-center justify-between px-0 xl:flex-row">
                    <div className="hidden w-80 items-center gap-x-4 xl:flex">
                        <div className="relative h-16 w-16">
                            <Image src={trackImageSrc} alt="Vinyl" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <article className="leading-none text-gray-400">
                            <h4 className="sr-only">Music Player</h4>
                            <p className="text-base font-medium">DJ Cat Paws</p>
                            <p className="text-sm font-light">Weekend</p>
                        </article>
                    </div>
                    <div className="w-full max-w-4xl">
                        <AudioPlayer
                            src={src}
                            loop
                            preload="none"
                            color="#fff"
                            volume={40}
                            volumePlacement="top"
                            style={{
                                background: 'transparent',
                                boxShadow: 'none',
                                width: '100%',
                            }}
                        />
                    </div>
                </div>
            </motion.section>
        </>
    );
};

export default Player;
