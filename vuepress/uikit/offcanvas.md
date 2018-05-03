# offcanvas

# Off-canvas

Create an off-canvas sidebar that slides in and out of the page, which is perfect for creating mobile navigations.

## Usage

To apply this component, add the `uk-offcanvas` attribute to a parent `<div>` element and use the following classes.

<table><thead><tr><th style="text-align:left">Class</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>.uk-offcanvas-bar</code></td><td style="text-align:left">Add this class to a child <code>&lt;div&gt;</code> element.</td></tr><tr><td style="text-align:left"><code>.uk-offcanvas-content</code></td><td style="text-align:left">Wrap your page's content inside a <code>&lt;div&gt;</code> element and add this class.</td></tr><tr><td style="text-align:left"><code>.uk-offcanvas-close</code></td><td style="text-align:left">Add this class and the <code>uk-close</code> attribute to an <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> element to create a close button and enable its functionality.</td></tr></tbody></table>

You can use any element to toggle an off-canvas sidebar. To enable the necessary JavaScript, add the `uk-toggle` attribute. An `<a>` element needs to be linked to the id of the off-canvas container. If you are using another element, like a button, just add the `uk-toggle="target: #ID"` attribute to target the id of the off-canvas container.

~~~html
<body>
    <div class="uk-offcanvas-content">

        <!-- The whole page content goes here -->

        <!-- This is a button toggling the off-canvas -->
        <button uk-toggle="target: #my-id" type="button"></button>

        <!-- This is an anchor toggling the off-canvas -->
        <a href="#my-id" uk-toggle></a>

        <!-- This is the off-canvas -->
        <div id="my-id" uk-offcanvas>
            <div class="uk-offcanvas-bar">

                <button class="uk-offcanvas-close" type="button" uk-close></button>

            </div>
        </div>

    </div>
</body>
~~~

* * *

### Overlay

To add an overlay, blanking out the page, add the `overlay: true` parameter to the `uk-offcanvas` attribute.

~~~html
<div id="my-id" uk-offcanvas="overlay: true">...</div>
~~~

* * *

## Flip modifier

Add the `flip: true` parameter to the `uk-offcanvas` attribute to adjust its alignment, so that it slides in from the right.

~~~html
<div id="my-id" uk-offcanvas="flip: true">...</div>
~~~

* * *

## Animation modes

By default, the off-canvas slides in. But you can actually choose between different animation modes for the off-canvas' entrance. Just add one of the following attributes.

<table><thead><tr><th style="text-align:left">Parameter</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>mode: slide</code></td><td style="text-align:left">The off-canvas slides out and overlays the content. This is the default mode.</td></tr><tr><td style="text-align:left"><code>mode: push</code></td><td style="text-align:left">The off-canvas slides out and pushes the site.</td></tr><tr><td style="text-align:left"><code>mode: reveal</code></td><td style="text-align:left">The off-canvas slides out and reveals its content while pushing the site.</td></tr><tr><td style="text-align:left"><code>mode: none</code></td><td style="text-align:left">The off-canvas appears and overlays the content without an animation.</td></tr></tbody></table>

~~~html
<div id="my-id" uk-offcanvas="mode: push">...</div>
~~~

* * *

## Nav in Off-canvas

You can use the [Nav component](nav.md) inside an off-canvas to create a mobile navigation.

~~~html
<div id="my-id" uk-offcanvas>
    <div class="uk-offcanvas-bar">
        <ul class="uk-nav uk-nav-default">...</ul>
    </div>
</div>
~~~

* * *

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

<table><thead><tr><th style="text-align:left">Option</th><th style="text-align:left">Value</th><th style="text-align:left">Default</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>mode</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>slide</code></td><td style="text-align:left">Off-canvas animation mode: <code>slide</code>, <code>reveal</code>, <code>push</code> or <code>none</code>.</td></tr><tr><td style="text-align:left"><code>flip</code></td><td style="text-align:left">Boolean</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">Flip off-canvas to the right side.</td></tr><tr><td style="text-align:left"><code>overlay</code></td><td style="text-align:left">Boolean</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">Display the off-canvas together with an overlay.</td></tr><tr><td style="text-align:left"><code>esc-close</code></td><td style="text-align:left">Boolean</td><td style="text-align:left"><code>true</code></td><td style="text-align:left">Close the off-canvas when the <em>Esc</em> key is pressed.</td></tr><tr><td style="text-align:left"><code>bg-close</code></td><td style="text-align:left">Boolean</td><td style="text-align:left"><code>true</code></td><td style="text-align:left">Close the off-canvas when the background is clicked.</td></tr><tr><td style="text-align:left"><code>container</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>true</code></td><td style="text-align:left">Define a target container via a selector to specify where the off-canvas should be appended in the DOM. Setting it to <code>false</code> will prevent this behavior.</td></tr></tbody></table>

`mode` is the _Primary_ option and its key may be omitted, if it's the only option in the attribute value.

~~~html
<span uk-offcanvas="push"></span>
~~~

* * *

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

~~~js
UIkit.offcanvas(element, options);
~~~

### Events

The following events will be triggered on elements with this component attached:

<table><thead><tr><th style="text-align:left">Name</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>beforeshow</code></td><td style="text-align:left">Fires before an item is shown.</td></tr><tr><td style="text-align:left"><code>show</code></td><td style="text-align:left">Fires after an item is shown.</td></tr><tr><td style="text-align:left"><code>shown</code></td><td style="text-align:left">Fires after the item's show animation has completed.</td></tr><tr><td style="text-align:left"><code>beforehide</code></td><td style="text-align:left">Fires before an item is hidden.</td></tr><tr><td style="text-align:left"><code>hide</code></td><td style="text-align:left">Fires after an item's hide animation has started.</td></tr><tr><td style="text-align:left"><code>hidden</code></td><td style="text-align:left">Fires after an item is hidden.</td></tr></tbody></table>

