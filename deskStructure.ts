import { deskTool } from 'sanity/desk';
import deskIcons from '@/common/deskIcons';

import { BsCalendar2Event } from 'react-icons/bs';

const customDeskStructure = () =>
  deskTool({
    structure: (S) =>
      S.list()
        .id('allContent')
        .items([
          S.listItem()
            .id('general')
            .icon(deskIcons.general.icon)
            .title('General')
            .child(
              S.list()
                .title('General Content')
                .items([
                  S.documentTypeListItem('event').title('Events').icon(deskIcons.general.events),
                  S.documentTypeListItem('album').title('Albums').icon(deskIcons.general.albums),
                ])
            ),
          S.listItem()
            .icon(deskIcons.blog.icon)
            .id('blog')
            .title('Blog')
            .child(
              S.list()
                .title('Blog Content')
                .items([
                  S.documentTypeListItem('author').title('Authors').icon(deskIcons.blog.authors),
                  S.documentTypeListItem('category').title('Categories').icon(deskIcons.blog.categories),
                  S.documentTypeListItem('blogPost').title('Blog Posts').icon(deskIcons.blog.posts),
                ])
            ),
        ]),
  });

export default customDeskStructure;
