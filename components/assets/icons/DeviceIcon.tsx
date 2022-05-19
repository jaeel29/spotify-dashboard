import * as React from 'react';

function DeviceIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M20.162 21.117h-7.335a.868.868 0 01-.868-.868V8.38c0-.479.39-.868.868-.868h7.335c.48 0 .868.39.868.868v11.87a.868.868 0 01-.868.868zM8.823 15.675l-.453 3.628'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.348 7.511V6.085a2.202 2.202 0 00-2.203-2.202H5.13a2.202 2.202 0 00-2.203 2.202v7.387c0 1.217.986 2.203 2.203 2.203h6.829M7.01 19.303h4.949'
        stroke='#fff'
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.533 17.942a1.814 1.814 0 100-3.628 1.814 1.814 0 000 3.628zM16.532 10.913a.227.227 0 10.004.453.227.227 0 00-.004-.453z'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default DeviceIcon;
