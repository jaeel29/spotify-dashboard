import * as React from 'react';

function Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M8.745 4.915l9.35 5.53c1.182.698 1.182 2.41 0 3.11l-9.35 5.529c-1.204.713-2.726-.157-2.726-1.556V6.47c0-1.4 1.522-2.269 2.726-1.556z'
        fill='#000'
      />
    </svg>
  );
}

export default Icon;
