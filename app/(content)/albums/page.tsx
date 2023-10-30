import AlbumsHero from '@/components/modules/Albums/AlbumsHero';
import { getAlbums } from '@/libs/sanity/utils';

const Albums = async () => {
    const albumData = await getAlbums();

    return (
        <>
            <div className="min-h-screen">
                <AlbumsHero />
            </div>
        </>
    );
};

export default Albums;
