import { getBiography } from '@/libs/sanity/utils';
import { WithClassName } from '@/types/UI';

import TimelineSlider from '@/components/modules/Biography/EducationTimeline';
import BiographyExperience from '@/components/modules/Biography/BiographyExperience';
import BiographyHero from '@/components/modules/Biography/BiographyHero';
import BiographySkills from '@/components/modules/Biography/BiographySkills';

const Biography = async ({ className }: WithClassName) => {
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
                <BiographyHero data={heroData} />
                <BiographySkills className="apply-py" skills={data.skills} />
                <BiographyExperience className="apply-pb" experience={data.experiences} />
                <TimelineSlider className="apply-pb" education={data.education} />
            </section>
        </>
    );
};

export default Biography;
