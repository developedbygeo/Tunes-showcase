import { Rule } from 'sanity';

const musicDescription = {
    name: 'musicDescription',
    title: 'Music Description',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'ID',
            type: 'string',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'imgHorizontal',
            title: 'Image Horizontal',
            type: 'image',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'imgVertical1',
            title: 'Image Vertical 1',
            type: 'image',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'imgVertical2',
            title: 'Image Vertical 2',
            type: 'image',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'title',
            title: 'title',
            type: 'string',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'description',
            title: 'description',
            type: 'text',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [
                {
                    name: 'feature',
                    title: 'feature',
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Feature Title',
                            type: 'string',
                            validation: (Rule: Rule) => Rule.required(),
                        },
                        {
                            name: 'description',
                            title: 'Feature Description',
                            type: 'text',
                            validation: (Rule: Rule) => Rule.required(),
                        },
                        {
                            name: 'icon',
                            title: 'Feature Icon',
                            type: 'image',
                            validation: (Rule: Rule) => Rule.required(),
                        },
                    ],
                },
            ],
            validation: (Rule: Rule) => Rule.required(),
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
};

export default musicDescription;
