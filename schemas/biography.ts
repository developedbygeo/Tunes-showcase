import { Rule } from 'sanity';

const biography = {
    name: 'bio',
    title: 'Bio',
    type: 'document',
    fields: [
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'fullName',
            title: 'Full Name',
            type: 'string',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'headline',
            title: 'Headline',
            type: 'string',
        },
        {
            name: 'bioText',
            title: 'Bio Text',
            type: 'blockContent',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'specializations',
            title: 'Specializations',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'experiences',
            title: 'Experiences',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                        },
                        {
                            name: 'duration',
                            title: 'Duration',
                            type: 'string',
                        },
                    ],
                },
            ],
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'education',
            title: 'Education',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'degree',
                            title: 'Degree',
                            type: 'string',
                        },
                        {
                            name: 'institution',
                            title: 'Institution',
                            type: 'string',
                        },
                        {
                            name: 'year',
                            title: 'Year',
                            type: 'string',
                        },
                    ],
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'fullName',
            media: 'mainImage',
        },
    },
};

export default biography;
