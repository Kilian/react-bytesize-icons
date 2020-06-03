import React from 'react'

const Cart = ({id="i-cart", className, width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor'}) => (
  <svg className={className} id={id} viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={color} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />
    <circle cx="25" cy="27" r="2" />
    <circle cx="12" cy="27" r="2" />
  </svg>
)

export default Cart;
