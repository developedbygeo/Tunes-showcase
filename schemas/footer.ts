import { Rule } from 'sanity';

const footer = {
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
        {
            name: 'footerTitle',
            title: 'Title',
            type: 'string',
            initialValue: 'Footer',
        },
        {
            name: 'logo',
            title: 'Logo Image',
            type: 'image',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'quote',
            title: 'Quote',
            type: 'string',
        },

        {
            name: 'socials',
            title: 'Socials',
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
                            name: 'socialName',
                            title: 'Social Network',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Github', value: 'Github' },
                                    { title: 'Facebook', value: 'Facebook' },
                                    { title: 'Twitter', value: 'Twitter' },
                                    { title: 'YouTube', value: 'YouTube' },
                                    { title: 'LinkedIn', value: 'LinkedIn' },
                                ],
                            },
                            validation: (Rule: Rule) => Rule.required(),
                        },
                        {
                            name: 'url',
                            title: 'URL',
                            type: 'url',
                            validation: (Rule: Rule) => Rule.required().uri(),
                        },
                    ],
                    preview: {
                        select: {
                            title: 'socialName',
                        },
                    },
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'footerTitle',
        },
    },
};

export default footer;
