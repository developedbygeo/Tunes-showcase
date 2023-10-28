import type { Metadata } from 'next';
import { Anton, Montserrat } from 'next/font/google';

import './globals.css';
import { cn } from '@/libs/ui';
import { WithChildren } from '@/types/UI';

import Header from '@/components/modules/Header';
import Footer from '@/components/modules/Footer';

const anton = Anton({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-anton',
});

const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--font-montserrat',
});

export const metadata: Metadata = {
    title: 'DJ Cat Paws',
    description: 'A mock portfolio website for a cat that DJs professionally and posts everything about it.',
};

const RootLayout = ({ children }: WithChildren) => {
    return (
        <html lang="en">
            <body
                className={cn(
                    anton.variable,
                    montserrat.variable,
                    'overflow-x-hidden scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-accent/50 scrollbar-thumb-rounded-xl'
                )}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
