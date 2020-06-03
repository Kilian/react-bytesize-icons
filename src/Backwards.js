import React from 'react'

const Backwards = ({id="i-backwards", className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id={id} viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M16 2 L2 16 16 30 16 16 30 30 30 2 16 16 Z" />
  </svg>
)

export default Backwards;
