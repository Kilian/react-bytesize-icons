import React from 'react'

const Bookmark = ({id="i-bookmark", className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id={id} viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M6 2 L26 2 26 30 16 20 6 30 Z" />
  </svg>
)

export default Bookmark;
