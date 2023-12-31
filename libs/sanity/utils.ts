import { createClient, groq } from 'next-sanity';

import { Album, AlbumDescription, BlogPostData, Event, FooterData, HeaderData, HeroData } from '@/types/sanity';
import {
    albumsDescriptionQuery,
    albumsQuery,
    biographyQuery,
    blogPostsQuery,
    eventsQuery,
    footerQuery,
    getBlogPostQuery,
    headerQuery,
    heroQuery,
} from '@/libs/sanity/queries';
import BiographyData from '@/types/sanity/biography';

const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: new Date().toISOString().split('T')[0],
    useCdn: true,
});

export const getHeader = async (): Promise<HeaderData> => {
    const headerData = await sanityClient.fetch(headerQuery);
    return headerData;
};

export const getFooter = async (): Promise<FooterData> => {
    const footerData = await sanityClient.fetch(footerQuery);
    return footerData;
};

export const getHero = async (): Promise<HeroData> => {
    const heroData = await sanityClient.fetch(heroQuery);
    return heroData;
};

export const getEvents = async (): Promise<Event[]> => {
    const eventData = await sanityClient.fetch(eventsQuery);
    return eventData;
};

export const getAlbums = async (): Promise<Album[]> => {
    const albumData = await sanityClient.fetch(albumsQuery);
    return albumData;
};

export const getAlbumsDescription = async (): Promise<AlbumDescription> => {
    const albumData = await sanityClient.fetch(albumsDescriptionQuery);
    return albumData;
};

export const getBiography = async (): Promise<BiographyData> => {
    const biographyData = await sanityClient.fetch(biographyQuery);
    return biographyData;
};

export const getBlogPosts = async (): Promise<BlogPostData[]> => {
    const blogPostData = await sanityClient.fetch(blogPostsQuery);
    return blogPostData;
};

export const getBlogPost = async (slug: string): Promise<BlogPostData> => {
    const query = getBlogPostQuery(slug);
    const blogPost = await sanityClient.fetch(query);
    return blogPost;
};
