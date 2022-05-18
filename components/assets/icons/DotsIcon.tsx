import * as React from 'react';

function DotsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M7.75 12a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM13.25 12a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM18.75 12a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z'
        fill='#fff'
      />
    </svg>
  );
}

export default DotsIcon;
