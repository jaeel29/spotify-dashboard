import React from 'react';
import items from 'data/goodEvening.json';
import Image from 'next/image';

const GoodEvening = () => {
  return (
    <section className='w-full mb-[48px]'>
      <div className='flex items-center justify-between mb-6'>
        <h1 className='title-1'>Good Evening</h1>

        <span className='uppercase text-[#B3B3B3] text-sm hover:underline cursor-pointer'>
          See all
        </span>
      </div>

      <div className='rounded h-full grid grid-cols-3 gap-4 '>
        {items.map((item) => (
          <div
            className='flex items-center gap-4 bg-[#2A2A2A] rounded-md overflow-hidden cursor-pointer hover:bg-[#414141]'
            key={item.id}
          >
            <div className=' relative h-[80px] w-[80px] overflow-hidden shadow-3xl'>
              <Image src={item.image} layout='fill' objectFit='cover' alt='album image' />
            </div>

            <h3 className='text-[18px] font-100'>{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GoodEvening;
