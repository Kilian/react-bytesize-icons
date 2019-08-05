import React from 'react'

const ZoomIn = ({className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id="i-work" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <circle cx="14" cy="14" r="12" />
    <path d="M23 23 L30 30" />
    <path d="M14 10 L14 18 M10 14 L18 14" />
  </svg>
)

export default ZoomIn;
