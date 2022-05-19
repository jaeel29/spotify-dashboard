import DeviceIcon from '@/assets/icons/DeviceIcon';
import HeartIcon from '@/assets/icons/HeartIcon';
import MuetIcon from '@/assets/icons/MuetIcon';
import NextIcon from '@/assets/icons/NextIcon';
import PauseIcon from '@/assets/icons/PauseIcon';
import PlayIcon from '@/assets/icons/PlayIcon';
import PreviousIcon from '@/assets/icons/PreviousIcon';
import QueueIcon from '@/assets/icons/QueueIcon';
import ReplyIcon from '@/assets/icons/ReplyIcon';
import ShuffleIcon from '@/assets/icons/ShuffleIcon';
import VolumeIcon from '@/assets/icons/VolumeIcon';
import { currentTrackIdState, isPlayingState } from 'atoms/songAtom';
import useSongInfo from 'hooks/useSongInfo';
import useSpotify from 'hooks/useSpotify';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { debounce } from 'lodash';

const Player = () => {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
  const [isPlaying, setisPlaying] = useRecoilState(isPlayingState);
  const [volume, setVolume] = useState(50);

  const songInfo: any = useSongInfo();

  const fetchCurrentSong = async () => {
    spotifyApi.getMyCurrentPlayingTrack().then((data: any) => {
      setCurrentTrackId(data.body?.item?.id);

      spotifyApi.getMyCurrentPlaybackState().then((data) => {
        setisPlaying(data.body?.is_playing);
      });
    });
  };

  useEffect(() => {
    if (spotifyApi.getAccessToken() && !currentTrackId) {
      fetchCurrentSong();
      setVolume(50);
    }
  }, [spotifyApi, session, currentTrackId]);

  const handlePause = () => {
    spotifyApi.getMyCurrentPlaybackState().then((data) => {
      if (data.body.is_playing) {
        spotifyApi.pause();
        setisPlaying(false);
      } else {
        spotifyApi.play();
        setisPlaying(true);
      }
    });
  };

  const debounceAdjustVolume = useCallback(
    debounce((volume: any) => spotifyApi.setVolume(volume).catch((err) => console.log(err)), 500),
    []
  );

  useEffect(() => {
    if (volume > 0 && volume < 100) {
      debounceAdjustVolume(volume);
    }
  }, [volume, debounceAdjustVolume]);

  return (
    <div className='h-[100px] bg-[#181818] flex items-center gap-5 px-6 w-full border-t border-[#282828]'>
      {status === 'loading' ? (
        <div className='h-full flex justify-center items-center'>
          <p>Loading</p>
        </div>
      ) : (
        <div className='flex items-center gap-3 h-full basis-[300px]'>
          <div className='relative h-[50px] w-[50px]'>
            <Image
              // src={'/images/artists/Dizzy-dros-banner.png'}
              src={
                songInfo
                  ? songInfo?.album?.images?.[0].url
                  : '/images/artists/Dizzy-dros-banner.png'
              }
              layout='fill'
              objectFit='cover'
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
            <HeartIcon className='btn-hover' />
          </div>
        </div>
      )}

      <div className='flex-1 h-full flex items-center justify-center gap-10'>
        <ShuffleIcon className='btn-hover' />

        <div className='flex items-center justify-center gap-4'>
          <PreviousIcon className='btn-hover' />

          <div
            onClick={handlePause}
            className='cursor-pointer w-10 h-10 rounded-full bg-white flex items-center justify-center transition-all duration-200 ease-out hover:scale-110 active:scale-90'
          >
            {isPlaying ? <PlayIcon /> : <PauseIcon />}
          </div>

          <NextIcon className='btn-hover' />
        </div>

        <ReplyIcon className='btn-hover' />
      </div>

      <div className='flex justify-center items-center gap-4 h-full basis-[300px]'>
        <QueueIcon className='btn-hover' />
        <DeviceIcon className='btn-hover' />

        <div className='flex gap-2 items-center'>
          {volume > 0 ? (
            <VolumeIcon className='btn-hover' onClick={() => setVolume(0)} />
          ) : (
            <MuetIcon className='btn-hover' onClick={() => setVolume(50)} />
          )}

          {/* <div className='relative h-[4px] w-[80px] cursor-pointer'>
            <div className='w-full h-full bg-white bg-opacity-20 rounded-full' />
            <div className={`h-full w-[40%] bg-white rounded-full absolute top-0 `} />
          </div> */}

          <input
            type='range'
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className='bg-red-500'
            min={0}
            max={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
