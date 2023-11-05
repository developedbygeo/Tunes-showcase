type Image = {
    asset: {
        url: string;
    };
};

export type Experience = {
    _key: string;
    title: string;
    location: string;
    timeFrame: string;
    description: string;
    duration: string;
};

export type Skill = {
    _key: string;
    title: string;
    level: number;
};

export type Education = {
    _key: string;
    institution: string;
    degree: string;
    year: Date;
};

type BiographyData = {
    bioText: any[];
    headline: string;
    fullName: string;
    mainImage: string;
    specializations: string[];
    experiences: Experience[];
    skills: Skill[];
    education: Education[];
};

export default BiographyData;
