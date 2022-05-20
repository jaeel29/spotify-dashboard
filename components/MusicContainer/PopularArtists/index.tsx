import React from 'react';
import Image from 'next/image';
import items from 'data/popularArtists.json';

const PopularArtists = () => {
  return (
    <section className='w-full mb-[48px] overflow-hidden pb-6'>
      <div className='flex items-center justify-between mb-6'>
        <h1 className='title-2'>Popular Artists</h1>

        <span className='uppercase text-[#B3B3B3] text-sm hover:underline cursor-pointer'>
          See all
        </span>
      </div>

      <div className='rounded h-full flex items-center gap-4 overflow-auto scrollbar-hide'>
        {items.map((item) => (
          <div
            className='shrink-0 flex flex-col p-4 gap-4 bg-[#2A2A2A] rounded-md overflow-hidden cursor-pointer hover:bg-[#414141]'
            key={item.id}
          >
            <div className='relative h-[180px] w-[180px] shadow-3xl overflow-hidden rounded-full'>
              <Image src={item.image} layout='fill' objectFit='cover' alt='album image' />
            </div>

            <div>
              <h3 className='text-[18px] font-100'>{item.name}</h3>
              <span className='text-sm font-100 opacity-50'>Artist</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularArtists;
