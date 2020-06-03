import React from 'react'

const Music = ({id="i-music", className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id={id} viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M11 25 L11 6 24 3 24 23 M11 13 L24 10" />
    <ellipse cx="7" cy="25" rx="4" ry="5" />
    <ellipse cx="20" cy="23" rx="4" ry="5" />
  </svg>
)

export default Music;
