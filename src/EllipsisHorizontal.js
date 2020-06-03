import React from 'react'

const EllipsisHorizontal = ({id="i-ellipsis-horizontal", className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id={id} viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <circle cx="7" cy="16" r="2" />
    <circle cx="16" cy="16" r="2" />
    <circle cx="25" cy="16" r="2" />
  </svg>
)

export default EllipsisHorizontal;
