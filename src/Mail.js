import React from 'react'

const Mail = ({className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id="i-mail" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M2 26 L30 26 30 6 2 6 Z M2 6 L16 16 30 6" />
  </svg>
)

export default Mail;
