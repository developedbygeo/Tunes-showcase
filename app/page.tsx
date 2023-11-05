import { getHero } from '@/libs/sanity/utils';
import Hero from '@/components/modules/Hero/Hero';

const Home = async () => {
    const data = await getHero();
    return (
        <div className="flex flex-col items-center">
            <h1 className="sr-only">DJ Cat Paws</h1>
            <Hero data={data} />
        </div>
    );
};

export default Home;
