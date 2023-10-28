import { getEvents } from '@/libs/sanity/utils';
import { cn } from '@/libs/ui';
import { WithClassName } from '@/types/UI';

import EventsList from '@/components/modules/Events/EventsList';
import EventsHeader from './EventsHeader';

const Events = async ({ className }: WithClassName) => {
    const data = await getEvents();

    return (
        <section id="events" className={cn('container flex flex-col gap-8 xl:gap-12', className)}>
            <EventsHeader />
            <EventsList data={data} />
        </section>
    );
};

export default Events;
