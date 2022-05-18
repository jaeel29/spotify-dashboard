import DotsIcon from '@/assets/icons/DotsIcon';
import { convertMsToHM } from 'library/time';
import Image from 'next/image';
import React from 'react';

const SongRow = ({ track, index }: any) => {
  return (
    <>
      <div className='flex px-5 items-center cursor-pointer hover:bg-[#3D3D45] py-2'>
        <div className='flex gap-3 w-[40%]'>
          <div className='flex gap-3 items-center'>
            <span className='text-base font-100 text-gray-300'>{index + 1}</span>

            <div className='relative w-12 h-12'>
              <Image
                src={track?.track?.album?.images?.[0]?.url}
                layout='fill'
                objectFit='contain'
                alt={track?.track.name}
              />
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            <h6 className='text-white font-100 text-base'>{track?.track?.name}</h6>
            <span className='text-white font-100 text-xs opacity-50'>
              {track?.track?.artists?.[0]?.name}
            </span>
          </div>
        </div>

        <div className='w-[30%]'>
          <span className='text-base font-100 text-gray-300'>{track?.track?.album?.name}</span>
        </div>

        <div className='flex-1'>
          <span className='text-base font-100 text-gray-300'>
            {track?.track?.album?.release_date}
          </span>
        </div>

        <div className='flex items-center justify-end gap-2'>
          <span className='text-base font-100 text-gray-300'>
            {convertMsToHM(track?.track?.duration_ms)}
          </span>

          <DotsIcon />
        </div>
      </div>
    </>
  );
};

export default SongRow;
