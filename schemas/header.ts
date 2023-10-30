import { Rule } from 'sanity';

const hero = {
    name: 'header',
    title: 'Header',
    type: 'document',
    fields: [
        {
            name: 'headerTitle',
            title: 'Title',
            type: 'string',
            initialValue: 'My Header',
        },
        {
            name: 'logo',
            title: 'Logo Image',
            type: 'image',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'navigation',
            title: 'Navigation',
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
                            name: 'navigationLinkTitle',
                            title: 'Navigation Link',
                            type: 'object',
                            fields: [
                                {
                                    name: 'title',
                                    title: 'Title',
                                    type: 'string',
                                    validation: (Rule: Rule) => Rule.required(),
                                },
                                {
                                    name: 'href',
                                    title: 'Href',
                                    type: 'string',
                                    validation: (Rule: Rule) => Rule.required(),
                                },
                            ],
                        },
                    ],
                    preview: {
                        select: {
                            title: 'navigationLinkTitle.title',
                        },
                    },
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'headerTitle',
        },
    },
};

export default hero;
