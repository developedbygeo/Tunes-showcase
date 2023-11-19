import { Metadata } from 'next';
import { getHero } from '@/libs/sanity/utils';
import Hero from '@/components/modules/Hero/Hero';

export const metadata: Metadata = {
    title: 'DJ Cat Paws - Homepage',
    description: 'DJ Cat Paws is a DJ from the future.',
    category: 'music',
};

const Home = async () => {
    const data = await getHero();
    return (
        <div className="flex flex-col items-center">
            <h1 className="sr-only">DJ Cat Paws</h1>
            <Hero data={data} />
        </div>
    );
};

export const revalidate = 18_000_000;

export default Home;
