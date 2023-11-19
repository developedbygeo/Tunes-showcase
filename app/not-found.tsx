import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => (
    <div className="flex h-screen w-screen items-center bg-gradient-background">
        <div className="container flex flex-col items-center justify-center">
            <div className="relative mb-20 h-40 w-40 overflow-hidden rounded-full">
                <Image src="/cat-hero.jpg" fill alt="logo" layout="fill" objectFit="contain" />
            </div>
            <article className="text-center">
                <p className="text-base font-semibold text-accent">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-200 sm:text-5xl">Page not found</h1>
                <p className="mt-6 text-base leading-7 text-gray-400">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
            </article>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button asChild variant="default" size="lg">
                    <Link href="/">Go back home</Link>
                </Button>
            </div>
        </div>
    </div>
);

export default NotFound;
