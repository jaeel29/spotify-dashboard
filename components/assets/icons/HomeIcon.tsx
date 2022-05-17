import * as React from 'react';

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M9.5 20.5V16a2.5 2.5 0 115 0v4.5H20v-8.586a2 2 0 00-.586-1.414l-6.707-6.707a.999.999 0 00-1.414 0L4.586 10.5A2 2 0 004 11.914V20.5h5.5z'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default HomeIcon;
