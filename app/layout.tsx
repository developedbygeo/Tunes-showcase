import type { Metadata } from 'next';
import { Anton, Montserrat } from 'next/font/google';

import './globals.css';
import { cn } from '@/libs/ui';
import { WithChildren } from '@/types/UI';

import Header from '@/components/modules/Header';
import Head from 'next/head';

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
    keywords: 'DJ Whiskers, Cat DJ, Feline DJ, Music Mixes, Cat Beats, DJ Cat, Animal DJs, Fun DJ Music',
    twitter: {
        card: 'summary_large_image',
        images: [
            {
                url: '/cat-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'DJ Cat Paws',
            },
        ],
    },
    openGraph: {
        title: 'DJ Cat Paws - The Ultimate DJ',
        description: 'DJ Cat Paws is a cat that DJs professionally and posts everything about it.',
        url: 'tunes-showcase.vercel.app',
        images: [
            {
                url: '/cat-hero.jpg',
                width: 1200,
                height: 630,
                alt: 'DJ Cat Paws',
            },
        ],
    },
    icons: [
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            url: '/favicon/favicon-32x32.png',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            url: '/favicon/favicon-16x16.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            url: '/favicon/apple-touch-icon.png',
        },
    ],
};

const RootLayout = ({ children }: WithChildren) => {
    return (
        <html lang="en">
            <link rel="icon" href="/favicon.ico" />

            <body
                className={cn(
                    anton.variable,
                    montserrat.variable,
                    'min-h-screen overflow-x-hidden scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-accent/50 scrollbar-thumb-rounded-xl'
                )}
            >
                <h1 className="sr-only">Dj Cat Paws Portfolio</h1>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
};

export default RootLayout;
