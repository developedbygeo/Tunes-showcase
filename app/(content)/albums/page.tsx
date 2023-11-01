import AlbumsDescription from '@/components/modules/Albums/AlbumsDescription';
import AlbumsHero from '@/components/modules/Albums/AlbumsHero';
import { getAlbums, getAlbumsDescription } from '@/libs/sanity/utils';

const Albums = async () => {
    const albumDescriptionData = await getAlbumsDescription();

    return (
        <>
            <div className="min-h-screen">
                <AlbumsHero className="apply-pb min-h-screen" />
                <AlbumsDescription data={albumDescriptionData} className="apply-py" />
            </div>
        </>
    );
};

export default Albums;
