# drop

# Drop

Position any element in relation to another element.

## Usage

Any content, like a button, can toggle the drop component. Just add the `uk-drop` attribute to a block element following the toggle.

~~~html
<button type="button"></button>
<div uk-drop></div>
~~~

A dropdown can be enabled by hovering and clicking the toggle. Just add the `mode: click` option to the attribute to force `click` mode only. If you want to group the toggle and the dropdown, you can just add the `.uk-inline` class from the [Utility component](utility.md#inline) to a container element around both.

~~~html
<div class="uk-inline">
    <button type="button"></button>
    <div uk-drop="mode: click"></div>
</div>
~~~

**Note** The Drop component has no default styling. In this example, we've used a card from the [Card component](card.md) for visualization.

* * *

## Grid in drop

You can place a grid from the [Grid component](grid.md) inside a drop. Just wrap the content with a `<div>` element and add the `uk-grid` attribute. If the grid should stack automatically, whenever the drop no longer fits its container, just add the `.uk-drop-grid` class.

~~~html
<div class="uk-width-large" uk-drop>
    <div class="uk-drop-grid uk-child-width-1-2@m" uk-grid>...</div>
</div>
~~~

Use one of the classes from the [Width component](width.md) to adjust the drop's width.

* * *

## Position

Add one of the following options to the `uk-drop` attribute to adjust the drop's alignment.

~~~html
<div uk-drop="pos: top-left"></div>
~~~

<table><thead><tr><th style="text-align:left">Position</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>bottom-left</code></td><td style="text-align:left">Aligns the drop to the bottom left.</td></tr><tr><td style="text-align:left"><code>bottom-center</code></td><td style="text-align:left">Aligns the drop to the bottom center.</td></tr><tr><td style="text-align:left"><code>bottom-right</code></td><td style="text-align:left">Aligns the drop to the bottom right.</td></tr><tr><td style="text-align:left"><code>bottom-justify</code></td><td style="text-align:left">Aligns the drop to the bottom and justifies its width to the related element.</td></tr><tr><td style="text-align:left"><code>top-left</code></td><td style="text-align:left">Aligns the drop to the top left.</td></tr><tr><td style="text-align:left"><code>top-center</code></td><td style="text-align:left">Aligns the drop to the top center.</td></tr><tr><td style="text-align:left"><code>top-right</code></td><td style="text-align:left">Aligns the drop to the top right.</td></tr><tr><td style="text-align:left"><code>top-justify</code></td><td style="text-align:left">Aligns the drop to the top and justifies its width to the related element.</td></tr><tr><td style="text-align:left"><code>left-top</code></td><td style="text-align:left">Aligns the drop to the left top.</td></tr><tr><td style="text-align:left"><code>left-center</code></td><td style="text-align:left">Aligns the drop to the left center.</td></tr><tr><td style="text-align:left"><code>left-bottom</code></td><td style="text-align:left">Aligns the drop to the left bottom.</td></tr><tr><td style="text-align:left"><code>right-top</code></td><td style="text-align:left">Aligns the drop to the right top.</td></tr><tr><td style="text-align:left"><code>right-center</code></td><td style="text-align:left">Aligns the drop to the right center.</td></tr><tr><td style="text-align:left"><code>right-bottom</code></td><td style="text-align:left">Aligns the drop to the right bottom.</td></tr></tbody></table>

* * *

## Boundary

By default, the drop flips automatically when it exceeds the viewport's edge. If you want to flip it according to a container's boundary, just add the `boundary: .my-class` option to the `uk-drop` attribute, using a selector for the container. That way you can determine any parent element as the drop's boundary.

~~~html
<div class="my-class">
    <button type="button"></button>
    <div uk-drop="boundary: .my-class"></div>
</div>
~~~

* * *

### Boundary alignment

You can also align the drop to its boundary. To do so, add the `boundary-align: true` option to the attribute.

~~~html
<div class="my-class">
    <button type="button"></button>
    <div uk-drop="boundary: .my-class; boundary-align: true"></div>
</div>
~~~

* * *

## Offset

To define a custom offset between the drop container and the toggle, add the `offset` option with a value for the offset, measured in pixels.

~~~html
<div uk-drop="offset: 80"></div>
~~~

* * *

## Animation

Apply one or more animations to the dropdown by adding the `animation: uk-animation-*` option with one of the classes from the [Animation component](animation.md). You can also determine the animation's duration. Just add the `duration` option with your value.

~~~html
<div uk-drop="animation: uk-animation-slide-top-small; duration: 1000"></div>
~~~

* * *

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

<table><thead><tr><th style="text-align:left">Option</th><th style="text-align:left">Value</th><th style="text-align:left">Default</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>toggle</code></td><td style="text-align:left">String, Boolean</td><td style="text-align:left"><code>true</code></td><td style="text-align:left">CSS selector for the element to be used as the toggler. By default, the preceding element is used.</td></tr><tr><td style="text-align:left"><code>pos</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>bottom-left</code></td><td style="text-align:left">The position of the drop.</td></tr><tr><td style="text-align:left"><code>mode</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>click, hover</code></td><td style="text-align:left">Comma separated list of drop trigger behaviour modes: <code>hover</code>, <code>click</code></td></tr><tr><td style="text-align:left"><code>delay-show</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>0</code></td><td style="text-align:left">Delay time in milliseconds before a drop is displayed in hover mode.</td></tr><tr><td style="text-align:left"><code>delay-hide</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>800</code></td><td style="text-align:left">Delay time in milliseconds before a drop is hidden in hover mode.</td></tr><tr><td style="text-align:left"><code>boundary</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>window</code></td><td style="text-align:left">CSS selector of the element to maintain the drop's visibility.</td></tr><tr><td style="text-align:left"><code>boundary-align</code></td><td style="text-align:left">Boolean</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">Align the drop to its boundary.</td></tr><tr><td style="text-align:left"><code>flip</code></td><td style="text-align:left">Boolean, String</td><td style="text-align:left"><code>true</code></td><td style="text-align:left">Automatically flip the drop. Possible values are <code>false</code>, <code>true</code>, <code>x</code> or <code>y</code>.</td></tr><tr><td style="text-align:left"><code>offset</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>0</code></td><td style="text-align:left">The offset of the drop's container.</td></tr><tr><td style="text-align:left"><code>animation</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">Space separated names of animations to apply.</td></tr><tr><td style="text-align:left"><code>duration</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>200</code></td><td style="text-align:left">Animation duration in milliseconds.</td></tr></tbody></table>

`pos` is the _Primary_ option and its key may be omitted, if it's the only option in the attribute value.

~~~html
<span uk-drop="top-left"></span>
~~~

* * *

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

~~~js
UIkit.drop(element, options);
~~~

### Events

The following events will be triggered on elements with this component attached:

<table><thead><tr><th style="text-align:left">Name</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>toggle</code></td><td style="text-align:left">Fires before an item is toggled.</td></tr><tr><td style="text-align:left"><code>beforeshow</code></td><td style="text-align:left">Fires before an item is shown. Can prevent showing by returning <code>false</code>.</td></tr><tr><td style="text-align:left"><code>show</code></td><td style="text-align:left">Fires after an item is shown.</td></tr><tr><td style="text-align:left"><code>shown</code></td><td style="text-align:left">Fires after the item's show animation has completed.</td></tr><tr><td style="text-align:left"><code>beforehide</code></td><td style="text-align:left">Fires before an item is hidden. Can prevent hiding by returning <code>false</code>.</td></tr><tr><td style="text-align:left"><code>hide</code></td><td style="text-align:left">Fires after an item is hidden.</td></tr><tr><td style="text-align:left"><code>hidden</code></td><td style="text-align:left">Fires after an item is hidden.</td></tr><tr><td style="text-align:left"><code>stack</code></td><td style="text-align:left">Fires when the <code>drop-stack</code>class is applied.</td></tr></tbody></table>

### Methods

The following methods are available for the component:

#### Show

~~~js
UIkit.drop(element).show();
~~~

Shows the Drop.

#### Hide

~~~js
UIkit.drop(element).hide();
~~~

Hides the Drop.

## code:

~~~javascript
import Position from '../mixin/position';
import Togglable from '../mixin/togglable';
import {$$, addClass, Animation, attr, css, includes, isString, isTouch, MouseTracker, offset, on, once, pointerEnter, pointerLeave, pointInRect, query, removeClass, removeClasses, toggleClass, within} from 'uikit-util';

let active;

export default {

    mixins: [Position, Togglable],

    args: 'pos',

    props: {
        mode: 'list',
        toggle: Boolean,
        boundary: Boolean,
        boundaryAlign: Boolean,
        delayShow: Number,
        delayHide: Number,
        clsDrop: String
    },

    data: {
        mode: ['click', 'hover'],
        toggle: true,
        boundary: window,
        boundaryAlign: false,
        delayShow: 0,
        delayHide: 800,
        clsDrop: false,
        hoverIdle: 200,
        animation: ['uk-animation-fade'],
        cls: 'uk-open'
    },

    computed: {

        boundary({boundary}, $el) {
            return query(boundary, $el);
        },

        clsDrop({clsDrop}) {
            return clsDrop || `uk-${this.$options.name}`;
        },

        clsPos() {
            return this.clsDrop;
        }

    },

    init() {
        this.tracker = new MouseTracker();
    },

    connected() {

        addClass(this.$el, this.clsDrop);

        const {toggle} = this.$props;
        this.toggle = toggle && this.$create('toggle', isString(toggle) ? query(toggle, this.$el) : this.$el.previousElementSibling, {
            target: this.$el,
            mode: this.mode
        });

        this.updateAria(this.$el);

    },

    events: [


        {

            name: 'click',

            delegate() {
                return `.${this.clsDrop}-close`;
            },

            handler(e) {
                e.preventDefault();
                this.hide(false);
            }

        },

        {

            name: 'click',

            delegate() {
                return 'a[href^="#"]';
            },

            handler(e) {

                if (e.defaultPrevented) {
                    return;
                }

                const id = e.target.hash;

                if (!id) {
                    e.preventDefault();
                }

                if (!id || !within(id, this.$el)) {
                    this.hide(false);
                }
            }

        },

        {

            name: 'beforescroll',

            handler() {
                this.hide(false);
            }

        },

        {

            name: 'toggle',

            self: true,

            handler(e, toggle) {

                e.preventDefault();

                if (this.isToggled()) {
                    this.hide(false);
                } else {
                    this.show(toggle, false);
                }
            }

        },

        {

            name: pointerEnter,

            filter() {
                return includes(this.mode, 'hover');
            },

            handler(e) {

                if (isTouch(e)) {
                    return;
                }

                if (active
                    && active !== this
                    && active.toggle
                    && includes(active.toggle.mode, 'hover')
                    && !within(e.target, active.toggle.$el)
                    && !pointInRect({x: e.pageX, y: e.pageY}, offset(active.$el))
                ) {
                    active.hide(false);
                }

                e.preventDefault();
                this.show(this.toggle);
            }

        },

        {

            name: 'toggleshow',

            handler(e, toggle) {

                if (toggle && !includes(toggle.target, this.$el)) {
                    return;
                }

                e.preventDefault();
                this.show(toggle || this.toggle);
            }

        },

        {

            name: `togglehide ${pointerLeave}`,

            handler(e, toggle) {

                if (isTouch(e) || toggle && !includes(toggle.target, this.$el)) {
                    return;
                }

                e.preventDefault();

                if (this.toggle && includes(this.toggle.mode, 'hover')) {
                    this.hide();
                }
            }

        },

        {

            name: 'beforeshow',

            self: true,

            handler() {
                this.clearTimers();
                Animation.cancel(this.$el);
                this.position();
            }

        },

        {

            name: 'show',

            self: true,

            handler() {
                this.tracker.init();
                if (this.toggle) {
                    addClass(this.toggle.$el, this.cls);
                    attr(this.toggle.$el, 'aria-expanded', 'true');
                }
                registerEvent();
            }

        },

        {

            name: 'beforehide',

            self: true,

            handler() {
                this.clearTimers();
            }

        },

        {

            name: 'hide',

            handler({target}) {

                if (this.$el !== target) {
                    active = active === null && within(target, this.$el) && this.isToggled() ? this : active;
                    return;
                }

                active = this.isActive() ? null : active;

                if (this.toggle) {
                    removeClass(this.toggle.$el, this.cls);
                    attr(this.toggle.$el, 'aria-expanded', 'false');
                    this.toggle.$el.blur();
                    $$('a, button', this.toggle.$el).forEach(el => el.blur());
                }

                this.tracker.cancel();
            }

        }

    ],

    update: {

        write() {

            if (this.isToggled() && !Animation.inProgress(this.$el)) {
                this.position();
            }

        },

        events: ['resize']

    },

    methods: {

        show(toggle, delay = true) {

            const show = () => !this.isToggled() && this.toggleElement(this.$el, true);
            const tryShow = () => {

                this.toggle = toggle || this.toggle;

                this.clearTimers();

                if (this.isActive()) {
                    return;
                } else if (delay && active && active !== this && active.isDelaying) {
                    this.showTimer = setTimeout(this.show, 10);
                    return;
                } else if (this.isParentOf(active)) {

                    if (active.hideTimer) {
                        active.hide(false);
                    } else {
                        return;
                    }

                } else if (active && !this.isChildOf(active) && !this.isParentOf(active)) {

                    let prev;
                    while (active && active !== prev && !this.isChildOf(active)) {
                        prev = active;
                        active.hide(false);
                    }

                }

                if (delay && this.delayShow) {
                    this.showTimer = setTimeout(show, this.delayShow);
                } else {
                    show();
                }

                active = this;
            };

            if (toggle && this.toggle && toggle.$el !== this.toggle.$el) {

                once(this.$el, 'hide', tryShow);
                this.hide(false);

            } else {
                tryShow();
            }
        },

        hide(delay = true) {

            const hide = () => this.toggleNow(this.$el, false);

            this.clearTimers();

            this.isDelaying = this.tracker.movesTo(this.$el);

            if (delay && this.isDelaying) {
                this.hideTimer = setTimeout(this.hide, this.hoverIdle);
            } else if (delay && this.delayHide) {
                this.hideTimer = setTimeout(hide, this.delayHide);
            } else {
                hide();
            }
        },

        clearTimers() {
            clearTimeout(this.showTimer);
            clearTimeout(this.hideTimer);
            this.showTimer = null;
            this.hideTimer = null;
            this.isDelaying = false;
        },

        isActive() {
            return active === this;
        },

        isChildOf(drop) {
            return drop && drop !== this && within(this.$el, drop.$el);
        },

        isParentOf(drop) {
            return drop && drop !== this && within(drop.$el, this.$el);
        },

        position() {

            removeClasses(this.$el, `${this.clsDrop}-(stack|boundary)`);
            css(this.$el, {top: '', left: '', display: 'block'});
            toggleClass(this.$el, `${this.clsDrop}-boundary`, this.boundaryAlign);

            const boundary = offset(this.boundary);
            const alignTo = this.boundaryAlign ? boundary : offset(this.toggle.$el);

            if (this.align === 'justify') {
                const prop = this.getAxis() === 'y' ? 'width' : 'height';
                css(this.$el, prop, alignTo[prop]);
            } else if (this.$el.offsetWidth > Math.max(boundary.right - alignTo.left, alignTo.right - boundary.left)) {
                addClass(this.$el, `${this.clsDrop}-stack`);
            }

            this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary);

            css(this.$el, 'display', '');

        }

    }

};

let registered;

function registerEvent() {

    if (registered) {
        return;
    }

    registered = true;
    on(document, 'click', ({target, defaultPrevented}) => {
        let prev;

        if (defaultPrevented) {
            return;
        }

        while (active && active !== prev && !within(target, active.$el) && !(active.toggle && within(target, active.toggle.$el))) {
            prev = active;
            active.hide(false);
        }
    });
}

~~~

* * *

_package: [uikit](uikit.md)_ _source: [test](https://github.com/git+https://github.com/uikit/uikit.git/tree/master/undefined/./src/js/core/drop.js)_