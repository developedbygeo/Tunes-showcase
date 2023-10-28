import { Rule } from 'sanity';

const hero = {
    name: 'hero',
    title: 'Hero',
    type: 'document',
    fields: [
        {
            name: 'heroTitle',
            title: 'Title',
            type: 'string',
            initialValue: 'Hero',
        },
        {
            name: 'logo',
            title: 'Logo Image',
            type: 'image',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'image',
            title: 'Hero Image',
            type: 'image',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'track',
            title: 'Hero Music track',
            type: 'file',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'trackImage',
            title: 'Track Image',
            description: 'Complimentary image for the track',
            type: 'image',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'locations',
            title: 'Locations',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'id',
                            title: 'ID',
                            type: 'string',
                            validation: (Rule: Rule) => Rule.required(),
                        },
                        {
                            name: 'locationName',
                            title: 'Location Name',
                            type: 'string',
                            validation: (Rule: Rule) => Rule.required(),
                        },
                    ],
                    preview: {
                        select: {
                            title: 'locationName',
                        },
                    },
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'heroTitle',
        },
    },
};

export default hero;
