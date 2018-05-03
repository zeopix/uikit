# tab

# Tab

Create a tabbed navigation with different styles.

## Usage

The tab component consists of clickable tabs, that are aligned side by side in a list. Its JavaScript functionality extends the [Switcher component](switcher.md) and is necessary to dynamically transition through different contents using the tabbed navigation.

<table><thead><tr><th style="text-align:left">Class/Attribute</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>uk-tab</code></td><td style="text-align:left">Add this attribute to a <code>&lt;ul&gt;</code> element to define the Tab component. Use <code>&lt;a&gt;</code> elements as tab items within the list.</td></tr><tr><td style="text-align:left"><code>.uk-active</code></td><td style="text-align:left">Add this class to a list item to apply an active state.</td></tr><tr><td style="text-align:left"><code>.uk-disabled</code></td><td style="text-align:left">Add this class to a list item to apply a disabled state. Also remove the <code>href</code> attribute from the anchor to make it inaccessible through keyboard navigation.</td></tr></tbody></table>

~~~html
<ul uk-tab>
    <li class="uk-active"><a href=""></a></li>
    <li><a href=""></a></li>
    <li class="uk-disabled"><a></a></li>
</ul>
~~~

* * *

## Bottom modifier

Add the `.uk-tab-bottom` class to flip tab items to the bottom.

~~~html
<ul class="uk-tab-bottom" uk-tab>...</ul>
~~~

* * *

## Left/Right modifiers

Add the `.uk-tab-left` or `.uk-tab-right` class to align tabs vertically to the left or right side. To save space, the alignment automatically switches back to horizontal when the viewport width goes below 960px. Add the `media` option with your own value to the `uk-tab` attribute to modify this behavior.

When using the vertical alignment, you will usually create a grid to apply the layout as seen in the [Switcher example](switcher.md#vertical-tabs).

~~~html
<ul class="uk-tab-left" uk-tab>...</ul>

<ul class="uk-tab-right" uk-tab>...</ul>
~~~

* * *

## Alignment

You can combine tabs with the [Flex component](flex.md) or the [Width component](width.md) to modify the alignment of the navigations.

~~~html
<ul class="uk-flex-right" uk-tab>...</ul>
~~~

* * *

## Tabs and Dropdown

Tabs can be used to trigger a dropdown menu from the [Dropdown component](dropdown.md).

~~~html
<ul uk-tab>
    <li>

        <!-- This is the menu item toggling the dropdown -->
        <a href=""></a>

        <!-- This is the dropdown -->
        <div uk-dropdown="mode: click">
            <ul class="uk-nav uk-dropdown-nav">...</ul>
        </div>

    </li>
</ul>
~~~

* * *

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

<table><thead><tr><th style="text-align:left">Option</th><th style="text-align:left">Value</th><th style="text-align:left">Default</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>connect</code></td><td style="text-align:left">CSS selector</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">Related item's container. By default, this is the next element with the 'uk-switcher' class.</td></tr><tr><td style="text-align:left"><code>toggle</code></td><td style="text-align:left">CSS selector</td><td style="text-align:left"><code>&gt; *</code></td><td style="text-align:left">The toggle selector, which triggers content switching on click.</td></tr><tr><td style="text-align:left"><code>active</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>0</code></td><td style="text-align:left">Active index on init. Providing a negative number indicates a position starting from the end of the set.</td></tr><tr><td style="text-align:left"><code>animation</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">The space separated names of animations to use. Comma separate for animation out.</td></tr><tr><td style="text-align:left"><code>duration</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>200</code></td><td style="text-align:left">The animation duration.</td></tr><tr><td style="text-align:left"><code>swiping</code></td><td style="text-align:left">Boolean</td><td style="text-align:left"><code>true</code></td><td style="text-align:left">Use swiping.</td></tr><tr><td style="text-align:left"><code>media</code></td><td style="text-align:left">Integer, String</td><td style="text-align:left"><code>960</code></td><td style="text-align:left">When to switch to horizontal mode - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)).</td></tr></tbody></table>

* * *

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

~~~js
UIkit.tab(element, options);
~~~

### Events

The following events will be triggered on the connected items of the elements with this component attached:

<table><thead><tr><th style="text-align:left">Name</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>beforeshow</code></td><td style="text-align:left">Fires before an item is shown. Can prevent showing by returning <code>false</code>.</td></tr><tr><td style="text-align:left"><code>show</code></td><td style="text-align:left">Fires after an item is shown.</td></tr><tr><td style="text-align:left"><code>shown</code></td><td style="text-align:left">Fires after the item's show animation has completed.</td></tr><tr><td style="text-align:left"><code>beforehide</code></td><td style="text-align:left">Fires before an item is hidden. Can prevent hiding by returning <code>false</code>.</td></tr><tr><td style="text-align:left"><code>hide</code></td><td style="text-align:left">Fires after an item's hide animation has started.</td></tr><tr><td style="text-align:left"><code>hidden</code></td><td style="text-align:left">Fires after an item is hidden.</td></tr></tbody></table>

### Methods

The following methods are available for the component:

#### Show

~~~js
UIkit.tab(element).show(index);
~~~

Shows the Tab item with given index.

<table><thead><tr><th style="text-align:left">Name</th><th style="text-align:left">Type</th><th style="text-align:left">Default</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>index</code></td><td style="text-align:left">String, Integer, Node</td><td style="text-align:left">0</td><td style="text-align:left">Tab item to show. 0 based index.</td></tr></tbody></table>

## code:

~~~javascript
import Switcher from './switcher';
import Class from '../mixin/class';
import {hasClass} from 'uikit-util';

export default {

    mixins: [Class],

    extends: Switcher,

    props: {
        media: 'media'
    },

    data: {
        media: 960,
        attrItem: 'uk-tab-item'
    },

    connected() {

        const cls = hasClass(this.$el, 'uk-tab-left')
            ? 'uk-tab-left'
            : hasClass(this.$el, 'uk-tab-right')
                ? 'uk-tab-right'
                : false;

        if (cls) {
            this.$create('toggle', this.$el, {cls, mode: 'media', media: this.media});
        }
    }

};

~~~

* * *

_package: [uikit](uikit.md)_ _source: [test](https://github.com/git+https://github.com/uikit/uikit.git/tree/master/undefined/./src/js/core/tab.js)_