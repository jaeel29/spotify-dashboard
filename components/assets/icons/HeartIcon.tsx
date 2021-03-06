import * as React from 'react';

function Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M12.577 5.17L12 5.754l-.577-.586a5.599 5.599 0 00-7.98 0 5.809 5.809 0 000 8.102l6.113 6.208a3.43 3.43 0 004.888 0l6.113-6.207a5.81 5.81 0 000-8.103v0a5.599 5.599 0 00-7.98 0v0z'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default Icon;
