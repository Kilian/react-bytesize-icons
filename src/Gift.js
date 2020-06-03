import React from 'react'

const Gift = ({id="i-gift", className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id={id} viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M4 14 L4 30 28 30 28 14 M2 9 L2 14 30 14 30 9 Z M16 9 C 16 9 14 0 8 3 2 6 16 9 16 9 16 9 18 0 24 3 30 6 16 9 16 9 M16 9 L16 30" />
  </svg>
)

export default Gift;
