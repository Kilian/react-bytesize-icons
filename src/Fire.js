import React from 'react'

const Fire = ({id="i-fire", className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id={id} viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M15 30 C0 30 15 13 12 3 28 13 32 30 15 30 Z M17 30 C10 30 17 20 17 20 17 20 24 30 17 30 Z" />
  </svg>
)

export default Fire;
