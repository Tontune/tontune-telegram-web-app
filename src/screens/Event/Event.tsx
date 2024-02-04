import { Link, useParams } from 'react-router-dom';
import { events } from '@/mock/events.ts';
import arrowLeft from '@/assets/icons/arrow-left.svg';
import pin from '@/assets/icons/pin.svg';
import diamond from '@/assets/icons/diamond.svg';
import clock from '@/assets/icons/clock.svg';
import buttonRight from '@/assets/icons/button-right.svg';
import avatar4 from '../../../public/img/avatars/avatar4.png';

export const Event = () => {
    const { id } = useParams();

    // TODO: remove the non-null assertion operator
    const eventId = parseInt(id!, 10);

    const eventData = events[eventId];

    const { name, location, time, coverSrc } = eventData;

    return (
      <div className='w-full relative text-white'>
        <Link to={'/events'}>
          <button
            className=' m-2 absolute z-10 w-[36px] h-[36px] rounded-[50%] bg-[#0098eb] flex items-center justify-center'>
            <img className='w-[20px] h-[20px]' src={arrowLeft} /></button>
        </Link>
        <img src={coverSrc} className='relative rounded-3xl' alt={`${name} cover`} />
        <div className='flex justify-between items-center pt-4'>
          <div className='flex gap-2 items-center'>
            <div className='rounded-[50%] w-[38px] h-[38px]'>
              <img className='w-full h-full rounded-[50%]' src={avatar4} alt='Avatar' />
            </div>
            <div className='flex flex-col'>
              <div className='text-slate-900 text-[16px]'>Concert name</div>
              <div className='text-gray-400 text-[12px]'>Artist</div>
            </div>
          </div>
          <div><img src={buttonRight} className='w-[24px] h-[24px] text-black' /></div>
        </div>

        <div className='text-slate-950 pt-4 text-[24px]'>{name}</div>

        {/* Description */}

        <div className='flex flex-col justify-start pt-2'>
          <div className='text-slate-800 text-[18px]'>Description</div>
          <div className='text-gray-400 text-[12px] pt-1'>The fifth concert tour by American singer-songwriter Lana Del
            Rey in support of the fifth studio album Lust for Life.
          </div>
        </div>

        {/* Date & Time */}

        <div className='pt-4'>
          <div className='text-slate-800 text-[16px]'>Data & Time</div>
          <div className='flex gap-0.5 items-center'>
            <img src={pin} className='w-[14px] h-[14px] ' />
            <div className='text-slate-950 text-[12px]'>25 August 2024</div>
          </div>
          <div className='flex gap-0.5 items-center'>
            <img src={clock} className='w-[14px] h-[14px]' />
            <div className='text-slate-950 text-[12px]'>19:00 PM</div>
          </div>
        </div>

        {/* Tickets */}

        <div className='pt-4'>
          <div className='text-slate-800 text-[18px]'>Tickets</div>
          <div className='flex gap-2 flex-col pt-2'>
            <div className='flex justify-between h-[40px] text-black text-[12px] gap-2 pt-1'>
              <button className='w-[110px] text-start bg-sky-500 rounded-[10px] p-2 text-white'
                      style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                Standart
              </button>
              <button className='w-[90px] rounded-[10px] p-2 bg-white'
                      style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                115$
              </button>
              <button className='w-[40px] rounded-[10px] p-2 bg-white'
                      style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                -
              </button>
              <button className='w-[40px] rounded-[10px] p-2 bg-white'
                      style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                1
              </button>
              <button className='w-[40px] rounded-[10px] p-2 bg-white'
                      style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                +
              </button>
            </div>

            <div className='flex justify-between h-[40px] text-black text-[12px] gap-2 pt-1'>
              <button className='w-[110px] text-start bg-sky-500 rounded-[10px] p-2 text-white'
                      style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                VIP
              </button>
              <button className='w-[90px] rounded-[10px] p-2 bg-white'
                      style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                120$
              </button>
              <button className='w-[40px] rounded-[10px] p-2 bg-white'
                      style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                -
              </button>
              <button className='w-[40px] rounded-[10px] p-2 bg-white'
                      style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                0
              </button>
              <button className='w-[40px] rounded-[10px] p-2 bg-white'
                      style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                +
              </button>
            </div>

            <div className='flex justify-between h-[40px] text-black text-[12px] gap-2 pt-1'>
              <button className='w-[110px] text-start bg-sky-500 rounded-[10px] p-2 text-white'
                      style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                Meet & Greet
              </button>
              <button className='w-[90px] rounded-[10px] p-2 bg-white'
                      style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                105$
              </button>
              <button className='w-[40px] rounded-[10px] p-2 bg-white'
                      style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                -
              </button>
              <button className='w-[40px] rounded-[10px] p-2 bg-white'
                      style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                0
              </button>
              <button className='w-[40px] rounded-[10px] p-2 bg-white'
                      style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                +
              </button>
            </div>

          </div>

          <button className='bg-sky-500 rounded-[40px] w-[100%] h-[40px] gap-2 flex justify-center items-center mt-4 text-[14px]'>
            <img src={diamond} />
            <div>Buy Ticket</div>
          </button>
        </div>

      </div>
    )
      ;
  }
;
