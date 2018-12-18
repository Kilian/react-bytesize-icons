import React from 'react'

const Alert = ({className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id="i-alert" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M16 3 L30 29 2 29 Z M16 11 L16 19 M16 23 L16 25" />
  </svg>
)

export default Alert;
