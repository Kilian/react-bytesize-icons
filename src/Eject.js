import React from 'react'

const Eject = ({id="i-eject", className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id={id} viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M30 18 L16 5 2 18 Z M30 18 M2 25 L30 25" />
  </svg>
)

export default Eject;
