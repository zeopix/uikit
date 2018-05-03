# switcher

# Switcher

Dynamically transition through different content panes.

## Usage

The switcher component consists of a number of toggles and their related content items. Add the `uk-switcher` attribute to the element which contains the toggles. Add the `.uk-switcher` class to the element containing the content items.

By default, the element with the `.uk-switcher` class has to succeed the toggle directly in order for the switcher to function. If you need it to be nested in another element, for example when using a grid, add the `connect: SELECTOR` option to the `uk-switcher` attribute and select the element containing the items for switching.

Typically, the switcher toggles are styled through other components, some of which will be shown here.

~~~html
<!-- This is the nav containing the toggling elements -->
<ul uk-switcher>
    <li><a href=""></a></li>
</ul>

<!-- This is the container of the content items -->
<ul class="uk-switcher">
    <li></li>
</ul>
~~~

In this example we are using the [Subnav component](subnav.md).

* * *

## Navigation controls

In some cases you want to switch to another content section from within the active content. This is possible using the `uk-switcher-item` attribute. To target the items, you need to set the attribute to the number of the respective content item.

Setting the attribute to `next` and `previous` will switch to the adjacent items.

~~~html
<ul class="uk-switcher uk-margin">
    <li><a href="" uk-switcher-item="0"></a></li>
    <li><a href="" uk-switcher-item="1"></a></li>
    <li><a href="" uk-switcher-item="next"></a></li>
    <li><a href="" uk-switcher-item="previous"></a></li>
</ul>
~~~

* * *

## Connect multiple containers

It is also possible to connect multiple content containers. Just add the `connect` parameter to the `uk-switcher` attribute and use a selector that applies to all items.

~~~html
<!-- This is the nav containing the toggling elements -->
<ul uk-switcher="connect: .my-class">...</ul>

<!-- These are the containers of the content items -->
<ul class="uk-switcher my-class">...</ul>

<ul class="uk-switcher my-class">...</ul>
~~~

* * *

## Animations

You can apply all animations from the [Animation component](animation) to switcher items. To do so, add the `animation` parameter with the relevant class to the `uk-switcher` attribute.

~~~html
<ul uk-switcher="animation: uk-animation-fade">...</ul>
~~~

* * *

### Multiple animations

You can also apply multiple animations from the [Animation component](animation). That way you can add different in and out animations.

~~~html
<ul uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium">...</ul>
~~~

* * *

## Switcher and subnav

The switcher is easily applied to the [Subnav component](subnav).

~~~html
<!-- This is the subnav containing the toggling elements -->
<ul class="uk-subnav uk-subnav-pill" uk-switcher>...</ul>

<!-- This is the container of the content items -->
<ul class="uk-switcher"></ul>
~~~

* * *

## Switcher and tab

As an exception to the rule, add the `uk-tab` attribute instead of `uk-switcher` to the tabbed navigation to combine the switcher with the [Tab component](tab).

~~~html
<!-- This is the subnav containing the toggling elements -->
<ul uk-tab>...</ul>

<!-- This is the container of the content items -->
<ul class="uk-switcher">...</ul>
~~~

* * *

### Vertical tabs

Use the [Grid](grid) and [Width](width) components to display content correctly with a vertical tabbed navigation.

~~~html
<div uk-grid>
    <div class="uk-width-auto">
        <ul class="uk-tab-left" uk-tab="connect: #my-id">...</ul>
    </div>
    <div class="uk-width-expand">
        <ul id="my-id" class="uk-switcher">...</ul>
    </div>
</div>
~~~

* * *

## Switcher and button

The switcher can also be applied to buttons or button groups from the [Button component](button). Just add the switcher attribute to a block around a group of buttons or to the element with the `.uk-button-group` class.

~~~html
<!-- This is a switcher using a number of buttons -->
<div uk-switcher>
    <button class="uk-button uk-button-default" type="button"></button>
    <button class="uk-button uk-button-default" type="button"></button>
</div>

<ul class="uk-switcher">...</ul>
~~~

* * *

## Switcher and nav

To apply the switcher to the [Nav component](nav), add the `uk-switcher` attribute to the nav `<ul>` element. Use the [Grid](grid) and [Width](width) components to arrange nav and content in a grid layout.

~~~html
<div uk-grid>
    <div class="uk-width-small">
        <ul class="uk-nav uk-nav-default" uk-switcher="connect: #my-id">...</ul>
    </div>
    <div class="uk-width-expand">
        <ul id="my-id" class="uk-switcher">...</ul>
    </div>
</div>
~~~

* * *

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

<table><thead><tr><th style="text-align:left">Option</th><th style="text-align:left">Value</th><th style="text-align:left">Default</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>connect</code></td><td style="text-align:left">CSS selector</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">Related item's container. By default, this is the next element with the 'uk-switcher' class.</td></tr><tr><td style="text-align:left"><code>toggle</code></td><td style="text-align:left">CSS selector</td><td style="text-align:left"><code>&gt; *</code></td><td style="text-align:left">The toggle selector, which triggers content switching on click.</td></tr><tr><td style="text-align:left"><code>active</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>0</code></td><td style="text-align:left">Active index on init. Providing a negative number indicates a position starting from the end of the set.</td></tr><tr><td style="text-align:left"><code>animation</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">The space separated names of animations to use. Comma separate for animation out.</td></tr><tr><td style="text-align:left"><code>duration</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>200</code></td><td style="text-align:left">The animation duration.</td></tr><tr><td style="text-align:left"><code>swiping</code></td><td style="text-align:left">Boolean</td><td style="text-align:left"><code>true</code></td><td style="text-align:left">Use swiping.</td></tr></tbody></table>

