import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import arrowLeft from '@/assets/icons/arrow-left.svg';
import buttonRight from '@/assets/icons/button-right.svg';
import clock from '@/assets/icons/clock.svg';
import diamond from '@/assets/icons/diamond.svg';
import pin from '@/assets/icons/pin.svg';
import avatar4 from '@/assets/img/avatars/avatar4.png?url';
import { events } from '@/mock/events.ts';

interface ITicketCounts {
  standard: number;
  vip: number;
  meetAndGreet: number;
}

type TicketType = 'standard' | 'vip' | 'meetAndGreet';

const _TicketPrice = {
  standard: '5 TON',
  vip: '10 TON',
  meetAndGreet: '25 TON',
};

export const Event = () => {
  const { id } = useParams();

  // TODO: remove the non-null assertion operator
  const eventId = parseInt(id!, 10);

  const eventData = events[eventId];

  const { name, coverSrc } = eventData;

  const [ticketCounts, setTicketCounts] = useState<ITicketCounts>({
    standard: 0,
    vip: 0,
    meetAndGreet: 0,
  });

  const updateTicketCount = (type: TicketType, delta: number) => {
    setTicketCounts(prevCounts => ({
      ...prevCounts,
      [type]: Math.max(prevCounts[type] + delta, 0), // Prevent negative values
    }));
  };

  return (
    <div className="w-full relative text-white">
      <Link to={'/events'}>
        <button className=" m-2 absolute z-10 w-[36px] h-[36px] rounded-[50%] bg-[#0098eb] flex items-center justify-center">
          <img alt={'<-'} className="w-[20px] h-[20px]" src={arrowLeft} />
        </button>
      </Link>
      <img src={coverSrc} className="relative rounded-3xl" alt={`${name} cover`} />
      <div className="flex justify-between items-center pt-4">
        <div className="flex gap-2 items-center">
          <div className="rounded-[50%] w-[38px] h-[38px]">
            <img className="w-full h-full rounded-[50%]" src={avatar4} alt="Avatar" />
          </div>
          <div className="flex flex-col">
            <div className="text-slate-900 text-[16px]">Concert name</div>
            <div className="text-gray-400 text-[12px]">Artist</div>
          </div>
        </div>
        <div>
          <img alt=">" src={buttonRight} className="w-[24px] h-[24px] text-black" />
        </div>
      </div>

      <div className="text-slate-950 pt-4 text-[24px]">{name}</div>

      {/* Description */}

      <div className="flex flex-col justify-start pt-2">
        <div className="text-slate-800 text-[18px]">Description</div>
        <div className="text-gray-400 text-[12px] pt-1">
          The fifth concert tour by American singer-songwriter Lana Del Rey in support of the fifth studio album Lust
          for Life.
        </div>
      </div>

      {/* Date & Time */}

      <div className="pt-4">
        <div className="text-slate-800 text-[16px]">Data & Time</div>
        <div className="flex gap-0.5 items-center">
          <img alt="pin" src={pin} className="w-[14px] h-[14px] " />
          <div className="text-slate-950 text-[12px]">25 August 2024</div>
        </div>
        <div className="flex gap-0.5 items-center">
          <img alt="time" src={clock} className="w-[14px] h-[14px]" />
          <div className="text-slate-950 text-[12px]">19:00 PM</div>
        </div>
      </div>

      {/* Tickets */}

      <div className="pt-4">
        <div className="text-slate-800 text-[18px]">Tickets</div>
        <div className="flex gap-2 flex-col pt-2">
          {Object.entries(ticketCounts).map(([type, count]) => (
            <div key={type} className="flex justify-between h-[40px] text-black text-[12px] gap-2 pt-1">
              <button className="w-[110px] text-start bg-sky-500 rounded-[10px] p-2 text-white">
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
              <button className="w-[90px] rounded-[10px] p-2 bg-white">{_TicketPrice[type as TicketType]}</button>
              <button
                className="w-[40px] rounded-[10px] p-2 bg-white"
                onClick={() => updateTicketCount(type as TicketType, -1)}
              >
                -
              </button>
              <div className="w-[40px] rounded-[10px] p-2 bg-white text-center">{count}</div>
              <button
                className="w-[40px] rounded-[10px] p-2 bg-white"
                onClick={() => updateTicketCount(type as TicketType, 1)}
              >
                +
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={() => alert('Tickets purchased!')}
          className="bg-sky-500 rounded-[40px] w-[100%] h-[40px] gap-2 flex justify-center items-center mt-4 text-[14px]"
        >
          <img alt="buy" src={diamond} />
          <div>Buy Ticket</div>
        </button>
      </div>
    </div>
  );
};
