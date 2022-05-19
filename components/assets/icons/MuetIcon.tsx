import * as React from 'react';

function MuetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M22.297 9.993l-3.893 3.894m3.893 0l-3.893-3.894M7.855 8.118H5.123a1.15 1.15 0 00-1.15 1.15v5.464c0 .635.515 1.15 1.15 1.15h2.732l4.577 3.878c.748.634 1.893.102 1.893-.878V5.118c0-.98-1.147-1.512-1.893-.878L7.855 8.118z'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default MuetIcon;
