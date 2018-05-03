# navbar

# Navbar

Create a navigation bar that can be used for your main site navigation.

## Usage

The Navbar component consists of a navbar container, the navbar itself and one or more navigations.

<table><thead><tr><th style="text-align:left">Element</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>uk-navbar</code></td><td style="text-align:left">Add this attribute to a <code>&lt;nav&gt;</code> element to define the Navbar component.</td></tr><tr><td style="text-align:left"><code>.uk-navbar-container</code></td><td style="text-align:left">Add this class to the same <code>&lt;nav&gt;</code> element or a parent element to add the navbar background style.</td></tr><tr><td style="text-align:left"><code>.uk-navbar-left</code><br><code>.uk-navbar-center</code><br><code>.uk-navbar-right</code></td><td style="text-align:left">Add one of these classes to a <code>&lt;div&gt;</code> element to align the navigation.</td></tr><tr><td style="text-align:left"><code>.uk-navbar-nav</code></td><td style="text-align:left">Add this class to a <code>&lt;ul&gt;</code> element to create the navigation. Use <code>&lt;a&gt;</code> elements as menu items within the list.</td></tr><tr><td style="text-align:left"><code>.uk-parent</code></td><td style="text-align:left">Add this class to indicate a parent menu item.</td></tr><tr><td style="text-align:left"><code>.uk-active</code></td><td style="text-align:left">Add this class to indicate an active menu item.</td></tr></tbody></table>

~~~html
<nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
            <li class="uk-active"><a href=""></a></li>
            <li class="uk-parent"><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </div>
</nav>
~~~

* * *

## Multiple navigations

You can place more than one navigation inside a navbar container. That way you can have a left aligned, a centered and a right aligned navigation inside the same navbar.

~~~html
<nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">...</div>
    <div class="uk-navbar-center">...</div>
    <div class="uk-navbar-right">...</div>
</nav>
~~~

* * *

## Click mode

A parent item inside the navbar can be enabled by either hovering or clicking the toggle. Just add the `mode: click` option to the `uk-navbar` attribute.

~~~html
<nav class="uk-navbar-container" uk-navbar="mode: click">...</nav>
~~~

* * *

## Transparent modifier

When using an image or colored background for the hero section of your website, you might want to turn the navbar transparent. Just add the `.uk-navbar-transparent` class to the `<nav>` element. If necessary, add the `.uk-light` or `.uk-dark` class from the [Inverse component](inverse.md) to adjust the navbar's color.

~~~html
<nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>...</nav>
~~~

* * *

## Subtitle

To define a subtitle, create a `<div>` element inside an item's `<a>` element. Add the `.uk-navbar-subtitle` class to another `<div>` element.

~~~html
<li>
    <a href="">
        <div>
            ...
            <div class="uk-navbar-subtitle"></div>
        </div>
    </a>
</li>
~~~

* * *

## Content item

You can also add custom content to the navbar, like text, icons, buttons or forms. Add the `.uk-navbar-item` class to a `<div>` element that serves as a container for your content

~~~html
<div class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
        <a href="" class="uk-navbar-item uk-logo"></a>
        <ul class="uk-navbar-nav">...</ul>
        <div class="uk-navbar-item">...</div>
    </div>
</div>
~~~

Add the `.uk-logo` class from the [Utility component](utility.md) to an `<a>` or `<div>` element to indicate your brand.

* * *

## Centered logo

You can create a split menu with a centered logo. Just add the `uk-navbar-center-left` class to one navbar and the `uk-navbar-center-right` class to another within the same navbar container. This will keep your logo centered and align the menus to the left and right.

**Note** An extra `div` element is required to support IE 11.

~~~html
<div class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-center">
        <div class="uk-navbar-center-left"><div>...</div></div>
        <a href="" class="uk-navbar-item uk-logo"></a>
        <div class="uk-navbar-center-right"><div>...</div></div>
    </div>
</div>
~~~

* * *

## Toggle item

Add the `.uk-navbar-toggle` class and the `uk-navbar-toggle-icon` attribute to an `<a>` or `<div>` element to create an icon as a toggle. By default, there is no JavaScript attached to the toggle. As an example, you can add an off-canvas navigation from the [Off-canvas component](offcanvas.md) or a modal from the [Modal component](modal.md).

