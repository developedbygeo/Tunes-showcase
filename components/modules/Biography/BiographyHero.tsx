import Image from 'next/image';
import { PortableText } from '@portabletext/react';

import { WithClassName } from '@/types/UI';
import { Skill } from '@/types/sanity/biography';

import { Card } from '@/components/ui/Card';

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

const BiographyHero = ({ data }: BiographyHeroProps) => {
    return (
        <>
            <section className="isolate overflow-hidden py-24 sm:py-32">
                <div className="relative w-full">
                    <Image
                        className="absolute bottom-12 right-0"
                        src={data.imageUrl}
                        alt="DJ Cat Paws' selfie"
                        height={800}
                        width={800}
                        style={{ objectFit: 'contain' }}
                    />
                    <div className="container px-0">
                        <h2 className="text-5xl font-semibold tracking-tight text-white text-shadow-hero-header sm:text-6xl">
                            <span className="block">{data.headline}</span> <span>{data.name}</span>
                        </h2>
                        <div className="portable-text max-w-4xl">
                            <PortableText value={data.text} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <h2 className="mb-12 text-lg font-semibold">Specializations</h2>
                <ul className="flex flex-wrap gap-12">
                    {data.specializations.map((spec, index) => (
                        <Card className="flex-1 basis-1/4 p-12" key={`${spec}-${index}`}>
                            <li className="text-base">{spec}</li>
                        </Card>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default BiographyHero;