import { EventCard } from '@/components/cards/event-card.tsx';

import event1 from '/public/img/backgrounds/event1.png';
import event2 from '/public/img/backgrounds/event2.png';
import event3 from '/public/img/backgrounds/event3.png';

export const Events = () => {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      <h2 className="mb-4 text-navy-700 text-2xl font-bold dark:text-white">Upcoming Events</h2>
      <EventCard name="Concert name" location={{placement: "Placement", city: "City" }} time="HH:MM PM" coverSrc={event1} />
      <EventCard name="Lil uzi vert’s concert" location={{placement: "Rolling Loud", city: "Lisbon" }} time="21:00 AM" coverSrc={event2} />
      <EventCard name="Lana Del Rey’s concert" location={{placement: "Leeds Festival", city: "Leeds" }} time="19:00 AM" coverSrc={event3} />
    </div>
  );
};
