import Header from 'layout/Header';
import { useSession } from 'next-auth/react';
import React from 'react';

const MusicContainer = () => {
  const { data: session, status } = useSession({ required: true });

  console.log(session);

  // let content;

  // if (status === 'loading') {
  //   content = <p>Loading</p>;
  // }

  return (
    <main className='h-full'>
      {status === 'loading' ? (
        <div className='h-full flex justify-center items-center'>
          <p>Loading</p>
        </div>
      ) : (
        <div className='h-full relative overflow-y-auto scrollbar-hide'>
          {/* Header */}
          <Header session={session} />

          <div className='h-[calc(100%-60px)] border-red-500 border px-6 pt-6'>
            {/* Sponsored Banner */}
            <section>
              <div className='h-[270px] w-full rounded bg-green-500 mx-auto'></div>
            </section>

            {/* Good afternoon */}

            {/* Shows a try */}

            {/* Your top mixes */}

            {/* Recently Played */}

            {/* Uniquely yours */}

            {/* Popular Artists */}

            {/* Trending Now */}
          </div>
        </div>
      )}
    </main>
  );
};

export default MusicContainer;
