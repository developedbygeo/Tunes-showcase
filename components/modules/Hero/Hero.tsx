'use client';

import { cn } from '@/libs/ui';
import { WithClassName } from '@/types/UI';
import { HeroData } from '@/types/sanity';
import { generateSequenceFromArray } from '@/libs/data';
import { SEQUENCE_DELAY } from '@/libs/animations';

import ParallaxLogo from '@/components/modules/Hero/ParallaxLogo';
import PawsImage from '@/components/modules/Hero/PawsImage';
import Locations from '@/components/modules/Hero/Locations';
import HeroCta from '@/components/modules/Hero/HeroCta';
import Player from '../MusicPlayer';

type HeroProps = WithClassName & {
    data: HeroData;
};

const Hero = ({ data, className }: HeroProps) => {
    const cleanHeroLocations = data?.locations?.map((location) => location?.locationName);

    const sequence = generateSequenceFromArray(cleanHeroLocations, SEQUENCE_DELAY);

    return (
        <section className={cn('container flex h-[80vh] flex-col justify-between xl:h-[90vh]', className)}>
            <h2 className="sr-only">Dj Cat Paws is here!</h2>
            <div className="flex h-full items-center justify-center xl:justify-start">
                <article>
                    <ParallaxLogo src={data.heroLogo} className="-left-14" />
                    <Locations locations={sequence} className="flex" />
                    <HeroCta />
                </article>
                <PawsImage src={data.heroImage} className="absolute right-0 hidden xl:flex" />
            </div>
            <Player src={data.track} trackImageSrc={data.trackImage} />
        </section>
    );
};

export default Hero;
