import { currentTrackIdState } from 'atoms/songAtom';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import useSpotify from './useSpotify';

const useSongInfo = () => {
  const spotifyApi = useSpotify();
  const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
  const [songInfo, setSongInfo] = useState(null);

  useEffect(() => {
    const fetchSongInfo = async () => {
      if (currentTrackId) {
        const res = await fetch(`https://api.spotify.com/v1/tracks/${currentTrackId}`, {
          headers: {
            Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
          },
        });

        const trackInfo = await res.json();

        setSongInfo(trackInfo);
      }
    };

    fetchSongInfo();
  }, [currentTrackId, spotifyApi]);

  return songInfo;
};

export default useSongInfo;
