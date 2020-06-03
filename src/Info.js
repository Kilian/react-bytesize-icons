import React from 'react'

const Info = ({id="i-info", className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id={id} viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M16 14 L16 23 M16 8 L16 10" />
    <circle cx="16" cy="16" r="14" />
  </svg>
)

export default Info;
