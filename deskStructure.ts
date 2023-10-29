import { deskTool } from 'sanity/desk';
import deskIcons from '@/common/deskIcons';

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
                                    S.documentTypeListItem('header').title('Header').icon(deskIcons.general.header),
                                    S.documentTypeListItem('hero').title('Hero').icon(deskIcons.general.hero),
                                    S.documentTypeListItem('event').title('Events').icon(deskIcons.general.events),
                                    S.documentTypeListItem('album').title('Albums').icon(deskIcons.general.albums),
                                    S.documentTypeListItem('footer').title('Footer').icon(deskIcons.general.footer),
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
                                    S.documentTypeListItem('category')
                                        .title('Categories')
                                        .icon(deskIcons.blog.categories),
                                    S.documentTypeListItem('blogPost').title('Blog Posts').icon(deskIcons.blog.posts),
                                ])
                        ),
                ]),
    });

export default customDeskStructure;
