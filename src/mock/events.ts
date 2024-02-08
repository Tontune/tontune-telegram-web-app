import { Event } from '@/types/events.ts';

import event1 from '../../public/img/backgrounds/event1.png';
import event2 from '../../public/img/backgrounds/event2.png';
import event3 from '../../public/img/backgrounds/event3.png';

export const events: Event[] = [
  {
    id: '0',
    name: 'Concert name',
    location: {
      city: 'City',
      placement: 'Placement',
    },
    time: 'HH:MM PM',
    coverSrc: event1,

  },
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
