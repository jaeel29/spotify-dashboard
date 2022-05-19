import * as React from 'react';

function QueueIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M10.245 19.082H4.979M10.245 14.694H4.979M19.02 10.306H4.98M19.02 5.918H4.98M14.669 15.264v3.248a.57.57 0 00.858.49l2.752-1.624a.57.57 0 000-.98l-2.752-1.624a.57.57 0 00-.858.49v0z'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default QueueIcon;
