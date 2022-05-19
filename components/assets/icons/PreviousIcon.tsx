import * as React from 'react';

function PreviousIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M5.765 18.773V5.228'
        stroke='#fff'
        strokeWidth={2.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.487 13.303l9.397 5.873c1.023.639 2.351-.096 2.351-1.303V6.128c0-1.206-1.328-1.943-2.351-1.302l-9.395 5.872a1.534 1.534 0 00-.002 2.605z'
        fill='#fff'
      />
    </svg>
  );
}

export default PreviousIcon;
