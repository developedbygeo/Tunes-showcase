import { getEvents } from '@/libs/sanity/utils';
import { cn } from '@/libs/utils';
import { WithClassName } from '@/types/UI';

import EventsList from '@/components/modules/Events/EventsList';

const Events = async ({ className }: WithClassName) => {
    const data = await getEvents();

    return (
        <section id="events" className={cn('container flex flex-col gap-8 xl:gap-12', className)}>
            <div className="w-full text-center">
                <h2 className="big-title">World Tour Alert</h2>
                <p className="subtitle mt-0 xl:mt-4">Join the most purrfect tour!</p>
            </div>
            <EventsList data={data} />
        </section>
    );
};

export default Events;
