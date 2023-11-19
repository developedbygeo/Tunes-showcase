import { Metadata } from 'next';

import { getEvents } from '@/libs/sanity/utils';

import EventsList from '@/components/modules/Events/EventsList';
import EventsHero from '@/components/modules/Events/EventsHero';

export const metadata: Metadata = {
    title: 'DJ Cat Paws - Events',
    description: 'Looking for the next event DJ Cat Paws will be playing at? Find out here.',
};

const EventsPage = async () => {
    const data = await getEvents();

    return (
        <>
            <div className="overflow-hidden">
                <h2 className="sr-only">Find out all about the upcoming events</h2>
                <EventsHero />
                <EventsList data={data} />
            </div>
        </>
    );
};

export const revalidate = 18_000_000;

export default EventsPage;
