import HomeIcon from '@/assets/icons/HomeIcon';
import LibraryICon from '@/assets/icons/LibraryIcon';
import SearchIcon from '@/assets/icons/SearchIcon';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

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
  const { data: session, status } = useSession();
  const [activeIndex, setActiveIndex] = useState(navigation[0].id);

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
        {Array(20)
          .fill(4)
          .map((x, index) => (
            <p className='link' key={index}>
              Playlist
            </p>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
