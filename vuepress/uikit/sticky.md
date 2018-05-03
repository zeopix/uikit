# sticky

# Sticky

Make elements remain at the top of the viewport, like a sticky navigation.

## Usage

To create an element that remains at the top of the viewport when scrolling down the site, add the `uk-sticky` attribute to that element.

~~~html
<div uk-sticky></div>
~~~

<ExampleRunner id="runner-201d9bf5-a627-d8c2-f3d4-12a65d6dbb2d" resource="src.js.core.sticky.js"/>

**Note** Example elements on this page are only sticky until you scroll down to the next heading and disappear afterwards. This was done so as not to clutter your screen with all variations of sticky containers.

* * *

## Offset

You can position the element below the viewport edge. Add the `offset` attribute and the distance in pixels.

~~~html
<div uk-sticky="offset: 100"></div>
~~~

<ExampleRunner id="runner-27983c43-99b6-ff16-b6e2-74318940b02f" resource="src.js.core.sticky.js"/>

* * *

## Top

To apply the sticky behavior with a delay, add the `top` attribute, which can be defined either by a number representing the offset in pixels, but also viewport height or a CSS selector.

~~~html
<!-- Sticks after 100px of scrolling -->
<div uk-sticky="top: 100"></div>

<!-- Sticks after 100vh -->
<div uk-sticky="top: 100vh"></div>

<!-- Sticks to the top of the container -->
<div id="my-id">
    <div uk-sticky="top: #my-id"></div>
</div>
~~~

<ExampleRunner id="runner-877507bf-8baf-5b59-99ad-02b6123b0a7a" resource="src.js.core.sticky.js"/>

* * *

## Animation

Add an animation from the [Animation component](animation.md) in order to have the sticky element reappear smoothly.

~~~html
<div uk-sticky="animation: uk-animation-slide-top"></div>
~~~

<ExampleRunner id="runner-f82d541d-43d1-5d3c-083c-651595a2942a" resource="src.js.core.sticky.js"/>

* * *

## Sticky on scroll up

You can make the sticky element show only when scrolling up to save space. Together with an animation, this makes for a very smooth experience.

~~~html
<div uk-sticky="show-on-up: true"></div>
~~~

<ExampleRunner id="runner-29c91794-6975-7406-3741-143b2cda558d" resource="src.js.core.sticky.js"/>

* * *

## Bottom

Bind the sticky behavior to a specific element, so that it disappears after scrolling past that point of the page.

~~~html
<!-- Sticks until the bottom of its parent container -->
<div>
    <div uk-sticky="bottom: true"></div>
</div>

<!-- Sticks until the second container -->
<div uk-sticky="bottom: #my-id"></div>
<div id="my-id"></div>
~~~

<ExampleRunner id="runner-c4611fea-1518-bbf9-3e83-cf2739b0449b" resource="src.js.core.sticky.js"/>

* * *

## Responsive

You also have the possibility of disabling the sticky behavior for different devices by applying the `media` option to the `uk-sticky` attribute and adding the appropriate viewport width. The element will be sticky from the specified viewport width and upwards, but not below.

~~~html
<div uk-sticky="media: 640"></div>
~~~

* * *

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

