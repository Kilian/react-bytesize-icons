import React from 'react'

const Code = ({id="i-code", className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id={id} viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M10 9 L3 17 10 25 M22 9 L29 17 22 25 M18 7 L14 27" />
  </svg>
)

export default Code;
