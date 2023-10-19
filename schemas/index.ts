import events from '@/schemas/events';
import albums from '@/schemas/albums';

import author from '@/schemas/blog/author';
import category from '@/schemas/blog/category';
import blockContent from '@/schemas/blog/blockContent';
import blogPost from '@/schemas/blog/blogPost';

export const schemaTypes = [events, albums, author, category, blogPost, blockContent];
