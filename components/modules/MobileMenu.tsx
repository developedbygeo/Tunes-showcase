'use client';

import { useReducer } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MdMenu, MdMenuOpen } from 'react-icons/md';

import { WithClassName } from '@/types/UI';
import { NavLinkType } from '@/types/sanity';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/Sheet';
import NavLink from '@/components/ui/NavLink';

type MobileMenu = WithClassName & {
    links: NavLinkType[];
    imageUrl: string;
};

const MobileMenu = ({ className, links, imageUrl }: MobileMenu) => {
    const [open, toggleOpen] = useReducer((state) => !state, false);

    return (
        <>
            <div className="flex items-center lg:hidden" onClick={toggleOpen}>
                {open ? <MdMenuOpen className="h-10 w-10 text-white" /> : <MdMenu className=" h-10 w-10 text-white" />}
            </div>
            <Sheet open={open} onOpenChange={toggleOpen}>
                <SheetContent className="h-[101vh] bg-gradient-background" side="top">
                    <Link href="/">
                        <div className="relative -top-2 h-12 w-12">
                            <Image
                                src={imageUrl}
                                className="rounded-full"
                                alt="logo"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </Link>
                    <motion.nav
                        className="flex h-full flex-col items-center justify-center gap-10"
                        initial={false}
                        animate={open ? 'open' : 'closed'}
                        variants={{
                            open: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
                            closed: { opacity: 0, x: '-100%' },
                        }}
                    >
                        <NavLink href="/" onClick={toggleOpen}>
                            Home
                        </NavLink>
                        {links.map((link) => (
                            <NavLink
                                key={link.id}
                                activeClassName="text-accent"
                                className="px-4 py-2"
                                href={link.navigationLinkTitle.href}
                                onClick={toggleOpen}
                            >
                                {link.navigationLinkTitle.title}
                            </NavLink>
                        ))}
                    </motion.nav>
                </SheetContent>
            </Sheet>
        </>
    );
};

export default MobileMenu;
