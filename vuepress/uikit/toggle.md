# toggle

# Toggle

Hide, switch or change the appearance of different contents through a toggle.

## Usage

To apply this component, just add the `uk-toggle="target: #ID"` attribute to a `<button>` or `<a>` element. You can use any selector with the toggle attribute.

The toggle can be used to add or remove a class or attribute from the item. By default, it adds the `hidden` attribute to hide the element.

~~~html
<button uk-toggle="target: #my-id" type="button"></button>
<p id="my-id"></p>
~~~

<ExampleRunner id="runner-981ed146-bbab-5804-0fa5-1aeeb6254986" resource="src.js.core.toggle.js"/>

* * *

## Multiple items

You can also toggle multiple items at the same time. Just add the `target: SELECTOR` option to the `uk-toggle` attribute and use a selector that applies to all items.

~~~html
<button type="button" uk-toggle="target: .my-class"></button>
<p class="my-class"></p>
<p class="my-class"></p>
~~~

<ExampleRunner id="runner-f6cdde41-96ca-2d78-d3ba-7f7cdf1628c6" resource="src.js.core.toggle.js"/>

**Note** In this example we added the `hidden` attribute to one of the items, so that only the other item will be shown. The toggle will switch visible states between both elements.

* * *

## Custom class

If you don't want to toggle the `hidden` attribute, you can also toggle a custom class. Just add the `cls: CLASS` option to the `uk-toggle` attribute. In this example we used the `.uk-card-primary` class to switch between different card styles.

~~~html
<button type="button" uk-toggle="target: #my-id; cls: uk-card-primary"></button>
<p id="my-id" class="uk-card uk-card-default"></p>
~~~

<ExampleRunner id="runner-15bdf4e1-9e1b-3a6a-c209-17449da97f3d" resource="src.js.core.toggle.js"/>

* * *

## Animations

The Toggle component allows you to add animations to items when toggling between them. Just add one of the `.uk-animation-*` classes from the [Animation component](animation.md) to the animation parameter. The class will be applied to the in as well as the out animation. If you prefer a different out animation, just add another class.

~~~html
<button type="button" uk-toggle="target: #my-id; animation: uk-animation-fade"></button>
<p id="my-id"></p>
~~~

<ExampleRunner id="runner-2338a225-120a-4ead-8fa0-09427f5cabe4" resource="src.js.core.toggle.js"/>

* * *

### Multiple animations

You can also apply multiple animations from the [Animation component](animation). That way you can add different in and out animations.

~~~html
<button type="button" uk-toggle="target: #my-id; animation: uk-animation-slide-left, uk-animation-slide-bottom"></button>
<p id="my-id"></p>
~~~

<ExampleRunner id="runner-7aa56eaa-8295-830e-5def-1a7f7944c53f" resource="src.js.core.toggle.js"/>

* * *

### Queued animations

When toggling multiple items with an animation, you might want to wait until the first animation has run through before animating the second item in. To do so, just add the `queued: true` option to the `uk-toggle` attribute.

~~~html
<button type="button" uk-toggle="target: .my-class; animation: uk-animation-fade; queued: true"></button>
<p class="my-class"></p>
<p class="my-class"></p>
~~~

<ExampleRunner id="runner-bac1565b-d20d-78b6-e1e6-9c7d8e98e69b" resource="src.js.core.toggle.js"/>

* * *

## Modes

A toggle can be triggered in different ways. Just add the `mode` option to the `uk-toggle` attribute and apply one of these values.

<table><thead><tr><th style="text-align:left">Value</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>hover</code></td><td style="text-align:left">The toggle will be triggered on hover.</td></tr><tr><td style="text-align:left"><code>click</code></td><td style="text-align:left">The toggle will be triggered on click. This is the default value.</td></tr><tr><td style="text-align:left"><code>click, hover</code></td><td style="text-align:left">The toggle will be triggered on click and hover.</td></tr><tr><td style="text-align:left"><code>media</code></td><td style="text-align:left">The toggling behavior depends on the viewport width. More information <a href="#media">below</a>.</td></tr></tbody></table>

~~~html
<button type="button" uk-toggle="target: #my-id; mode: hover"></button>
<p id="my-id"></p>
~~~

<ExampleRunner id="runner-d2b5d058-dab4-55f4-f50d-e520d684eca0" resource="src.js.core.toggle.js"/>

* * *

### Media