<table><thead><tr><th style="text-align:left">Option</th><th style="text-align:left">Value</th><th style="text-align:left">Default</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>top</code></td><td style="text-align:left">Number, viewport height, CSS selector</td><td style="text-align:left"><code>0</code></td><td style="text-align:left">The top offset from where the element should be stick.</td></tr><tr><td style="text-align:left"><code>bottom</code></td><td style="text-align:left">Boolean, CSS selector</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">The bottom offset until the element should stick. (true: parent element, prefixed with '!' a parent selector)</td></tr><tr><td style="text-align:left"><code>offset</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>0</code></td><td style="text-align:left">The offset the Sticky should be fixed to.</td></tr><tr><td style="text-align:left"><code>animation</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">The animation to use when the element becomes sticky.</td></tr><tr><td style="text-align:left"><code>cls-active</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>uk-active</code></td><td style="text-align:left">The active class.</td></tr><tr><td style="text-align:left"><code>cls-inactive</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>''</code></td><td style="text-align:left">The inactive class.</td></tr><tr><td style="text-align:left"><code>width-element</code></td><td style="text-align:left">CSS selector</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">The element the Sticky should get its width from in active mode.</td></tr><tr><td style="text-align:left"><code>show-on-up</code></td><td style="text-align:left">Boolean</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">Only show sticky element when scrolling up.</td></tr><tr><td style="text-align:left"><code>media</code></td><td style="text-align:left">Integer, String</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">Condition for the active status - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)).</td></tr><tr><td style="text-align:left"><code>target</code></td><td style="text-align:left">Boolean</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">Initially make sure that the Sticky is not over a targeted element via location hash.</td></tr></tbody></table>

* * *

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

~~~js
UIkit.sticky(element, options);
~~~

### Events

The following events will be triggered on elements with this component attached:

<table><thead><tr><th style="text-align:left">Name</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>active</code></td><td style="text-align:left">Fires after the element becomes sticky.</td></tr><tr><td style="text-align:left"><code>inactive</code></td><td style="text-align:left">Fires after the element is no longer sticky.</td></tr></tbody></table>

## code:

~~~javascript
import Class from '../mixin/class';
import {$, addClass, after, Animation, assign, attr, css, fastdom, hasClass, height, isNumeric, isString, isVisible, noop, offset, query, remove, removeClass, replaceClass, toFloat, toggleClass, trigger, within} from 'uikit-util';

