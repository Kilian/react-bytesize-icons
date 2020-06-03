import React from 'react'

const Camera = ({id="i-camera", className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id={id} viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M2 8 L 9 8 12 4 20 4 23 8 30 8 30 26 2 26 Z" />
    <circle cx="16" cy="16" r="5" />
  </svg>
)

export default Camera;
