import Aside from 'layout/Aside';
import Player from 'layout/Player';
import React, { FC, ReactNode } from 'react';
import Sidebar from '../Sidebar';

const PageLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='h-screen overflow-hidden'>
      <div className='flex h-full'>
        <Sidebar />
        <div className='flex-1 bg-[#121212]'>{children}</div>
        <Aside />
      </div>

      <div className='sticky bottom-0 left-0'>
        <Player />
      </div>
    </div>
  );
};

export default PageLayout;
