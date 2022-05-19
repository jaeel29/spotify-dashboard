import * as React from 'react';

function NextIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M17.512 10.697L8.116 4.824c-1.023-.639-2.351.096-2.351 1.303v11.745c0 1.206 1.328 1.943 2.351 1.302l9.395-5.872c.965-.6.965-2.003.002-2.605z'
        fill='#fff'
      />
      <path
        d='M18.235 18.773V5.227'
        stroke='#fff'
        strokeWidth={2.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default NextIcon;
