'use client';
import Image from 'next/image';
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';
import { motion } from 'framer-motion';

import { fadeIn } from '@/libs/animations';
import { WithClassName, WithSource } from '@/types/UI';
import { cn } from '@/libs/ui';

type ParallaxLogoProps = WithClassName & WithSource;

const ParallaxLogo = ({ className, src }: ParallaxLogoProps) => {
    return (
        <MouseParallaxContainer
            globalFactorX={0.1}
            globalFactorY={0.2}
            resetOnLeave
            className={cn('relative flex h-32 items-center xl:h-max xl:w-[52rem]', className)}
        >
            <MouseParallaxChild factorX={0.2} factorY={0.4} className="relative">
                <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial="hidden"
                    animate="visible"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="h-52 w-72 xl:h-[20rem] xl:w-[45rem]"
                >
                    <Image src="/hero-text.png" fill alt="DJ Cat Paws" style={{ objectFit: 'contain' }} />
                </motion.div>
            </MouseParallaxChild>
            <MouseParallaxChild
                factorX={0.2}
                factorY={0.2}
                className="absolute -top-6 left-0 -z-10 opacity-10 xl:left-8 xl:top-8"
            >
                <motion.div
                    variants={fadeIn('up', 0.7)}
                    initial="hidden"
                    animate="visible"
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.3 }}
                    className="h-52 w-72 xl:h-[20rem] xl:w-[39rem]"
                >
                    <Image src={src} fill alt="DJ Cat Paws" style={{ objectFit: 'contain' }} />
                </motion.div>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.2} factorY={0.2} className="absolute -z-20 opacity-50 xl:-left-16 xl:top-8">
                <motion.div
                    variants={fadeIn('up', 1)}
                    initial="hidden"
                    animate="visible"
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.3 }}
                    className="h-32 w-32 xl:h-[10rem] xl:w-[20rem]"
                >
                    <Image className="rotate-45" src="/paw.png" fill alt="DJ's paw" style={{ objectFit: 'contain' }} />
                </motion.div>
            </MouseParallaxChild>
        </MouseParallaxContainer>
    );
};

export default ParallaxLogo;
