import { motion } from 'framer-motion';
import Image from 'next/image';

import { WithClassName, WithSource } from '@/types/UI';
import { fadeIn } from '@/libs/animations';
import Bubble from '@/components/ui/Bubble';

type PawsImageProps = WithClassName & WithSource;

const PawsImage = ({ className, src }: PawsImageProps) => (
    <motion.div
        variants={fadeIn('left', 1.4)}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.7 }}
        className={className}
    >
        <Bubble className="-left-[10rem] top-[20rem] animate-bubble" />
        <Bubble className="left-[initial] right-[0rem] top-[5rem] !h-44 !w-44 animate-bubble-mid" />
        <Bubble className="-right-[40rem] top-[25rem] animate-bubble-slow" />
        <Image className="z-10" src={src} width={617} height={893} alt="DJ Cat Paws" quality={100} priority />
    </motion.div>
);

export default PawsImage;
