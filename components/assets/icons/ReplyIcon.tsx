import * as React from 'react';

function ReplyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M14 4l2 2.005-7.151-.021C5.632 5.984 3 8.623 3 11.848a5.85 5.85 0 001.718 4.141M10 20l-2-2.005 7.151.021c3.217 0 5.849-2.639 5.849-5.864a5.85 5.85 0 00-1.718-4.141'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default ReplyIcon;
