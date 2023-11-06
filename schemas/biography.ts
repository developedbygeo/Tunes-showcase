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
                            validation: (Rule: Rule) => Rule.required(),
                        },
                        {
                            name: 'location',
                            title: 'Location',
                            type: 'string',
                            validation: (Rule: Rule) => Rule.required(),
                        },
                        {
                            name: 'timeFrame',
                            title: 'Time Frame',
                            type: 'string',
                            validation: (Rule: Rule) => Rule.required(),
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                            validation: (Rule: Rule) => Rule.required(),
                        },
                        {
                            name: 'duration',
                            title: 'Duration',
                            type: 'string',
                            validation: (Rule: Rule) => Rule.required(),
                        },
                    ],
                },
            ],
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Title', type: 'string', validation: (Rule: Rule) => Rule.required() },
                        {
                            name: 'level',
                            title: 'Level',
                            type: 'number',
                            validation: (Rule: Rule) => Rule.required().min(0).max(100),
                        },
                    ],
                },
            ],
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
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                            validation: (Rule: Rule) => Rule.required(),
                        },
                        {
                            name: 'degree',
                            title: 'Degree',
                            type: 'string',
                            validation: (Rule: Rule) => Rule.required(),
                        },
                        {
                            name: 'institution',
                            title: 'Institution',
                            type: 'string',
                            validation: (Rule: Rule) => Rule.required(),
                        },
                        {
                            name: 'year',
                            title: 'Year',
                            type: 'date',
                            validation: (Rule: Rule) => Rule.required(),
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
