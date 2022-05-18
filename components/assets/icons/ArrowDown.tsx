import * as React from 'react';

function ArrowDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M5.498 7.75L10 12.25l4.502-4.5'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default ArrowDown;
