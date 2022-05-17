import * as React from 'react';

function LibraryICon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M6 3h12m-3.525 8.025a3.5 3.5 0 11-4.95 4.95 3.5 3.5 0 014.95-4.95zM18.733 6H5.267a2 2 0 00-1.996 2.133l.733 11A2 2 0 006 21h12a2 2 0 001.996-1.867l.733-11A2 2 0 0018.733 6z'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default LibraryICon;
