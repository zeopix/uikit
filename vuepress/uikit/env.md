# env

## code:

~~~javascript
/* global DocumentTouch */
import {attr} from './attr';

export const isRtl = attr(document.documentElement, 'dir') === 'rtl';

const hasTouchEvents = 'ontouchstart' in window;
const hasPointerEvents = window.PointerEvent;
export const hasTouch = hasTouchEvents
    || window.DocumentTouch && document instanceof DocumentTouch
    || navigator.maxTouchPoints; // IE >=11

export const pointerDown = !hasTouch ? 'mousedown' : `mousedown ${hasTouchEvents ? 'touchstart' : 'pointerdown'}`;
export const pointerMove = !hasTouch ? 'mousemove' : `mousemove ${hasTouchEvents ? 'touchmove' : 'pointermove'}`;
export const pointerUp = !hasTouch ? 'mouseup' : `mouseup ${hasTouchEvents ? 'touchend' : 'pointerup'}`;
export const pointerEnter = hasTouch && hasPointerEvents ? 'pointerenter' : 'mouseenter';
export const pointerLeave = hasTouch && hasPointerEvents ? 'pointerleave' : 'mouseleave';

~~~

* * *

_package: [uikit](uikit.md)_ _source: [test](https://github.com/git+https://github.com/uikit/uikit.git/tree/master/undefined/./src/js/util/env.js)_