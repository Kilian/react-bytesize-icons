import React from 'react'

const Tag = ({id="i-tag", className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id={id} viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <circle cx="24" cy="8" r="2" />
    <path d="M2 18 L18 2 30 2 30 14 14 30 Z" />
  </svg>
)

export default Tag;
