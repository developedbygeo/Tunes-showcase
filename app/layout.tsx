import type { Metadata } from 'next';
import { Abril_Fatface, Montserrat } from 'next/font/google';

import './globals.css';
import Header from '@/modules/Header';
import Footer from '@/modules/Footer';
import { cn } from '@/libs/utils';
import { WithChildren } from '@/types/UI';

const abril = Abril_Fatface({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-abril',
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
            <body className={cn(abril.variable, montserrat.variable)}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
