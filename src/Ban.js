import React from 'react'

const Ban = ({className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id="i-ban" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <circle cx="16" cy="16" r="14" />
    <path d="M6 6 L26 26" />
  </svg>
)

export default Ban;
