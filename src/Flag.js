import React from 'react'

const Flag = ({id="i-flag", className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id={id} viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M6 2 L6 30 M6 6 L26 6 20 12 26 18 6 18" />
  </svg>
)

export default Flag;
