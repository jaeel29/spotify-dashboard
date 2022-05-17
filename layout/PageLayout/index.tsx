import React, { FC, ReactNode } from 'react';
import Player from '../Player';
import Sidebar from '../Sidebar';

const PageLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='h-screen flex overflow-hidden'>
      <Sidebar />

      <div className='flex-1'>{children}</div>

      {/* <Player /> */}
    </div>
  );
};

export default PageLayout;
