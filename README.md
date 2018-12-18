## Bytesize icons as React components.  
All the icons were designed by [Dan Klammer](https://github.com/danklammer).  
Find the original [SVG icons here](https://github.com/danklammer/bytesize-icons).  


### How to install?

`npm install --save react-bytesize-icons`

### How to use?
Here's an example for using the `<Twitter/>` component.  

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import { Twitter } from 'react-bytesize-icons';

ReactDOM.render(
  <Twitter width={50} height={50} color="#1da1f2" />,
  document.getElementById('root')
);
```

You can also import this as following.
```
import Twitter from 'react-bytesize-icons/Twitter';
```
You should follow the import method which suits your needs. For details check [#9](https://github.com/abdelhai/react-bytesize-icons/pull/9).

### Components reference
Check out [this guide](https://github.com/danklammer/bytesize-icons#recommended-styles) on how to use the different styles/props listed in the table.  

Component Name  | Component Markup  | Preview | Optional Props
--- | --- | --- | ---
Activity  | `<Activity/>` | ![Activity](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/activity.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Alert | `<Alert/>`  | ![Alert](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/alert.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Archive | `<Archive/>`  | ![Archive](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/archive.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Arrow Bottom  | `<ArrowBottom/>`  | ![Arrow Bottom](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/arrow-bottom.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Arrow Left  | `<ArrowLeft/>`  | ![Arrow Left](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/arrow-left.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Arrow Right | `<ArrowRight/>` | ![Arrow Right](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/arrow-right.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Arrow Top | `<ArrowTop/>` | ![Arrow Top](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/arrow-top.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Backwards | `<Backwards/>`  | ![Backwards](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/backwards.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Bag | `<Bag/>`  | ![Bag](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/bag.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Ban | `<Ban/>`  | ![Ban](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/ban.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Bell  | `<Bell/>` | ![Bell](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/bell.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Bookmark  | `<Bookmark/>` | ![Bookmark](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/bookmark.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Camera  | `<Camera/>` | ![Camera](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/camera.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Caret Bottom  | `<CaretBottom/>`  | ![Caret Bottom](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/caret-bottom.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Caret Left  | `<CaretLeft/>`  | ![Caret Left](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/caret-left.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Caret Right | `<CaretRight/>` | ![Caret Right](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/caret-right.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Caret Top | `<CaretTop/>` | ![Caret Top](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/caret-top.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Cart  | `<Cart/>` | ![Cart](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/cart.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Checkmark | `<Checkmark/>`  | ![Checkmark](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/checkmark.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Chevron Bottom  | `<ChevronBottom/>`  | ![Chevron Bottom](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/chevron-bottom.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Chevron Left  | `<ChevronLeft/>`  | ![Chevron Left](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/chevron-left.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Chevron Right | `<ChevronRight/>` | ![Chevron Right](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/chevron-right.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Chevron Top | `<ChevronTop/>` | ![Chevron Top](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/chevron-top.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Clipboard | `<Clipboard/>`  | ![Clipboard](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/clipboard.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Clock | `<Clock/>`  | ![Clock](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/clock.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Close | `<Close/>`  | ![Close](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/close.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Code  | `<Code/>` | ![Code](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/code.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Compose | `<Compose/>`  | ![Compose](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/compose.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Creditcard  | `<Creditcard/>` | ![Creditcard](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/creditcard.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Desktop | `<Desktop/>`  | ![Desktop](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/desktop.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Download  | `<Download/>` | ![Download](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/download.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Send  | `<Send/>` | ![Send](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/send.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Edit  | `<Edit/>` | ![Edit](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/edit.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Eject | `<Eject/>`  | ![Eject](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/eject.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Ellipsis Horizontal | `<EllipsisHorizontal/>` | ![Ellipsis Horizontal](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/ellipsis-horizontal.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Ellipsis Vertical | `<EllipsisVertical/>` | ![Ellipsis Vertical](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/ellipsis-vertical.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
End | `<End/>`  | ![End](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/end.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Export  | `<Export/>` | ![Export](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/export.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
External  | `<External/>` | ![External](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/external.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Book | `<Book/>`  | ![Book](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/book.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Calendar | `<Calendar/>`  | ![Calendar](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/calendar.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Print | `<Print/>`  | ![Print](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/print.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Eye | `<Eye/>`  | ![Eye](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/eye.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
File  | `<File/>` | ![File](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/file.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Fire  | `<Fire/>` | ![Fire](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/fire.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Flag  | `<Flag/>` | ![Flag](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/flag.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Folder Open | `<FolderOpen/>` | ![Folder Open](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/folder-open.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Folder  | `<Folder/>` | ![Folder](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/folder.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Forwards  | `<Forwards/>` | ![Forwards](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/forwards.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Gift  | `<Gift/>` | ![Gift](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/gift.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Github  | `<Github/>` | ![Github](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/github.svg)   | `width=32, height=32, color='currentcolor', className='example-class'`
Heart | `<Heart/>`  | ![Heart](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/heart.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Home  | `<Home/>` | ![Home](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/home.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Import  | `<Import/>` | ![Import](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/import.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Inbox | `<Inbox/>`  | ![Inbox](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/inbox.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Info  | `<Info/>` | ![Info](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/info.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Lightning | `<Lightning/>`  | ![Lightning](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/lightning.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Link  | `<Link/>` | ![Link](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/link.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Location  | `<Location/>` | ![Location](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/location.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Lock  | `<Lock/>` | ![Lock](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/lock.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Mail  | `<Mail/>` | ![Mail](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/mail.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Menu  | `<Menu/>` | ![Menu](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/menu.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Message | `<Message/>`  | ![Message](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/message.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Microphone | `<Microphone/>`  | ![Microphone](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/microphone.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Mobile | `<Mobile/>`  | ![Microphone](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/mobile.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Move | `<Move/>`  | ![Move](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/move.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Music | `<Music/>`  | ![Music](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/music.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Mute  | `<Mute/>` | ![Mute](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/mute.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Options | `<Options/>`  | ![Options](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/options.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Paperclip | `<Paperclip/>`  | ![Paperclip](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/paperclip.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Pause | `<Pause/>`  | ![Pause](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/pause.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Photo | `<Photo/>`  | ![Photo](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/photo.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Plus  | `<Plus/>` | ![Plus](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/plus.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Minus  | `<Minus/>` | ![Minus](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/minus.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Play  | `<Play/>` | ![Play](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/play.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Portfolio | `<Portfolio/>`  | ![Portfolio](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/portfolio.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Reload  | `<Reload/>` | ![Reload](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/reload.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Reply | `<Reply/>`  | ![Reply](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/reply.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Search  | `<Search/>` | ![Search](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/search.svg)  | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Settings  | `<Settings/>` | ![Settings](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/settings.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
SignIn  | `<SignIn/>` | ![SignIn](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/sign-in.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
SignOut  | `<SignOut/>` | ![SignIn](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/sign-out.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Star  | `<Star/>` | ![Star](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/star.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Start | `<Start/>`  | ![Start](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/start.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Tag | `<Tag/>`  | ![Tag](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/tag.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Telephone | `<Telephone/>`  | ![Telephone](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/telephone.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Trash | `<Trash/>`  | ![Trash](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/trash.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Twitter | `<Twitter/>`  | ![Twitter](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/twitter.svg)   | `width=32, height=32, color='currentcolor', className='example-class'`
Unlock  | `<Unlock/>` | ![Unlock](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/unlock.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Upload  | `<Upload/>` | ![Upload](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/upload.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
User  | `<User/>` | ![User](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/user.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Video | `<Video/>`  | ![Video](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/video.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Volume  | `<Volume/>` | ![Volume](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/volume.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`
Work  | `<Work/>` | ![Work](https://cdn.rawgit.com/abdelhai/react-bytesize-icons/master/icons/work.svg)   | `width=32, height=32, strokeWidth='6.25%', strokeLinejoin='round', strokeLinecap='round', color='currentcolor', className='example-class'`

### If you have any questions, then join our [DevChat Slack group!](https://devchat.devolio.net/)  
