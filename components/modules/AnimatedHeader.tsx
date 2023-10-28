'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

import { fadeIn, fadeInChildren, simpleFadeInNoDirection } from '@/libs/animations';
import { WithClassName, WithSource } from '@/types/UI';
import { NavLinkType } from '@/types/sanity';
import NavLink from '../ui/NavLink';

type AnimatedHeaderProps = WithClassName &
    WithSource & {
        links: NavLinkType[];
    };

const AnimatedHeader = ({ className, src, links }: AnimatedHeaderProps) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref);

    return (
        <motion.div
            ref={ref}
            variants={fadeInChildren('default', 0.1, 0.15)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            whileInView="visible"
            viewport={{ once: true }}
            className="container flex items-center justify-between px-0 py-4"
        >
            <motion.div
                variants={fadeIn('default', 0.1)}
                initial="hidden"
                animate="visible"
                className="relative h-12 w-12"
            >
                <Image src={src} className="rounded-full" alt="logo" fill style={{ objectFit: 'contain' }} />
            </motion.div>
            <motion.nav
                className="flex gap-12"
                variants={fadeInChildren('default', 0, 1)}
                initial="hidden"
                animate="visible"
            >
                {links.map((link) => (
                    <motion.div key={link._key} variants={simpleFadeInNoDirection()}>
                        <NavLink className="hover-link-effect" href={link.navigationLinkTitle.href}>
                            {link.navigationLinkTitle.title}
                        </NavLink>
                    </motion.div>
                ))}
            </motion.nav>
        </motion.div>
    );
};

export default AnimatedHeader;
