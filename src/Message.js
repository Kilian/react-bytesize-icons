import React from 'react'

const Message = ({id="i-msg", className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id={id} viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M2 4 L30 4 30 22 16 22 8 29 8 22 2 22 Z" />
  </svg>
)

export default Message;
