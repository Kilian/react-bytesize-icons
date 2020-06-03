import React from 'react'

const Twitter = ({id="i-twitter", className, width=32, height=32, color='currentcolor'}) => (
  <svg className={className} id={id} viewBox="0 0 64 64" width={width} height={height}>
    <path strokeWidth="0" fill={color} d="M60 16 L54 17 L58 12 L51 14 C42 4 28 15 32 24 C16 24 8 12 8 12 C8 12 2 21 12 28 L6 26 C6 32 10 36 17 38 L10 38 C14 46 21 46 21 46 C21 46 15 51 4 51 C37 67 57 37 54 21 Z" />
  </svg>
)

export default Twitter;
