import { AnimationDirection } from '@/types/UI';

export const fadeIn = (direction: AnimationDirection, delay: number) => ({
    hidden: {
        y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
        x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
        opacity: 0,
        transition: {
            type: 'tween',
            duration: 1.5,
            delay,
            ease: [0.25, 0.6, 0.3, 0.8],
        },
    },
    visible: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 1.35,
            delay,
            ease: [0.2, 0.2, 0.2, 0.175],
        },
    },
});
