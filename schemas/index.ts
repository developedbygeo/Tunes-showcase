import header from '@/schemas/header';
import footer from '@/schemas/footer';
import hero from '@/schemas/hero';
import events from '@/schemas/events';
import albums from '@/schemas/albums';

import author from '@/schemas/blog/author';
import category from '@/schemas/blog/category';
import blockContent from '@/schemas/blog/blockContent';
import blogPost from '@/schemas/blog/blogPost';
import musicDescription from '@/schemas/musicDescription';
import biography from '@/schemas/biography';

export const schemaTypes = [
    header,
    footer,
    hero,
    biography,
    events,
    albums,
    musicDescription,
    author,
    category,
    blogPost,
    blockContent,
];
