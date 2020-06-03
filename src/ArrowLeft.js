import React from 'react'

const ArrowLeft = ({id="i-arrow-left", className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id={id} viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M10 6 L2 16 10 26 M2 16 L30 16" />
  </svg>
)

export default ArrowLeft;
