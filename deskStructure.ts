import { deskTool } from 'sanity/desk';

const customDeskStructure = () =>
  deskTool({
    structure: (S) =>
      S.list()
        .id('allContent')
        .items([
          S.listItem()
            .id('general')
            .title('General')
            .child(
              S.list()
                .title('General Content')
                .items([
                  S.documentTypeListItem('event').title('Events'),
                  S.documentTypeListItem('album').title('Albums'),
                ])
            ),
          S.listItem()
            .id('blog')
            .title('Blog')
            .child(
              S.list()
                .title('Blog Content')
                .items([
                  S.documentTypeListItem('author').title('Authors'),
                  S.documentTypeListItem('category').title('Categories'),
                  S.documentTypeListItem('blogPost').title('Blog Posts'),
                ])
            ),
        ]),
  });

export default customDeskStructure;
