'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

import { cn } from '@/libs/ui';
import { fadeIn, fadeInChildren, simpleFadeInNoDirection } from '@/libs/animations';
import { WithClassName, WithSource } from '@/types/UI';
import { NavLinkType } from '@/types/sanity';

import NavLink from '@/components/ui/NavLink';

type AnimatedHeaderProps = WithClassName &
    WithSource & {
        links: NavLinkType[];
        quote?: string;
    };

const AnimatedNavLinks = ({ className, src, links, quote }: AnimatedHeaderProps) => {
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
            className={cn('container flex items-center justify-between px-4 py-4 lg:px-0', className)}
        >
            <div className="flex items-center gap-6">
                <motion.div
                    variants={fadeIn('default', 0.1)}
                    initial="hidden"
                    animate="visible"
                    className="relative h-12 w-12"
                >
                    <Link href="/">
                        <Image src={src} className="rounded-full" alt="logo" fill style={{ objectFit: 'contain' }} />
                    </Link>
                </motion.div>
                {quote && <p className="text-sm font-light text-gray-400">{quote}</p>}
            </div>

            {/* desktop */}
            <motion.nav
                className="hidden lg:flex lg:gap-12"
                variants={fadeInChildren('default', 0, 1)}
                initial="hidden"
                animate="visible"
            >
                <h2 className="sr-only">Navigation</h2>
                {links.map((link) => (
                    <motion.div className="hover-link-effect" key={link._key} variants={simpleFadeInNoDirection()}>
                        <NavLink
                            activeClassName="text-accent"
                            className="px-4 py-2"
                            href={link.navigationLinkTitle.href}
                        >
                            {link.navigationLinkTitle.title}
                        </NavLink>
                    </motion.div>
                ))}
            </motion.nav>
        </motion.div>
    );
};

export default AnimatedNavLinks;
