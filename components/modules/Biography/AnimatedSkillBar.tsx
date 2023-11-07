'use client';

import { ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

import { WithClassName } from '@/types/UI';
import { Progress } from '@/components/ui/Progress';

type AnimatedSkillBarProps = WithClassName &
    ComponentPropsWithoutRef<typeof Progress> & {
        value: number;
    };

const AnimatedSkillBar = ({ className, value }: AnimatedSkillBarProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref);
    const [animatedValue, setAnimatedValue] = useState(0);

    useEffect(() => {
        if (inView) {
            const timer = setTimeout(() => setAnimatedValue(value), 700);
            return () => clearTimeout(timer);
        }
    }, [inView, value]);

    return <Progress value={animatedValue} className={className} ref={ref} />;
};

export default AnimatedSkillBar;
