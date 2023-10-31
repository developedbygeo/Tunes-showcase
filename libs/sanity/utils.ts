import { createClient, groq } from 'next-sanity';

import { Album, Event, FooterData, HeaderData, HeroData } from '@/types/sanity';
import { albumsQuery, eventsQuery, footerQuery, headerQuery, heroQuery } from '@/libs/sanity/queries';

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