~~~html
<div class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
        <a class="uk-navbar-toggle" uk-navbar-toggle-icon href=""></a>
    </div>
</div>
~~~

* * *

## Dropdowns

A navbar can contain a dropdown from the [Dropdown component](dropdown.md). Just add the `.uk-navbar-dropdown` modifier to the dropdown, so it fits perfectly into the navbar's styling. Add the `.uk-navbar-dropdown-nav` class to navs inside the dropdown.

~~~html
<ul class="uk-navbar-nav">
    <li>
        <a href=""></a>
        <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">...</ul>
        </div>
    </li>
</ul>
~~~

* * *

### Multiple columns

The [Dropdown component](dropdown.md) allows you arrange the dropdown content in columns. To accommodate up to five columns, you also need to add one of the following classes. Columns will stack, if they no longer fit into the container.

<table><thead><tr><th style="text-align:left">Class</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>.uk-navbar-dropdown-width-2</code></td><td style="text-align:left">Add this class to double the dropdown's width.</td></tr><tr><td style="text-align:left"><code>.uk-navbar-dropdown-width-3</code></td><td style="text-align:left">Add this class to triple the dropdown's width.</td></tr><tr><td style="text-align:left"><code>.uk-navbar-dropdown-width-4</code></td><td style="text-align:left">Add this class to multiply the dropdown's width by four.</td></tr><tr><td style="text-align:left"><code>.uk-navbar-dropdown-width-5</code></td><td style="text-align:left">Add this class to multiply the dropdown's width by five.</td></tr></tbody></table>

~~~html
<div class="uk-navbar-dropdown uk-navbar-dropdown-width-2">
    <div class="uk-navbar-dropdown-grid uk-child-width-1-2" uk-grid>
        <div>
            <ul class="uk-nav uk-navbar-dropdown-nav">...</ul>
        </div>
        <div>...</div>
    </div>
</div>
~~~

* * *

### Boundary alignment

Dropdowns can be aligned to the navbar's boundary. Just append the `boundary-align: true` parameter to the `uk-navbar` attribute. Add the `align: left`, `align: center` or `align: right` option to change the alignment. By default, dropdowns are aligned to the left.

~~~html
<nav class="uk-navbar-container" uk-navbar="boundary-align: true; align: center;">...</nav>
~~~

* * *

### Justify

To justify a dropdown, use the [Drop component](drop.md) and its position feature. In the following example it is aligned to the boundary of the parent navbar.

~~~html
<div class="uk-navbar-dropdown" uk-drop="boundary: .parent; boundary-align: true; pos: bottom-justify;">...</div>
~~~

* * *

## Dropbar

A dropbar extends to the full width of the navbar and displays the dropdown without its default styling. To place dropdowns inside such a dropbar, add the `dropbar: true` option to the `uk-navbar`.

~~~html
<nav class="uk-navbar-container" uk-navbar="dropbar: true;">...</nav>
<div class="uk-navbar-dropbar"></div>
~~~

* * *

### Push

By default, the dropbar overlays the site content. Add the `dropbar-mode: push;` option, to push the content down instead.

~~~html
<nav class="uk-navbar-container" uk-navbar="dropbar: true; dropbar-mode: push">...</nav>
<div class="uk-navbar-dropbar"></div>
~~~

* * *

## Sticky Navbar

For a basic sticky navbar, wrap the navbar inside a container with the `uk-sticky` attribute from the [Sticky component](sticky.md).

The navbar itself has a modifier class `uk-navbar-sticky` that ensures an optimized styling for the sticky state (for example an additional box shadow). To let the sticky component dynamically add and remove that class, set `cls-active: uk-navbar-sticky`. To ensure that the class is added to the navbar container, set `sel-target: .uk-navbar-container`.

**Note** You can view more examples in the tests for the [Sticky Navbar](../assets/uikit/tests/sticky-navbar.html).

~~~html
<div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
    <nav class="uk-navbar-container" uk-navbar>...</nav>
</div>
~~~

Instead of using a Dropdown, you can show a Dropbar, which means that the subnavigation is displayed in full width below the navbar. Simply set `dropbar: true` inside the `uk-navbar` attribute.

~~~html
<div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
    <nav class="uk-navbar-container" uk-navbar="dropbar: true;">...</nav>
</div>
~~~

* * *

### Transparent Sticky Navbar

