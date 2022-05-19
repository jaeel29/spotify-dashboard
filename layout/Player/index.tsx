import DeviceIcon from '@/assets/icons/DeviceIcon';
import HeartIcon from '@/assets/icons/HeartIcon';
import QueueIcon from '@/assets/icons/QueueIcon';
import { currentTrackIdState, isPlayingState } from 'atoms/songAtom';
import useSongInfo from 'hooks/useSongInfo';
import useSpotify from 'hooks/useSpotify';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

const Player = () => {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
  const [isPlaying, setisPlaying] = useRecoilState(isPlayingState);
  const [volume, setVolume] = useState(50);

  const songInfo: any = useSongInfo();
  console.log(songInfo);

  const fetchCurrentSong = async () => {
    if (typeof window !== 'undefined') {
      spotifyApi.getMyCurrentPlayingTrack().then((data: any) => {
        console.log('Now Playing:', data.body?.item);
        setCurrentTrackId(data.body?.item?.id);

        spotifyApi.getMyCurrentPlaybackState().then((data) => {
          setisPlaying(data.body?.is_playing);
        });
      });
    }
  };

  useEffect(() => {
    if (spotifyApi.getAccessToken() && !currentTrackId) {
      fetchCurrentSong();
      setVolume(50);
    }
  }, [spotifyApi, session, currentTrackId]);

  return (
    <div className='h-[100px] bg-black flex items-center gap-5 px-6 w-full border-t border-white border-opacity-20'>
      <div className='flex items-center gap-3'>
        <div className='relative h-[50px] w-[50px]'>
          <Image
            src={
              songInfo ? songInfo?.album?.images?.[0].url : '/images/artists/Dizzy-dros-banner.png'
            }
            layout='fill'
            objectFit='contain'
            alt='album image'
          />
        </div>

        <div className=''>
          <h3 className='text-white font-100 text-base'>{songInfo?.name}</h3>
          <span className='text-white font-100 text-sm opacity-50'>
            {songInfo?.artists?.[0]?.name}
          </span>
        </div>

        <div className='ml-6'>
          <HeartIcon />
        </div>
      </div>

      <div className='border-2 flex-1'>
        <h1>Center</h1>
      </div>

      <div className='flex'>
        <QueueIcon />
        <DeviceIcon />
      </div>
    </div>
  );
};

export default Player;