`connect` is the _Primary_ option and its key may be omitted, if it's the only option in the attribute value.

~~~html
<span uk-switcher=".switcher-container"></span>
~~~

* * *

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

~~~js
UIkit.switcher(element, options);
~~~

### Events

The following events will be triggered on the connected items of the elements with this component attached:

<table><thead><tr><th style="text-align:left">Name</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>beforeshow</code></td><td style="text-align:left">Fires before an item is shown. Can prevent showing by returning <code>false</code>.</td></tr><tr><td style="text-align:left"><code>show</code></td><td style="text-align:left">Fires after an item is shown.</td></tr><tr><td style="text-align:left"><code>shown</code></td><td style="text-align:left">Fires after the item's show animation has completed.</td></tr><tr><td style="text-align:left"><code>beforehide</code></td><td style="text-align:left">Fires before an item is hidden. Can prevent hiding by returning <code>false</code>.</td></tr><tr><td style="text-align:left"><code>hide</code></td><td style="text-align:left">Fires after an item's hide animation has started.</td></tr><tr><td style="text-align:left"><code>hidden</code></td><td style="text-align:left">Fires after an item is hidden.</td></tr></tbody></table>

### Methods

The following methods are available for the component:

#### Show

~~~js
UIkit.switcher(element).show(index);
~~~

Shows the Switcher item with given index.

<table><thead><tr><th style="text-align:left">Name</th><th style="text-align:left">Type</th><th style="text-align:left">Default</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>index</code></td><td style="text-align:left">String, Integer, Node</td><td style="text-align:left">0</td><td style="text-align:left">Switcher item to show. 0 based index.</td></tr></tbody></table>

## code:

~~~javascript
import Togglable from '../mixin/togglable';
import {$$, addClass, attr, data, filter, getIndex, hasClass, index, isTouch, matches, queryAll, removeClass} from 'uikit-util';

export default {

    mixins: [Togglable],

    args: 'connect',

    props: {
        connect: String,
        toggle: String,
        active: Number,
        swiping: Boolean
    },

    data: {
        connect: '~.uk-switcher',
        toggle: '> *',
        active: 0,
        swiping: true,
        cls: 'uk-active',
        clsContainer: 'uk-switcher',
        attrItem: 'uk-switcher-item',
        queued: true
    },

    computed: {

        connects({connect}, $el) {
            return queryAll(connect, $el);
        },

        toggles({toggle}, $el) {
            return $$(toggle, $el);
        }

    },

    events: [

        {

            name: 'click',

            delegate() {
                return `${this.toggle}:not(.uk-disabled)`;
            },

            handler(e) {
                e.preventDefault();
                this.show(e.current);
            }

        },

        {
            name: 'click',

            el() {
                return this.connects;
            },

            delegate() {
                return `[${this.attrItem}],[data-${this.attrItem}]`;
            },

            handler(e) {
                e.preventDefault();
                this.show(data(e.current, this.attrItem));
            }
        },

        {
            name: 'swipeRight swipeLeft',

            filter() {
                return this.swiping;
            },

            el() {
                return this.connects;
            },

            handler(e) {
                if (!isTouch(e)) {
                    return;
                }

                e.preventDefault();
                if (!window.getSelection().toString()) {
                    this.show(e.type === 'swipeLeft' ? 'next' : 'previous');
                }
            }
        }

    ],

    update() {

        this.connects.forEach(list => this.updateAria(list.children));
        this.show(filter(this.toggles, `.${this.cls}`)[0] || this.toggles[this.active] || this.toggles[0]);

    },

    methods: {

        show(item) {

            const {length} = this.toggles;
            const prev = !!this.connects.length && index(filter(this.connects[0].children, `.${this.cls}`)[0]);
            const hasPrev = prev >= 0;
            const dir = item === 'previous' ? -1 : 1;

            let toggle, next = getIndex(item, this.toggles, prev);

            for (let i = 0; i < length; i++, next = (next + dir + length) % length) {
                if (!matches(this.toggles[next], '.uk-disabled, [disabled]')) {
                    toggle = this.toggles[next];
                    break;
                }
            }

            if (!toggle || prev >= 0 && hasClass(toggle, this.cls) || prev === next) {
                return;
            }

            removeClass(this.toggles, this.cls);
            attr(this.toggles, 'aria-expanded', false);
            addClass(toggle, this.cls);
            attr(toggle, 'aria-expanded', true);

            this.connects.forEach(list => {
                if (!hasPrev) {
                    this.toggleNow(list.children[next]);
                } else {
                    this.toggleElement([list.children[prev], list.children[next]]);
                }
            });

        }

    }

};

~~~

* * *

_package: [uikit](uikit.md)_ _source: [test](https://github.com/git+https://github.com/uikit/uikit.git/tree/master/undefined/./src/js/core/switcher.js)_