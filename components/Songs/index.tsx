import { playlistState } from 'atoms/playlistAtom';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import React from 'react';
import { useRecoilValue } from 'recoil';
import SongRow from './SongRow';

const Songs = () => {
  const playlist = useRecoilValue<any>(playlistState);
  const songs = playlist?.tracks?.items;

  return (
    <div className='flex flex-col gap-5'>
      {songs?.map((track: any, index: any) => (
        <SongRow key={index} track={track} index={index} />
      ))}
    </div>
  );
};

export default Songs;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
