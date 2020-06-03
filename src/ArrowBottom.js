import React from 'react'

const ArrowBottom = ({id="i-arrow-bottom", className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id={id} viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M6 22 L16 30 26 22 M16 30 L16 2" />
  </svg>
)

export default ArrowBottom;
