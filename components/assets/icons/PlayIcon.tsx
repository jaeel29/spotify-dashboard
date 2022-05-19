import * as React from 'react';

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={25} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M15.402 18.485V6.64M8.598 18.485V6.64'
        stroke='#000'
        strokeWidth={3}
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default PlayIcon;
