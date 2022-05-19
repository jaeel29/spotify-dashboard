import HomeIcon from '@/assets/icons/HomeIcon';
import LibraryICon from '@/assets/icons/LibraryIcon';
import SearchIcon from '@/assets/icons/SearchIcon';
import useSpotify from 'hooks/useSpotify';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { playlistIdState } from 'atoms/playlistAtom';
import { useRouter } from 'next/router';

const navigation = [
  {
    id: '1',
    title: 'Home',
    icon: <HomeIcon />,
    url: '/',
  },
  {
    id: '2',
    title: 'Search',
    icon: <SearchIcon />,
    url: '/search',
  },
  {
    id: '3',
    title: 'Your Library',
    icon: <LibraryICon />,
    url: '/library',
  },
];

const Sidebar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [activeIndex, setActiveIndex] = useState(navigation[0].id);
  const [playlists, setPlaylists] = useState<any>([]);
  const [playlistId, setPlaylistId] = useRecoilState<any>(playlistIdState);
  const spotifyApi = useSpotify();

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => setPlaylists(data.body.items));
    }
  }, [session, spotifyApi]);

  return (
    <div className='bg-black w-[240px] h-full p-6 overflow-y-auto scrollbar-hide'>
      <Link href={'/'}>
        <div className='w-[150px] h-[40px] relative mb-5 hover:opacity-70 cursor-pointer'>
          <Image
            src={'/favicons/Spotify_Logo_RGB_Green.png'}
            layout='fill'
            objectFit='contain'
            objectPosition='left center'
            alt='Spotify Logo'
            priority
          />
        </div>
      </Link>

      <nav className=' border-b border-gray-500 border-opacity-40'>
        <ul className='flex flex-col gap-6 py-6'>
          {navigation.map(({ id, title, icon, url }) => (
            <li key={id} onClick={() => setActiveIndex(id)}>
              <Link href={'/'}>
                <a className={`link ${activeIndex === id && 'activeLink'}`}>
                  {icon}
                  <span className={`${activeIndex === id && 'text-white'}`}>{title}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className='flex flex-col gap-6 py-6'>
        {playlists.map((playlist: any) => (
          <span
            className='link'
            key={playlist.id}
            onClick={() => {
              if (typeof playlist?.id === 'string') {
                setPlaylistId(playlist.id);
                router.push(`/${playlist?.id}`);
              }
            }}
          >
            {playlist.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
