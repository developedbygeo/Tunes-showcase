import { Rule } from 'sanity';

const albums = {
    name: 'album',
    title: 'Album',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'ID',
            type: 'string',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'img',
            title: 'Image',
            type: 'image',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: 'tracks',
            title: 'Tracks',
            type: 'array',
            of: [
                {
                    name: 'track',
                    title: 'Track',
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                            validation: (Rule: Rule) => Rule.required(),
                        },
                        {
                            name: 'file',
                            title: 'Track File',
                            type: 'file',
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
            title: 'name',
            subtitle: 'tracks.length',
        },
    },
};

export default albums;