When using the `media` mode, you also need to add the `media` option and apply a [valid value](toggle.md#component-options) like a viewport value from `@s` to `@xl`. Without the `target` option, the toggle applies the toggled state to itself. So it will switch between the different states that are defined in the `cls` option depending on the viewport width that it is displayed on.

~~~html
<!-- The primary modifier will only be applied on large screens -->

<div class="uk-card uk-card-default" uk-toggle="cls: uk-card-primary; mode: media; media: @l"></div>
~~~

<ExampleRunner id="runner-f618fd5e-1ca9-f9e9-1332-80ed1b8e8719" resource="src.js.core.toggle.js"/>

**Note** The initial toggle state depends on the `cls` option. It is either the first given class in the space separated list or if set to `false`, the `hidden` attribute. If more than one class is given, the other classes are simply being toggled on state change.

* * *

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

<table><thead><tr><th style="text-align:left">Option</th><th style="text-align:left">Value</th><th style="text-align:left">Default</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>target</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">CSS selector of the element(s) to toggle.</td></tr><tr><td style="text-align:left"><code>mode</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>click</code></td><td style="text-align:left">Comma separated list of trigger behaviour modes. (<code>hover</code>, <code>click</code>, <code>media</code>)</td></tr><tr><td style="text-align:left"><code>cls</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">The class that is being toggled. Defaults to the <code>hidden</code> attribute.</td></tr><tr><td style="text-align:left"><code>media</code></td><td style="text-align:left">Integer, String</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">In media mode, the breakpoint that triggers the toggle - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)).</td></tr><tr><td style="text-align:left"><code>animation</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">Space separated names of <a href="animation.html">animations</a> to use, comma separated for out animation.</td></tr><tr><td style="text-align:left"><code>duration</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>200</code></td><td style="text-align:left">Animation duration in milliseconds.</td></tr><tr><td style="text-align:left"><code>queued</code></td><td style="text-align:left">Boolean</td><td style="text-align:left"><code>true</code></td><td style="text-align:left">Toggle the targets successively.</td></tr></tbody></table>

`target` is the _Primary_ option and its key may be omitted, if it's the only option in the attribute value.

~~~html
<span uk-toggle=".my-class"></span>
~~~

* * *

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

~~~js
UIkit.toggle(element, options);
~~~

### Events

The following events will be triggered on elements with this component attached:

<table><thead><tr><th style="text-align:left">Name</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>beforeshow</code></td><td style="text-align:left">Fires before an item is shown. Can prevent showing by returning <code>false</code>.</td></tr><tr><td style="text-align:left"><code>show</code></td><td style="text-align:left">Fires after an item is shown.</td></tr><tr><td style="text-align:left"><code>shown</code></td><td style="text-align:left">Fires after the item's show animation has completed.</td></tr><tr><td style="text-align:left"><code>beforehide</code></td><td style="text-align:left">Fires before an item is hidden. Can prevent hiding by returning <code>false</code>.</td></tr><tr><td style="text-align:left"><code>hide</code></td><td style="text-align:left">Fires after an item's hide animation has started.</td></tr><tr><td style="text-align:left"><code>hidden</code></td><td style="text-align:left">Fires after an item is hidden.</td></tr></tbody></table>

### Methods

The following methods are available for the component:

#### Toggle

~~~js
UIkit.toggle(element).toggle();
~~~

Toggles the Toggle's target.

## code:

~~~javascript
import Togglable from '../mixin/togglable';
import {closest, hasTouch, includes, isTouch, isVisible, matches, once, pointerEnter, pointerLeave, queryAll, trigger} from 'uikit-util';

export default {

    mixins: [Togglable],

    args: 'target',

    props: {
        href: String,
        target: null,
        mode: 'list',
        media: 'media'
    },

    data: {
        href: false,
        target: false,
        mode: 'click',
        queued: true,
        media: false
    },

    computed: {

        target({href, target}, $el) {
            target = queryAll(target || href, $el);
            return target.length && target || [$el];
        }

    },

    events: [

        {

            name: `${pointerEnter} ${pointerLeave}`,

            filter() {
                return includes(this.mode, 'hover');
            },

            handler(e) {
                if (!isTouch(e)) {
                    this.toggle(`toggle${e.type === pointerEnter ? 'show' : 'hide'}`);
                }
            }

        },

        {

            name: 'click',

            filter() {
                return includes(this.mode, 'click') || hasTouch;
            },

            handler(e) {

                if (!isTouch(e) && !includes(this.mode, 'click')) {
                    return;
                }

                // TODO better isToggled handling
                let link;
                if (closest(e.target, 'a[href="#"], button')
                    || (link = closest(e.target, 'a[href]')) && (
                        this.cls
                        || !isVisible(this.target)
                        || link.hash && matches(this.target, link.hash)
                    )
                ) {
                    once(document, 'click', e => e.preventDefault());
                }

                this.toggle();
            }

        }
    ],

    update: {

        write() {

            if (!includes(this.mode, 'media') || !this.media) {
                return;
            }

            const toggled = this.isToggled(this.target);
            if (window.matchMedia(this.media).matches ? !toggled : toggled) {
                this.toggle();
            }

        },

        events: ['load', 'resize']

    },

    methods: {

        toggle(type) {
            if (trigger(this.target, type || 'toggle', [this])) {
                this.toggleElement(this.target);
            }
        }

    }

};

~~~

* * *

_package: [uikit](uikit.md)_ _source: [test](https://github.com/git+https://github.com/uikit/uikit.git/tree/master/undefined/./src/js/core/toggle.js)_