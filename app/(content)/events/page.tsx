import { getEvents } from '@/libs/sanity/utils';
import { WithClassName } from '@/types/UI';

import EventsList from '@/components/modules/Events/EventsList';
import EventsHero from '@/components/modules/Events/EventsHero';

const EventsPage = async ({ className }: WithClassName) => {
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

export default EventsPage;