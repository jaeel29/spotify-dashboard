import * as React from 'react';

function VolumeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M7.855 8.118H5.123a1.15 1.15 0 00-1.15 1.15v5.464c0 .635.515 1.15 1.15 1.15h2.732l4.577 3.878c.748.634 1.893.102 1.893-.878V5.118c0-.98-1.146-1.512-1.893-.878L7.855 8.118zM18.926 9.81a2.887 2.887 0 011.101 2.265c-.003.872-.399 1.72-1.1 2.265'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default VolumeIcon;
