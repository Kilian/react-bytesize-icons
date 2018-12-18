import React from 'react'

const Import = ({className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id="i-import" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M28 22 L28 30 4 30 4 22 M16 4 L16 24 M8 16 L16 24 24 16" />
  </svg>
)

export default Import;
