import AlbumsDescription from '@/components/modules/Albums/AlbumsDescription';
import AlbumsHero from '@/components/modules/Albums/AlbumsHero';
import { getAlbums, getAlbumsDescription } from '@/libs/sanity/utils';

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

export default Albums;
