import React from 'react'

const Lightning = ({id="i-lightning", className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id={id} viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M18 13 L26 2 8 13 14 19 6 30 24 19 Z" />
  </svg>
)

export default Lightning;
