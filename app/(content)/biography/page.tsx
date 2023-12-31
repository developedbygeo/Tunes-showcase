import { getBiography } from '@/libs/sanity/utils';
import { Metadata } from 'next';

import BiographyExperience from '@/components/modules/Biography/BiographyExperience';
import BiographyHero from '@/components/modules/Biography/BiographyHero';
import BiographySkills from '@/components/modules/Biography/BiographySkills';
import BiographyCarousel from '@/components/modules/Biography/BiographyCarousel';

export const metadata: Metadata = {
    title: 'DJ Cat Paws - Biography',
    description: 'Find out more about DJ Cat Paws and his life, his skills, and his experiences.',
};

const BiographyPage = async () => {
    const data = await getBiography();

    const heroData = {
        headline: data.headline,
        name: data.fullName,
        text: data.bioText,
        imageUrl: data.mainImage,
        specializations: data.specializations,
        skills: data.skills,
    };

    return (
        <>
            <section>
                <h2 className="sr-only">Biography</h2>
                <BiographyHero className="apply-py" data={heroData} />
                <BiographySkills className="apply-py" skills={data.skills} />
                <BiographyExperience className="apply-py" experience={data.experiences} />
                <BiographyCarousel className="apply-py" education={data.education} />
            </section>
        </>
    );
};

export const revalidate = 18_000_000;

export default BiographyPage;