When you use a [transparent navbar](navbar.md#transparent-modifier), your markup contains the `.uk-navbar-transparent` class together with `.uk-light` or `.uk-dark`. When the navbar is sticky, it is usually required to remove these classes and add them when the navbar returns to the non-sticky state. To do that, set `cls-inactive: uk-navbar-transparent uk-light`.

By default, the immediate toggling of classes does not look ideal. Instead, we can set `top: 200` to let the navbar disappear and then re-appear when the user has scrolled 200px past the navbar. In that case we can also define to have the navbar slide in with an animation, just set `animation: uk-animation-slide-top`.

~~~html
<div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 200">
    <nav class="uk-navbar-container" uk-navbar>...</nav>
</div>
~~~

* * *

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

<table><thead><tr><th style="text-align:left">Option</th><th style="text-align:left">Value</th><th style="text-align:left">Default</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>align</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>left</code></td><td style="text-align:left">Dropdown alignment: <code>left</code>, <code>right</code>, <code>center</code></td></tr><tr><td style="text-align:left"><code>mode</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>click, hover</code></td><td style="text-align:left">Comma separated list of dropdown trigger behavior modes: <code>click</code>, <code>hover</code></td></tr><tr><td style="text-align:left"><code>delay-show</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>0</code></td><td style="text-align:left">Delay time in hover mode before a dropdown is shown in milliseconds.</td></tr><tr><td style="text-align:left"><code>delay-hide</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>800</code></td><td style="text-align:left">Delay time in hover mode before a dropdown is hidden in milliseconds.</td></tr><tr><td style="text-align:left"><code>boundary</code></td><td style="text-align:left">CSS selector</td><td style="text-align:left"><code>window</code></td><td style="text-align:left">Referenced element to keep the dropdown's visibility.</td></tr><tr><td style="text-align:left"><code>boundary-align</code></td><td style="text-align:left">Boolean</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">Align the dropdown to the boundary.</td></tr><tr><td style="text-align:left"><code>offset</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>0</code></td><td style="text-align:left">The offset of the dropdown container.</td></tr><tr><td style="text-align:left"><code>dropbar</code></td><td style="text-align:left">Boolean</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">Enable or disable dropbar behavior.</td></tr><tr><td style="text-align:left"><code>dropbar-mode</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>slide</code></td><td style="text-align:left">The mode in which the dropbar appears: <code>slide</code>, <code>push</code></td></tr><tr><td style="text-align:left"><code>duration</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>200</code></td><td style="text-align:left">The dropbar transition duration.</td></tr></tbody></table>

* * *

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

~~~js
UIkit.navbar(element, options);
~~~

### Events

The following events will be triggered on elements with this component attached:

<table><thead><tr><th style="text-align:left">Name</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>beforeshow</code></td><td style="text-align:left">Fires before an item is shown. Can prevent showing by returning <code>false</code>.</td></tr><tr><td style="text-align:left"><code>show</code></td><td style="text-align:left">Fires after an item is shown.</td></tr><tr><td style="text-align:left"><code>shown</code></td><td style="text-align:left">Fires after the item's show animation has completed.</td></tr><tr><td style="text-align:left"><code>beforehide</code></td><td style="text-align:left">Fires before an item is hidden. Can prevent hiding by returning <code>false</code>.</td></tr><tr><td style="text-align:left"><code>hide</code></td><td style="text-align:left">Fires after an item's hide animation has started.</td></tr><tr><td style="text-align:left"><code>hidden</code></td><td style="text-align:left">Fires after an item is hidden.</td></tr></tbody></table>

## code:

~~~javascript
import Class from '../mixin/class';
import {$, $$, addClass, after, assign, css, height, includes, isRtl, isString, isVisible, matches, noop, query, remove, toFloat, Transition, within} from 'uikit-util';

export default {

    mixins: [Class],

    props: {
        dropdown: String,
        mode: 'list',
        align: String,
        offset: Number,
        boundary: Boolean,
        boundaryAlign: Boolean,
        clsDrop: String,
        delayShow: Number,
        delayHide: Number,
        dropbar: Boolean,
        dropbarMode: String,
        dropbarAnchor: Boolean,
        duration: Number
    },

    data: {
        dropdown: '.uk-navbar-nav > li',
        align: !isRtl ? 'left' : 'right',
        clsDrop: 'uk-navbar-dropdown',
        mode: undefined,
        offset: undefined,
        delayShow: undefined,
        delayHide: undefined,
        boundaryAlign: undefined,
        flip: 'x',
        boundary: true,
        dropbar: false,
        dropbarMode: 'slide',
        dropbarAnchor: false,
        duration: 200,
    },

    computed: {

        boundary({boundary, boundaryAlign}, $el) {
            return (boundary === true || boundaryAlign) ? $el : boundary;
        },

        dropbarAnchor({dropbarAnchor}, $el) {
            return query(dropbarAnchor, $el);
        },

        pos({align}) {
            return `bottom-${align}`;
        },

        dropdowns({dropdown, clsDrop}, $el) {
            return $$(`${dropdown} .${clsDrop}`, $el);
        }

    },

    beforeConnect() {

        const {dropbar} = this.$props;

        this.dropbar = dropbar && (isString(dropbar) && query(dropbar, this.$el) || $('<div></div>'));

        if (this.dropbar) {

            addClass(this.dropbar, 'uk-navbar-dropbar');

            if (this.dropbarMode === 'slide') {
                addClass(this.dropbar, 'uk-navbar-dropbar-slide');
            }
        }

    },

    disconnected() {
        this.dropbar && remove(this.dropbar);
    },

    update() {

        this.$create(
            'drop',
            this.dropdowns.filter(el => !this.getDropdown(el)),
            assign({}, this.$props, {boundary: this.boundary, pos: this.pos, offset: this.dropbar || this.offset})
        );

    },

    events: [

        {
            name: 'mouseover',

            delegate() {
                return this.dropdown;
            },

            handler({current}) {
                const active = this.getActive();
                if (active && active.toggle && !within(active.toggle.$el, current) && !active.tracker.movesTo(active.$el)) {
                    active.hide(false);
                }
            }

        },

        {
            name: 'mouseleave',

            el() {
                return this.dropbar;
            },

            handler() {
                const active = this.getActive();

                if (active && !matches(this.dropbar, ':hover')) {
                    active.hide();
                }
            }
        },

        {
            name: 'beforeshow',

            capture: true,

            filter() {
                return this.dropbar;
            },

            handler() {

                if (!this.dropbar.parentNode) {
                    after(this.dropbarAnchor || this.$el, this.dropbar);
                }

            }
        },

        {
            name: 'show',

            capture: true,

            filter() {
                return this.dropbar;
            },

            handler(_, drop) {

                const {$el, dir} = drop;

                this.clsDrop && addClass($el, `${this.clsDrop}-dropbar`);

                if (dir === 'bottom') {
                    this.transitionTo($el.offsetHeight + toFloat(css($el, 'marginTop')) + toFloat(css($el, 'marginBottom')), $el);
                }
            }
        },

        {
            name: 'beforehide',

            filter() {
                return this.dropbar;
            },

            handler(e, {$el}) {

                const active = this.getActive();

                if (matches(this.dropbar, ':hover') && active && active.$el === $el) {
                    e.preventDefault();
                }
            }
        },

        {
            name: 'hide',

            filter() {
                return this.dropbar;
            },

            handler(_, {$el}) {

                const active = this.getActive();

                if (!active || active && active.$el === $el) {
                    this.transitionTo(0);
                }
            }
        }

    ],

    methods: {

        getActive() {
            const [active] = this.dropdowns.map(this.getDropdown).filter(drop => drop.isActive());
            return active && includes(active.mode, 'hover') && within(active.toggle.$el, this.$el) && active;
        },

        transitionTo(newHeight, el) {

            const {dropbar} = this;
            const oldHeight = isVisible(dropbar) ? height(dropbar) : 0;

            el = oldHeight < newHeight && el;

            css(el, {height: oldHeight, overflow: 'hidden'});
            height(dropbar, oldHeight);

            Transition.cancel([el, dropbar]);
            return Transition
                .start([el, dropbar], {height: newHeight}, this.duration)
                .catch(noop)
                .then(() => css(el, {height: '', overflow: ''}));
        },

        getDropdown(el) {
            return this.$getComponent(el, 'drop') || this.$getComponent(el, 'dropdown');
        }

    }

};

~~~

* * *

_package: [uikit](uikit.md)_ _source: [test](https://github.com/git+https://github.com/uikit/uikit.git/tree/master/undefined/./src/js/core/navbar.js)_