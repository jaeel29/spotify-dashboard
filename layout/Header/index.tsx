import ArrowDown from '@/assets/icons/ArrowDown';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

const Header = ({ session }: any) => {
  return (
    <header className='bg-[#121212] bg-opacity-70 backdrop-blur-lg h-[60px] shrink-0 px-2 overflow-hidden flex items-center sticky top-0 left-0 w-full'>
      <div className='ml-auto flex gap-6'>
        <button className='btn-outline'>Upgrade</button>

        <div
          onClick={() => signOut()}
          className='flex items-center gap-2 px-1.5 py-1 pr-3 cursor-pointer rounded-full bg-black bg-opacity-70 transition-all duration-300 ease-out active:scale-95'
        >
          <div className='w-8 h-8 relative rounded-full overflow-hidden'>
            <Image
              src={session?.user?.image!}
              layout='fill'
              objectFit='contain'
              alt='profile picture'
            />
          </div>

          <div className='flex items-center gap-3'>
            <span className='text-sm text-white font-100'>{session?.user?.name}</span>

            <ArrowDown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
