import React from 'react'

export const Search = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
  <svg id="i-search" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <circle cx={14} cy={14} r={12} />
    <path d="M23 23 L30 30"  />
  </svg>
)

export const Close = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
  <svg id="i-close" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M2 30 L30 2 M30 30 L2 2" />
  </svg>
)

export const Play = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
  <svg id="i-play" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M10 2 L10 30 24 16 Z" />
  </svg>
)

export const Pause = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
  <svg id="i-pause" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
      <path d="M23 2 L23 30 M9 2 L9 30" />
  </svg>
)

export const Backwards = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-backwards" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M16 2 L2 16 16 30 16 16 30 30 30 2 16 16 Z" />
</svg>
)

export const Forwards = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-forwards" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M16 2 L30 16 16 30 16 16 2 30 2 2 16 16 Z" /> 
</svg>
)

export const Star = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-star" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
</svg>

)

export const Checkmark = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-checkmark" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M2 20 L12 28 30 4" />
</svg>

)

export const ChevronTop = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-chevron-top" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M30 20 L16 8 2 20" />
</svg>
)

export const ChevronRight = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-chevron-right" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M12 30 L24 16 12 2" />
</svg>
)

export const ChevronBottom = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-chevron-bottom" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M30 12 L16 24 2 12" />
</svg>
)

export const ChevronLeft = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-chevron-left" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M20 30 L8 16 20 2" />
</svg>
)

export const ArrowTop = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-arrow-top" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M6 10 L16 2 26 10 M16 2 L16 30" />
</svg>
)


export const ArrowRight = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-arrow-right" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M22 6 L30 16 22 26 M30 16 L2 16" />
</svg>
)

export const ArrowBottom = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-arrow-bottom" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M6 22 L16 30 26 22 M16 30 L16 2" />
</svg>
)

export const ArrowLeft = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-arrow-left" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M10 6 L2 16 10 26 M2 16 L30 16" />
</svg>
)

export const CaretTop = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-caret-top" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M30 22 L16 6 2 22 Z" />
</svg>

)

export const CaretRight = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-caret-right" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M10 30 L26 16 10 2 Z" />
</svg>
)

export const CaretBottom = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-caret-bottom" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M30 10 L16 26 2 10 Z" />
</svg>
)

export const CaretLeft = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-caret-left" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M22 30 L6 16 22 2 Z" />
</svg>
)

export const Start = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-start" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M8 2 L8 16 22 2 22 30 8 16 8 30" />
</svg>
)

export const End = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-end" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M24 2 L24 16 10 2 10 30 24 16 24 30" />
</svg>)

export const Eject = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-eject" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M30 18 L16 5 2 18 Z M30 18 M2 25 L30 25" />
</svg>
)

export const Mute = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-mute" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M20 16 C20 8 15 2 15 2 L8 10 2 10 2 22 8 22 15 30 C15 30 20 24 20 16 Z" />
</svg>
)

export const Volume = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-volume" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M20 16 C20 8 15 2 15 2 L8 10 2 10 2 22 8 22 15 30 C15 30 20 24 20 16 Z M21 2 C21 2 25 6 25 16 25 26 21 30 21 30 M27 4 C27 4 30 8 30 16 30 24 27 28 27 28" />
</svg>
)

export const Ban = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-ban" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <circle cx="16" cy="16" r="14" />
    <path d="M6 6 L26 26" />
</svg>

)

export const Flag = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-flag" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M6 2 L6 30 M6 6 L26 6 20 12 26 18 6 18" />
</svg>
)

export const Options = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-options" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M28 6 L4 6 M28 16 L4 16 M28 26 L4 26 M24 3 L24 9 M8 13 L8 19 M20 23 L20 29" />
</svg>
)

export const Settings = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-settings" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M13 2 L13 6 11 7 8 4 4 8 7 11 6 13 2 13 2 19 6 19 7 21 4 24 8 28 11 25 13 26 13 30 19 30 19 26 21 25 24 28 28 24 25 21 26 19 30 19 30 13 26 13 25 11 28 8 24 4 21 7 19 6 19 2 Z" />
    <circle cx="16" cy="16" r="4" />
</svg>
)

export const Clock = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-clock" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <circle cx="16" cy="16" r="14" />
    <path d="M16 8 L16 16 20 20" />
</svg>
)

export const Menu = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-menu" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24" />
</svg>
)

export const Message = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-msg" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M2 4 L30 4 30 22 16 22 8 29 8 22 2 22 Z" />
</svg>
)

export const Photo = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-photo" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M20 24 L12 16 2 26 2 2 30 2 30 24 M16 20 L22 14 30 22 30 30 2 30 2 24" />
    <circle cx="10" cy="9" r="3" />
</svg>
)

export const Camera = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-camera" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M2 8 L 9 8 12 4 20 4 23 8 30 8 30 26 2 26 Z" />
    <circle cx="16" cy="16" r="5" />
</svg>
)

export const Video = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-video" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M22 13 L30 8 30 24 22 19 Z M2 8 L2 24 22 24 22 8 Z" />
</svg>
)

export const Music = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-music" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M11 25 L11 6 24 3 24 23 M11 13 L24 10" />
    <ellipse cx="7" cy="25" rx="4" ry="5" />
    <ellipse cx="20" cy="23" rx="4" ry="5" />
</svg>

)

export const Mail = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-mail" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M2 26 L30 26 30 6 2 6 Z M2 6 L16 16 30 6" />
</svg>
)

export const Home = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-home" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M12 20 L12 30 4 30 4 12 16 2 28 12 28 30 20 30 20 20 Z" />
</svg>
)

export const User = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-user" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z" />
</svg>
)

export const Trash = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-trash" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6" />
</svg>
)

export const Paperclip = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-paperclip" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M10 9 L10 24 C10 28 13 30 16 30 19 30 22 28 22 24 L22 6 C22 3 20 2 18 2 16 2 14 3 14 6 L14 23 C14 24 15 25 16 25 17 25 18 24 18 23 L18 9" />
</svg>
)

export const File = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-file" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M6 2 L6 30 26 30 26 10 18 2 Z M18 2 L18 10 26 10" />
</svg>
)

export const Folder = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-folder" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M2 26 L30 26 30 7 14 7 10 4 2 4 Z M30 12 L2 12" />
</svg>
)

export const FolderOpen = ({width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', stroke='currentcolor'}) => (
<svg id="i-folder-open" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={stroke} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} strokeWidth={strokeWidth}>
    <path d="M4 28 L28 28 30 12 14 12 10 8 2 8 Z M28 12 L28 4 4 4 4 8" />
</svg>
)