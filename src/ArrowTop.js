import React from 'react'

const ArrowTop = ({className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id="i-arrow-top" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M6 10 L16 2 26 10 M16 2 L16 30" />
  </svg>
)

export default ArrowTop;
