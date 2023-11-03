type Image = {
    asset: {
        url: string;
    };
};

type Specialization = {
    _key: string;
    title: string;
};

type Experience = {
    _key: string;
    title: string;
    description: string;
    period: string;
};

type Skill = {
    _key: string;
    title: string;
    proficiency: string;
};

type Education = {
    _key: string;
    institution: string;
    degree: string;
    fieldOfStudy: string;
    period: string;
};

type BiographyData = {
    bioText: any[];
    image: Image;
    specializations: Specialization[];
    experiences: Experience[];
    skills: Skill[];
    education: Education[];
};

export default BiographyData;
