import * as React from 'react';

function ShuffleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M18.347 18.28l1.814-1.813-1.814-1.813M10.351 9.232L8.92 7.262a1.815 1.815 0 00-1.475-.747l-3.605.016M18.347 8.325l1.814-1.813-1.814-1.814'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.649 13.766l1.432 1.97c.343.47.892.748 1.474.747l3.606-.016M20.16 6.53l-3.604-.015a1.813 1.813 0 00-1.475.748L8.92 15.735a1.815 1.815 0 01-1.475.748l-3.605-.016'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default ShuffleIcon;
