import { createClient, groq } from 'next-sanity';

import { albumsQuery, eventsQuery } from '@/libs/sanity/queries';

const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: new Date().toISOString().split('T')[0],
});

export const getEvents = async () => {
    const eventData = await sanityClient.fetch(eventsQuery);
    return eventData;
};

export const getAlbums = async () => {
    const albumData = await sanityClient.fetch(albumsQuery);
    return albumData;
};
