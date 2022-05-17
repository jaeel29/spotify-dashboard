import * as React from 'react';

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M20 21l-3.95-3.95m2.068-4.991a7.059 7.059 0 11-14.118 0 7.059 7.059 0 0114.118 0z'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default SearchIcon;
