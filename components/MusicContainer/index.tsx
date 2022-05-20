import Header from 'layout/Header';
import { useSession } from 'next-auth/react';
import React from 'react';
import GoodEvening from './GoodEvening';
import PopularArtists from './PopularArtists';
import RecentlyPlayed from './RecentlyPlayed';

const MusicContainer = () => {
  // let content;

  // if (status === 'loading') {
  //   content = <p>Loading</p>;
  // }

  return (
    <main className='h-full'>
      <div className='h-full relative overflow-y-auto scrollbar-hide'>
        {/* Header */}
        <Header />

        <div className='h-[calc(100%-60px)] px-6 pt-6'>
          {/* Good afternoon */}
          <GoodEvening />

          {/* Recently Played */}
          <RecentlyPlayed />

          {/* Popular Artists */}
          <PopularArtists />

          {/* Trending Now */}
        </div>
      </div>
    </main>
  );
};

export default MusicContainer;
