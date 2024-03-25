import event2 from '@/assets/img/backgrounds/event2.png?url';
import event3 from '@/assets/img/backgrounds/event3.png?url';
import { Event } from '@/types/events.ts';

export const events: Event[] = [
  {
    id: '1',
    name: 'Lil uzi vert’s concert',
    location: {
      city: 'Lisbon',
      placement: 'Rolling Loud',
    },
    time: '21:00 AM',
    coverSrc: event2,
  },
  {
    id: '2',
    name: 'Lana Del Rey’s concert',
    location: {
      city: 'Leeds',
      placement: 'Leeds Festival',
    },
    time: '19:00 AM',
    coverSrc: event3,
  },
];
