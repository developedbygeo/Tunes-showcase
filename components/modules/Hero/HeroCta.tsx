import { motion } from 'framer-motion';

import { cn } from '@/libs/utils';
import { fadeIn } from '@/libs/animations';
import { WithClassName } from '@/types/UI';
import { Button } from '@/components/ui/Button';

const HeroCta = ({ className }: WithClassName) => (
    <motion.div
        variants={fadeIn('up', 1.2)}
        initial="hidden"
        animate="visible"
        whileInView={'show'}
        viewport={{ once: true, amount: 0.7 }}
        className={cn('mt-12 text-center xl:mt-8 xl:text-left', className)}
    >
        <Button size="xl">Get Tickets</Button>
    </motion.div>
);

export default HeroCta;