### Methods

The following methods are available for the component:

#### Show

~~~js
UIkit.offcanvas(element).show();
~~~

Shows the Offcanvas.

#### Hide

~~~js
UIkit.offcanvas(element).hide();
~~~

Hides the Offcanvas.

## code:

~~~javascript
import Modal from '../mixin/modal';
import {$, addClass, css, hasClass, height, isTouch, once, removeClass, trigger, unwrap, width, wrapAll} from 'uikit-util';

let scroll;

export default {

    mixins: [Modal],

    args: 'mode',

    props: {
        content: String,
        mode: String,
        flip: Boolean,
        overlay: Boolean
    },

    data: {
        content: '.uk-offcanvas-content',
        mode: 'slide',
        flip: false,
        overlay: false,
        clsPage: 'uk-offcanvas-page',
        clsContainer: 'uk-offcanvas-container',
        selPanel: '.uk-offcanvas-bar',
        clsFlip: 'uk-offcanvas-flip',
        clsContent: 'uk-offcanvas-content',
        clsContentAnimation: 'uk-offcanvas-content-animation',
        clsSidebarAnimation: 'uk-offcanvas-bar-animation',
        clsMode: 'uk-offcanvas',
        clsOverlay: 'uk-offcanvas-overlay',
        selClose: '.uk-offcanvas-close'
    },

    computed: {

        content({content}) {
            return $(content) || document.body;
        },

        clsFlip({flip, clsFlip}) {
            return flip ? clsFlip : '';
        },

        clsOverlay({overlay, clsOverlay}) {
            return overlay ? clsOverlay : '';
        },

        clsMode({mode, clsMode}) {
            return `${clsMode}-${mode}`;
        },

        clsSidebarAnimation({mode, clsSidebarAnimation}) {
            return mode === 'none' || mode === 'reveal' ? '' : clsSidebarAnimation;
        },

        clsContentAnimation({mode, clsContentAnimation}) {
            return mode !== 'push' && mode !== 'reveal' ? '' : clsContentAnimation;
        },

        transitionElement({mode}) {
            return mode === 'reveal' ? this.panel.parentNode : this.panel;
        }

    },

    update: {

        write() {

            if (this.getActive() === this) {

                if (this.overlay || this.clsContentAnimation) {
                    width(this.content, width(window) - this.scrollbarWidth);
                }

                if (this.overlay) {
                    height(this.content, height(window));
                    if (scroll) {
                        this.content.scrollTop = scroll.y;
                    }
                }

            }

        },

        events: ['resize']

    },

    events: [

        {

            name: 'click',

            delegate() {
                return 'a[href^="#"]';
            },

            handler({current}) {
                if (current.hash && $(current.hash, this.content)) {
                    scroll = null;
                    this.hide();
                }
            }

        },

        {

            name: 'beforescroll',

            filter() {
                return this.overlay;
            },

            handler(e, scroll, target) {
                if (scroll && target && this.isToggled() && $(target, this.content)) {
                    once(this.$el, 'hidden', () => scroll.scrollTo(target));
                    e.preventDefault();
                }
            }

        },

        {
            name: 'show',

            self: true,

            handler() {

                scroll = scroll || {x: window.scrollX, y: window.scrollY};

                if (this.mode === 'reveal' && !hasClass(this.panel, this.clsMode)) {
                    wrapAll(this.panel, '<div>');
                    addClass(this.panel.parentNode, this.clsMode);
                }

                css(document.documentElement, 'overflowY', (!this.clsContentAnimation || this.flip) && this.scrollbarWidth && this.overlay ? 'scroll' : '');
                addClass(document.body, this.clsContainer, this.clsFlip, this.clsOverlay);
                height(document.body); // force reflow
                addClass(this.content, this.clsContentAnimation);
                addClass(this.panel, this.clsSidebarAnimation, this.mode !== 'reveal' ? this.clsMode : '');
                addClass(this.$el, this.clsOverlay);
                css(this.$el, 'display', 'block');
                height(this.$el); // force reflow

            }
        },

        {
            name: 'hide',

            self: true,

            handler() {
                removeClass(this.content, this.clsContentAnimation);

                const active = this.getActive();
                if (this.mode === 'none' || active && active !== this && active !== this.prev) {
                    trigger(this.panel, 'transitionend');
                }
            }
        },

        {
            name: 'hidden',

            self: true,

            handler() {

                if (this.mode === 'reveal') {
                    unwrap(this.panel);
                }

                if (!this.overlay) {
                    scroll = {x: window.scrollX, y: window.scrollY};
                } else if (!scroll) {
                    const {scrollLeft: x, scrollTop: y} = this.content;
                    scroll = {x, y};
                }

                removeClass(this.panel, this.clsSidebarAnimation, this.clsMode);
                removeClass(this.$el, this.clsOverlay);
                css(this.$el, 'display', '');
                removeClass(document.body, this.clsContainer, this.clsFlip, this.clsOverlay);
                document.body.scrollTop = scroll.y;

                css(document.documentElement, 'overflowY', '');

                width(this.content, '');
                height(this.content, '');

                window.scroll(scroll.x, scroll.y);

                scroll = null;

            }
        },

        {
            name: 'swipeLeft swipeRight',

            handler(e) {

                if (this.isToggled() && isTouch(e) && (e.type === 'swipeLeft' && !this.flip || e.type === 'swipeRight' && this.flip)) {
                    this.hide();
                }

            }
        }

    ]

};

~~~

* * *

_package: [uikit](uikit.md)_ _source: [test](https://github.com/git+https://github.com/uikit/uikit.git/tree/master/undefined/./src/js/core/offcanvas.js)_