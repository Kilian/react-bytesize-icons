import React from 'react'

const Feed = ({className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id="i-settings" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <circle cx="6" cy="26" r="2" fill="currentColor" />
    <path d="M4 15 C11 15 17 21 17 28 M4 6 C17 6 26 15 26 28" />
  </svg>
)

export default Feed;
