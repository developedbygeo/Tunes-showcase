import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { CiLocationOn } from 'react-icons/ci';
import { BiWorld } from 'react-icons/bi';

import { fadeIn } from '@/libs/animations';
import { cn } from '@/libs/ui';
import heroLocationSeq from '@/data/heroLocations';
import { WithClassName } from '@/types/UI';

type LocationsProps = WithClassName & {
    locations: (string | number)[];
};

const Locations = ({ locations, className }: LocationsProps) => {
    return (
        <>
            <motion.div
                variants={fadeIn('up', 0.85)}
                initial="hidden"
                animate="visible"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.7 }}
                className={cn('flex items-center justify-center xl:justify-start', className)}
            >
                <h3 className="sr-only">Now on world tour!</h3>
                <div className="mr-2 hidden gap-x-2 text-base xl:flex">
                    <p>Now on</p>
                    <BiWorld className="h-7 w-7 text-gray-300" />
                    <p>tour!</p>
                </div>
                <CiLocationOn className="mr-2 h-7 w-7 text-gray-300" />
                <TypeAnimation
                    className="text-base underline underline-offset-4"
                    sequence={locations}
                    wrapper="p"
                    speed={10}
                    deletionSpeed={5}
                    repeat={Infinity}
                    cursor={true}
                />
            </motion.div>
        </>
    );
};

export default Locations;
