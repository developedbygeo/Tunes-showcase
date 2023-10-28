import { getHero } from '@/libs/sanity/utils';

import Events from '@/components/modules/Events/Events';
import Hero from '@/components/modules/Hero/Hero';

const Home = async () => {
    const data = await getHero();
    return (
        <main className="flex min-h-screen flex-col items-center">
            <h1 className="sr-only">DJ Cat Paws</h1>
            <Hero data={data} className="mb-44" />
            <Events />
            <div className="h-[4000px] w-screen"></div>
        </main>
    );
};

export default Home;
