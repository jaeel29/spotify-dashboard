import React, { FC, Fragment } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import { getProviders, signIn } from 'next-auth/react';
import Link from 'next/link';
import Head from 'next/head';

const login: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ providers }) => {
  return (
    <Fragment>
      <Head>
        <title>Login to Spotify</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicons/Spotify_Icon_RGB_Green.png' />
      </Head>

      <div className='border border-gray-300 py-5 flex justify-center items-center'>
        <Link href={'/'}>
          <div className='relative w-[190px] h-[60px] cursor-pointer transition-all duration-300 ease-out active:scale-90 active:opacity-80'>
            <Image
              src={'/favicons/Spotify_Logo_RGB_Black.png'}
              layout='fill'
              objectFit='contain'
              alt='Spotify Logo'
              priority
            />
          </div>
        </Link>
      </div>

      {Object?.values(providers).map((provider: any) => (
        <div className='flex justify-center py-10' key={Math.random()}>
          <button className='btn' onClick={() => signIn(provider.id, { callbackUrl: '/' })}>
            Login with {provider.name}
          </button>
        </div>
      ))}
    </Fragment>
  );
};

export default login;

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
};
