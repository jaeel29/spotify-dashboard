import * as React from 'react';

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M12.51 5.974l-.51.517-.51-.517a4.939 4.939 0 00-7.038 0 5.124 5.124 0 000 7.147l5.393 5.476a3.025 3.025 0 004.31 0l5.393-5.475a5.124 5.124 0 000-7.148v0a4.938 4.938 0 00-7.039 0v0z'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default HeartIcon;
