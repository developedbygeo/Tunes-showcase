import Image from 'next/image';
import { PortableText } from '@portabletext/react';

import { WithClassName } from '@/types/UI';
import { Skill } from '@/types/sanity/biography';

import { Card } from '@/components/ui/Card';
import { cn } from '@/libs/ui';

type BiographyHeroProps = WithClassName & {
    data: {
        headline: string;
        name: string;
        text: any;
        imageUrl: string;
        specializations: string[];
        skills: Skill[];
    };
};

const BiographyHero = ({ className, data }: BiographyHeroProps) => {
    return (
        <>
            <section className={cn('isolate overflow-hidden', className)}>
                <div className="relative w-full">
                    <Image
                        className="relative bottom-4 lg:absolute lg:bottom-12 lg:right-0 xl:max-w-[30rem] 2xl:max-w-[40rem]"
                        src={data.imageUrl}
                        alt="DJ Cat Paws' selfie"
                        height={800}
                        width={800}
                        priority
                        style={{ objectFit: 'contain' }}
                        sizes="(max-width: 1023px) 80vw, 300px, (max-width: 767px) 80vw, 600px)"
                    />
                    <div className="container">
                        <h2 className="text-5xl font-semibold tracking-tight text-white text-shadow-hero-header sm:text-6xl">
                            <span className="block">{data.headline}</span> <span>{data.name}</span>
                        </h2>
                        <div className="portable-text max-w-4xl">
                            <PortableText value={data.text} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="container ">
                <h2 className="mb-12 text-lg font-semibold">Specializations</h2>
                <ul className="flex flex-wrap gap-12">
                    {data.specializations.map((spec, index) => (
                        <Card
                            className="flex-1 basis-1/4 p-12 py-6 md:basis-1/3 md:px-6 md:py-8 lg:p-12"
                            key={`${spec}-${index}`}
                        >
                            <li className="text-base">{spec}</li>
                        </Card>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default BiographyHero;
