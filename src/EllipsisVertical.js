import React from 'react'

const EllipsisVertical = ({className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id="i-ellipsis-vertical" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <circle cx="16" cy="7" r="2" />
    <circle cx="16" cy="16" r="2" />
    <circle cx="16" cy="25" r="2" />
  </svg>
)

export default EllipsisVertical;
