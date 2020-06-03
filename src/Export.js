import React from 'react'

const Export = ({id="i-export", className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id={id} viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M28 22 L28 30 4 30 4 22 M16 4 L16 24 M8 12 L16 4 24 12" />
  </svg>
)

export default Export;
