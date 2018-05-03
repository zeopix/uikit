# dropdown

# Dropdown

Defines different styles for a toggleable dropdown.

## Usage

Basically, a dropdown is a specific case of the [drop](drop.md) that provides its own styling. Any content, like a button, can toggle a dropdown. Just add the `uk-dropdown` attribute to a block element following the toggle.

~~~html
<button type="button"></button>
<div uk-dropdown></div>
~~~

A dropdown can be enabled by hovering and clicking the toggle. Just add the `mode: click` option to the attribute to force `click` mode only. If you want to group the toggle and the dropdown, you can just add the `.uk-inline` class from the [Utility component](utility.md#inline) to a container element around both.

~~~html
<div class="uk-inline">
    <button type="button"></button>
    <div uk-dropdown="mode: click"></div>
</div>
~~~

* * *

## Nav in dropdown

A dropdown can contain a nav from the [Nav component](nav.md). Just add the `.uk-nav` class and the `.uk-dropdown-nav` modifier to a `<ul>` element.

~~~html
<button type="button"></button>
<div uk-dropdown>
    <ul class="uk-nav uk-dropdown-nav">...</ul>
</div>
~~~

* * *

## Grid in dropdown

You can place a grid from the [Grid component](grid.md) inside a dropdown, which can hold a navigation or any other content. Just wrap the content with a `<div>` element and add the `uk-grid` attribute. If the grid should stack automatically, whenever the dropdown no longer fits its container, just add the `.uk-dropdown-grid` class.

~~~html
<div class="uk-width-large" uk-dropdown>
    <div class="uk-dropdown-grid uk-child-width-1-2@m" uk-grid>...</div>
</div>
~~~

Use one of the classes from the [Width component](width.md) to adjust the dropdown's width.

* * *

## Position

Add one of the following options to the `uk-dropdown` attribute to adjust the dropdown's alignment.

~~~html
<div uk-dropdown="pos: top-left"></div>
~~~

<table><thead><tr><th style="text-align:left">Position</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>bottom-left</code></td><td style="text-align:left">Aligns the dropdown to the bottom left.</td></tr><tr><td style="text-align:left"><code>bottom-center</code></td><td style="text-align:left">Aligns the dropdown to the bottom center.</td></tr><tr><td style="text-align:left"><code>bottom-right</code></td><td style="text-align:left">Aligns the dropdown to the bottom right.</td></tr><tr><td style="text-align:left"><code>bottom-justify</code></td><td style="text-align:left">Aligns the dropdown to the bottom and justifies its width to the related element.</td></tr><tr><td style="text-align:left"><code>top-left</code></td><td style="text-align:left">Aligns the dropdown to the top left.</td></tr><tr><td style="text-align:left"><code>top-center</code></td><td style="text-align:left">Aligns the dropdown to the top center.</td></tr><tr><td style="text-align:left"><code>top-right</code></td><td style="text-align:left">Aligns the dropdown to the top right.</td></tr><tr><td style="text-align:left"><code>top-justify</code></td><td style="text-align:left">Aligns the dropdown to the top and justifies its width to the related element.</td></tr><tr><td style="text-align:left"><code>left-top</code></td><td style="text-align:left">Aligns the dropdown to the left top.</td></tr><tr><td style="text-align:left"><code>left-center</code></td><td style="text-align:left">Aligns the dropdown to the left center.</td></tr><tr><td style="text-align:left"><code>left-bottom</code></td><td style="text-align:left">Aligns the dropdown to the left bottom.</td></tr><tr><td style="text-align:left"><code>right-top</code></td><td style="text-align:left">Aligns the dropdown to the right top.</td></tr><tr><td style="text-align:left"><code>right-center</code></td><td style="text-align:left">Aligns the dropdown to the right center.</td></tr><tr><td style="text-align:left"><code>right-bottom</code></td><td style="text-align:left">Aligns the dropdown to the right bottom.</td></tr></tbody></table>

* * *

## Boundary

By default, the dropdown flips automatically when it exceeds the viewport's edge. If you want to flip it according to a container's boundary, just add the `boundary: .my-class` option to the `uk-dropdown` attribute, using a selector for the container. That way you can determine any parent element as the drop's boundary.

~~~html
<div class="my-class">
    <button type="button"></button>
    <div uk-dropdown="boundary: .my-class"></div>
</div>
~~~

* * *

### Boundary alignment

You can also align the dropdown to its boundary. To do so, add the `boundary-align: true` option to the attribute.

~~~html
<div class="my-class">
    <button type="button"></button>
    <div uk-dropdown="boundary: .my-class; boundary-align: true"></div>
</div>
~~~

* * *

## Offset

To define a custom offset between the dropdown container and the toggle, add the `offset` option with a value for the offset, measured in pixels.

~~~html
<div uk-dropdown="offset: 80"></div>
~~~

* * *

## Animation

Apply one or more animations to the dropdown by adding the `animation: uk-animation-*` option with one of the classes from the [Animation component](animation.md). You can also determine the animation's duration. Just add the `duration` option with your value.

~~~html
<div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000"></div>
~~~

* * *

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

<table><thead><tr><th style="text-align:left">Option</th><th style="text-align:left">Value</th><th style="text-align:left">Default</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>toggle</code></td><td style="text-align:left">String, Boolean</td><td style="text-align:left"><code>true</code></td><td style="text-align:left">CSS selector for the element to be used as the toggler. By default, the preceding element is used.</td></tr><tr><td style="text-align:left"><code>pos</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>bottom-left</code></td><td style="text-align:left">The position of the dropdown.</td></tr><tr><td style="text-align:left"><code>mode</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>click, hover</code></td><td style="text-align:left">Comma separated list of dropdown trigger behaviour modes: <code>hover</code>, <code>click</code></td></tr><tr><td style="text-align:left"><code>delay-show</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>0</code></td><td style="text-align:left">Delay time in milliseconds before a dropdown is displayed in hover mode.</td></tr><tr><td style="text-align:left"><code>delay-hide</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>800</code></td><td style="text-align:left">Delay time in milliseconds before a dropdown is hidden in hover mode.</td></tr><tr><td style="text-align:left"><code>boundary</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>window</code></td><td style="text-align:left">CSS selector of the element to maintain the drop's visibility.</td></tr><tr><td style="text-align:left"><code>boundary-align</code></td><td style="text-align:left">Boolean</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">Align the dropdown to its boundary.</td></tr><tr><td style="text-align:left"><code>flip</code></td><td style="text-align:left">Boolean, String</td><td style="text-align:left"><code>true</code></td><td style="text-align:left">Automatically flip the drop. Possible values are <code>false</code>, <code>true</code>, <code>x</code> or <code>y</code>.</td></tr><tr><td style="text-align:left"><code>offset</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>0</code></td><td style="text-align:left">The offset of the dropdown's container.</td></tr><tr><td style="text-align:left"><code>animation</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">Space separated names of animations to apply.</td></tr><tr><td style="text-align:left"><code>duration</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>200</code></td><td style="text-align:left">Animation duration in milliseconds.</td></tr></tbody></table>

* * *

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

~~~js
UIkit.dropdown(element, options);
~~~

### Events

The following events will be triggered on elements with this component attached:

<table><thead><tr><th style="text-align:left">Name</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>toggle</code></td><td style="text-align:left">Fires before an item is toggled.</td></tr><tr><td style="text-align:left"><code>beforeshow</code></td><td style="text-align:left">Fires before an item is shown. Can prevent showing by returning <code>false</code>.</td></tr><tr><td style="text-align:left"><code>show</code></td><td style="text-align:left">Fires after an item is shown.</td></tr><tr><td style="text-align:left"><code>shown</code></td><td style="text-align:left">Fires after the item's show animation has completed.</td></tr><tr><td style="text-align:left"><code>beforehide</code></td><td style="text-align:left">Fires before an item is hidden. Can prevent hiding by returning <code>false</code>.</td></tr><tr><td style="text-align:left"><code>hide</code></td><td style="text-align:left">Fires after an item is hidden.</td></tr><tr><td style="text-align:left"><code>hidden</code></td><td style="text-align:left">Fires after an item is hidden.</td></tr><tr><td style="text-align:left"><code>stack</code></td><td style="text-align:left">Fires when the <code>drop-stack</code>class is applied.</td></tr></tbody></table>

### Methods

The following methods are available for the component:

#### Show

~~~js
UIkit.dropdown(element).show();
~~~

Shows the Dropdown.

#### Hide

~~~js
UIkit.dropdown(element).hide();
~~~

Hides the Dropdown.

## code:

~~~javascript
import Drop from './drop';

export default {

    extends: Drop

};

~~~

* * *

_package: [uikit](uikit.md)_ _source: [test](https://github.com/git+https://github.com/uikit/uikit.git/tree/master/undefined/./src/js/core/dropdown.js)_