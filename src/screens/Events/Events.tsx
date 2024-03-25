import { Link } from 'react-router-dom';

import { EventCard } from '@/components/cards/event-card.tsx';
import { events } from '@/mock/events.ts';

export const Events = () => {
  return (
    <div className="flex h-auto w-full flex-col gap-6">
      <h2 className="mb-4 text-navy-700 text-2xl font-bold dark:text-white">Upcoming Events</h2>
      <div className="flex flex-col gap-4">
        {events.map((props, i) => (
          <Link key={props.id} to={`/events/${i}`}>
            <EventCard key={props.name} {...props} />
          </Link>
        ))}
      </div>
    </div>
  );
};
