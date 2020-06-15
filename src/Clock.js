import React from 'react'

const Clock = ({id="i-clock", className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id={id} viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <circle cx="16" cy="16" r="14" />
    <path d="M16 8 L16 16 20 20" />
  </svg>
)

export default Clock;
