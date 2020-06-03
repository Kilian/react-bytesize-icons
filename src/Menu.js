import React from 'react'

const Menu = ({id="i-menu", className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id={id} viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24" />
  </svg>
)

export default Menu;
