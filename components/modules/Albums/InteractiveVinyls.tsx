'use client';

import { WithClassName } from '@/types/UI';
import { motion } from 'framer-motion';

import Vinyl1 from '@/assets/vinyl1.svg';
import Vinyl2 from '@/assets/vinyl2.svg';
import Vinyl3 from '@/assets/vinyl3.svg';

import { VINYL_ROTATION, fadeIn, fadeInChildren, fadeInWithRotation } from '@/libs/animations';
import { cn } from '@/libs/ui';

const InteractiveVinyls = ({ className }: WithClassName) => {
    return (
        <motion.div
            variants={fadeInChildren('default', 0.1, 0.2)}
            initial="hidden"
            whileInView="visible"
            className={cn('relative', className)}
        >
            <motion.div
                variants={fadeInWithRotation('left', 0.45, 360)}
                animate="visible"
                initial="hidden"
                className="absolute left-0 top-0"
                whileHover={{ rotate: -VINYL_ROTATION }}
                transition={{ duration: 50, ease: 'linear', loop: Infinity }}
            >
                <Vinyl1 className="rounded-full shadow-container-neumorph xl:h-40 xl:w-40 2xl:h-60 2xl:w-60" />
            </motion.div>
            <motion.div
                variants={fadeInWithRotation('left', 0.65, 180)}
                animate="visible"
                initial="hidden"
                className="-translate-1/2 absolute bottom-1/2 left-1/2"
                whileHover={{ rotate: VINYL_ROTATION }}
                transition={{ duration: 35, ease: 'linear', loop: Infinity }}
            >
                <Vinyl2 className="rounded-full shadow-container-neumorph xl:h-40 xl:w-40 2xl:h-60 2xl:w-60" />
            </motion.div>
            <motion.div
                variants={fadeInWithRotation('left', 0.79, 55)}
                animate="visible"
                initial="hidden"
                className="absolute bottom-8 right-12"
                whileHover={{ rotate: -VINYL_ROTATION }}
                transition={{ duration: 22, ease: 'linear', loop: Infinity }}
            >
                <Vinyl3 className="rounded-full shadow-container-neumorph xl:h-40 xl:w-40 2xl:h-60 2xl:w-60" />
            </motion.div>
        </motion.div>
    );
};

export default InteractiveVinyls;
