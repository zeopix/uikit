# alert

# Alert

Display success, warning and error messages.

## Usage

To apply this component, add the `uk-alert` attribute to a block element.

~~~html
<div uk-alert></div>
~~~

* * *

## Close button

To create a close button and enable its functionality, add the `.uk-alert-close` class to a `<button>` or `<a>` element inside the alert box. To apply a close icon, add the `uk-close` attribute from the [Close component](close.md).

~~~html
<div uk-alert>
    <a class="uk-alert-close" uk-close></a>
</div>
~~~

* * *

## Style modifiers

There are several style modifiers available. Just add one of the following classes to apply a different look.

<table><thead><tr><th style="text-align:left">Class</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>.uk-alert-primary</code></td><td style="text-align:left">Give the message a prominent styling.</td></tr><tr><td style="text-align:left"><code>.uk-alert-success</code></td><td style="text-align:left">Indicates success or a positive message.</td></tr><tr><td style="text-align:left"><code>.uk-alert-warning</code></td><td style="text-align:left">Indicates a message containing a warning.</td></tr><tr><td style="text-align:left"><code>.uk-alert-danger</code></td><td style="text-align:left">Indicates an important or error message.</td></tr></tbody></table>

* * *

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

<table><thead><tr><th style="text-align:left">Option</th><th style="text-align:left">Value</th><th style="text-align:left">Default</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>animation</code></td><td style="text-align:left">Boolean, String</td><td style="text-align:left"><code>true</code></td><td style="text-align:left">Fade out or use the <a href="animation.html">Animation component</a>.</td></tr><tr><td style="text-align:left"><code>duration</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>150</code></td><td style="text-align:left">Animation duration in milliseconds.</td></tr><tr><td style="text-align:left"><code>sel-close</code></td><td style="text-align:left">CSS selector</td><td style="text-align:left"><code>.uk-alert-close</code></td><td style="text-align:left">The close trigger element.</td></tr></tbody></table>

`animation` is the _Primary_ option and its key may be omitted, if it's the only option in the attribute value.

~~~html
<span uk-toggle=".my-class"></span>
~~~

* * *

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

~~~js
UIkit.alert(element, options);
~~~

### Events

The following events will be triggered on elements with this component attached:

<table><thead><tr><th style="text-align:left">Name</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>beforehide</code></td><td style="text-align:left">Fires before an item is hidden. Can prevent hiding by returning <code>false</code>.</td></tr><tr><td style="text-align:left"><code>hide</code></td><td style="text-align:left">Fires after an item is hidden.</td></tr></tbody></table>

### Methods

The following methods are available for the component:

#### Close

~~~js
UIkit.alert(element).close();
~~~

Closes and removes the Alert.

## code:

~~~javascript
import Class from '../mixin/class';
import Togglable from '../mixin/togglable';
import {assign} from 'uikit-util';

export default {

    attrs: true,

    mixins: [Class, Togglable],

    args: 'animation',

    props: {
        close: String
    },

    data: {
        animation: [true],
        selClose: '.uk-alert-close',
        duration: 150,
        hideProps: assign({opacity: 0}, Togglable.data.hideProps)
    },

    events: [

        {

            name: 'click',

            delegate() {
                return this.selClose;
            },

            handler(e) {
                e.preventDefault();
                this.close();
            }

        }

    ],

    methods: {

        close() {
            this.toggleElement(this.$el).then(() => this.$destroy(true));
        }

    }

};

~~~

* * *

_package: [uikit](uikit.md)_ _source: [test](https://github.com/git+https://github.com/uikit/uikit.git/tree/master/undefined/./src/js/core/alert.js)_