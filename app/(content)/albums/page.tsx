import { Metadata } from 'next';

import AlbumsDescription from '@/components/modules/Albums/AlbumsDescription';
import AlbumsHero from '@/components/modules/Albums/AlbumsHero';
import { getAlbums, getAlbumsDescription } from '@/libs/sanity/utils';

export const metadata: Metadata = {
    title: 'DJ Cat Paws - Albums',
    description: 'DJ Cat Paws has released a number of albums. Find out more about them here.',
};

const Albums = async () => {
    const albumDescriptionData = await getAlbumsDescription();

    return (
        <>
            <div>
                <AlbumsHero />
                <AlbumsDescription data={albumDescriptionData} className="apply-pt" />
            </div>
        </>
    );
};

export const revalidate = 18_000_000;

export default Albums;
