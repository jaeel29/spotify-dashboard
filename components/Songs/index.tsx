import { playlistState } from 'atoms/playlistAtom';
import React from 'react';
import { useRecoilValue } from 'recoil';
import SongRow from './SongRow';

const Songs = () => {
  const playlist = useRecoilValue<any>(playlistState);

  const songs = playlist?.tracks?.items;

  console.log(songs);

  return (
    <div className='flex flex-col gap-5'>
      {songs?.map((track: any, index: any) => (
        <SongRow key={index} track={track} index={index} />
      ))}
    </div>
  );
};

export default Songs;
