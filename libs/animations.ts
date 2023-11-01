import { AnimationDirection } from '@/types/UI';

export const SEQUENCE_DELAY = 3000;
export const VINYL_ROTATION = 360 * 20;

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

export const fadeInWithRotation = (direction: AnimationDirection, delay: number, rotation: number) => ({
    hidden: {
        ...fadeIn(direction, delay).hidden,
        rotate: rotation,
    },
    visible: {
        ...fadeIn(direction, delay).visible,
        rotate: 0,
    },
});

export const fadeInChildren = (direction: AnimationDirection, delay: number, childrenDelay: number) => {
    const fadeEffect = fadeIn(direction, delay);
    return {
        ...fadeEffect,
        visible: {
            ...fadeEffect.visible,
            transition: {
                ...fadeEffect.visible.transition,
                staggerChildren: childrenDelay,
            },
        },
    };
};

// having a delay in a child cancels out the staggerChildren from the parent.
export const simpleFadeInNoDirection = () => ({
    hidden: {
        opacity: 0,
        transition: {
            type: 'tween',
            duration: 1.5,
            ease: [0.25, 0.6, 0.3, 0.8],
        },
    },
    visible: {
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 1.35,
            ease: [0.2, 0.2, 0.2, 0.175],
        },
    },
});
