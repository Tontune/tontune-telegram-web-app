import { FC } from 'react';
import clock from 'src/assets/icons/clock.svg';
import pin from 'src/assets/icons/pin.svg';
import { Event } from 'src/types/events.ts';

export const EventCard: FC<Event> = (props) => {
  const { time, location, coverSrc, name } = props;

  return (
    <div className='w-full relative text-white'>
      <img src={coverSrc} className='relative rounded-3xl' alt={`${name} cover`} />
      <div className='absolute bottom-0 p-[16px] w-full backdrop-blur-[4px] backdrop-brightness-75 isolate bg-transparent rounded-br-3xl rounded-bl-3xl'>
        <div className='text-lg font-semibold'>{name}</div>
        <div className='flex flex-row w-full justify-between items-center text-sm'>
          <div className='flex items-center'>
            <img src={pin} className='w-4 h-4' alt='Location icon' />
            <div className='flex ml-2 '>
              <div className="text-wrap">{location.placement},&nbsp;</div>
              <div>{location.city}</div>
            </div>
          </div>
          <div className='flex items-center'>
            <img src={clock} className='w-4 h-4' alt='Clock icon' />
            <div className='ml-2'>{time}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
