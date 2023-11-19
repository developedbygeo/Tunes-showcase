import Image from 'next/image';

const Loading = () => (
    <div className="flex h-screen w-screen items-center justify-center">
        <div className="relative h-40 w-40 animate-pulse overflow-hidden rounded-full">
            <Image src="/cat-hero.jpg" fill alt="logo" />
        </div>
    </div>
);

export default Loading;