export default {

    mixins: [Class],

    attrs: true,

    props: {
        top: null,
        bottom: Boolean,
        offset: Number,
        animation: String,
        clsActive: String,
        clsInactive: String,
        clsFixed: String,
        clsBelow: String,
        selTarget: String,
        widthElement: Boolean,
        showOnUp: Boolean,
        media: 'media',
        targetOffset: Number
    },

    data: {
        top: 0,
        bottom: false,
        offset: 0,
        animation: '',
        clsActive: 'uk-active',
        clsInactive: '',
        clsFixed: 'uk-sticky-fixed',
        clsBelow: 'uk-sticky-below',
        selTarget: '',
        widthElement: false,
        showOnUp: false,
        media: false,
        targetOffset: false
    },

    computed: {

        selTarget({selTarget}, $el) {
            return selTarget && $(selTarget, $el) || $el;
        },

        widthElement({widthElement}, $el) {
            return query(widthElement, $el) || this.placeholder;
        }

    },

    connected() {

        this.placeholder = $('<div class="uk-sticky-placeholder"></div>');

        if (!this.isActive) {
            this.hide();
        }
    },

    disconnected() {

        if (this.isActive) {
            this.isActive = false;
            this.hide();
            removeClass(this.selTarget, this.clsInactive);
        }

        remove(this.placeholder);
        this.placeholder = null;
        this.widthElement = null;
    },

    events: [

        {
            name: 'active',

            self: true,

            handler() {
                replaceClass(this.selTarget, this.clsInactive, this.clsActive);
            }

        },

        {
            name: 'inactive',

            self: true,

            handler() {
                replaceClass(this.selTarget, this.clsActive, this.clsInactive);
            }

        },

        {

            name: 'load hashchange popstate',

            el: window,

            handler() {

                if (!(this.targetOffset !== false && location.hash && window.scrollY > 0)) {
                    return;
                }

                const target = $(location.hash);

                if (target) {
                    fastdom.read(() => {

                        const {top} = offset(target);
                        const elTop = offset(this.$el).top;
                        const elHeight = this.$el.offsetHeight;

                        if (this.isActive && elTop + elHeight >= top && elTop <= top + target.offsetHeight) {
                            window.scroll(0, top - elHeight - (isNumeric(this.targetOffset) ? this.targetOffset : 0) - this.offset);
                        }

                    });
                }

            }

        }

    ],

    update: [

        {

            write() {

                const {placeholder} = this;
                const outerHeight = (this.isActive ? placeholder : this.$el).offsetHeight;

                css(placeholder, assign(
                    {height: css(this.$el, 'position') !== 'absolute' ? outerHeight : ''},
                    css(this.$el, ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'])
                ));

                if (!within(placeholder, document)) {
                    after(this.$el, placeholder);
                    attr(placeholder, 'hidden', '');
                }

                this.topOffset = offset(this.isActive ? placeholder : this.$el).top;
                this.bottomOffset = this.topOffset + outerHeight;

                const bottom = parseProp('bottom', this);

                this.top = Math.max(toFloat(parseProp('top', this)), this.topOffset) - this.offset;
                this.bottom = bottom && bottom - outerHeight;
                this.inactive = this.media && !window.matchMedia(this.media).matches;

                if (this.isActive) {
                    this.update();
                }
            },

            events: ['load', 'resize']

        },

        {

            read(_, {scrollY = window.scrollY}) {

                this.width = (isVisible(this.widthElement) ? this.widthElement : this.$el).offsetWidth;

                return {
                    scroll: this.scroll = scrollY,
                    visible: isVisible(this.$el)
                };
            },

            write({visible, scroll}, {dir} = {}) {

                if (scroll < 0 || !visible || this.disabled || this.showOnUp && !dir) {
                    return;
                }

                if (this.inactive
                    || scroll < this.top
                    || this.showOnUp && (scroll <= this.top || dir === 'down' || dir === 'up' && !this.isActive && scroll <= this.bottomOffset)
                ) {

                    if (!this.isActive) {
                        return;
                    }

                    this.isActive = false;

                    if (this.animation && scroll > this.topOffset) {
                        Animation.cancel(this.$el);
                        Animation.out(this.$el, this.animation).then(() => this.hide(), noop);
                    } else {
                        this.hide();
                    }

                } else if (this.isActive) {

                    this.update();

                } else if (this.animation) {

                    Animation.cancel(this.$el);
                    this.show();
                    Animation.in(this.$el, this.animation).catch(noop);

                } else {
                    this.show();
                }

            },

            events: ['scroll']

        },

    ],

    methods: {

        show() {

            this.isActive = true;
            this.update();
            attr(this.placeholder, 'hidden', null);

        },

        hide() {

            if (!this.isActive || hasClass(this.selTarget, this.clsActive)) {
                trigger(this.$el, 'inactive');
            }

            removeClass(this.$el, this.clsFixed, this.clsBelow);
            css(this.$el, {position: '', top: '', width: ''});
            attr(this.placeholder, 'hidden', '');

        },

        update() {

            const active = this.top !== 0 || this.scroll > this.top;
            let top = Math.max(0, this.offset);

            if (this.bottom && this.scroll > this.bottom - this.offset) {
                top = this.bottom - this.scroll;
            }

            css(this.$el, {
                position: 'fixed',
                top: `${top}px`,
                width: this.width
            });

            if (hasClass(this.selTarget, this.clsActive)) {

                if (!active) {
                    trigger(this.$el, 'inactive');
                }

            } else if (active) {
                trigger(this.$el, 'active');
            }

            toggleClass(this.$el, this.clsBelow, this.scroll > this.bottomOffset);
            addClass(this.$el, this.clsFixed);

        }

    }

};

function parseProp(prop, {$props, $el, [`${prop}Offset`]: propOffset}) {

    const value = $props[prop];

    if (!value) {
        return;
    }

    if (isNumeric(value)) {

        return propOffset + toFloat(value);

    } else if (isString(value) && value.match(/^-?\d+vh$/)) {

        return height(window) * toFloat(value) / 100;

    } else {

        const el = value === true ? $el.parentNode : query(value, $el);

        if (el) {
            return offset(el).top + el.offsetHeight;
        }

    }
}

~~~

* * *

_package: [uikit](uikit.md)_ _source: [test](https://github.com/git+https://github.com/uikit/uikit.git/tree/master/undefined/./src/js/core/sticky.js)_