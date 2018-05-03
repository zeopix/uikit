# nav

# Nav

Defines different styles for list navigations.

## Usage

To apply this component, use the following classes.

<table><thead><tr><th style="text-align:left">Class</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>.uk-nav</code></td><td style="text-align:left">Add this class to a <code>&lt;ul&gt;</code> element to define the Nav component. Use <code>&lt;a&gt;</code> elements as nav items within the list.</td></tr><tr><td style="text-align:left"><code>.uk-active</code></td><td style="text-align:left">Add this class to a list item to apply an active state to a menu item.</td></tr></tbody></table>

~~~html
<ul class="uk-nav">
    <li class="uk-active"><a href=""></a></li>
    <li><a href=""></a></li>
</ul>
~~~

**Note** By default, the nav has no styling. That's why it is important to add a modifier class. In our example we are using the `.uk-nav-default` class.

* * *

## Nested navs

Add the `.uk-parent` class to an item to turn it into a parent. Add the `.uk-nav-sub` class to a `<ul>` element inside the item to create the subnav.

~~~html
<ul class="uk-nav">
    <li class="uk-parent">
        <a href=""></a>
        <ul class="uk-nav-sub">
            <li><a href=""></a></li>
            <li>
                <a href=""></a>
                <ul>...</ul>
            </li>
        </ul>
    </li>
</ul>
~~~

* * *

## Accordion

By default, child menu items are always visible. To apply an accordion effect, just add the `uk-nav` attribute to the main `<ul>`. Add the `.uk-nav-parent-icon` class to apply icons, indicating parent items.

**Note** The attribute automatically sets the `.uk-nav` class, so you don't have to apply it manually.

~~~html
<ul class="uk-nav-parent-icon" uk-nav>...</ul>
~~~

* * *

### Multiple open subnavs

When clicking on a parent item, an open one will close, allowing only one open nested list at a time. To allow multiple open subnavs, just add the `multiple: true` option to the attribute.

~~~html
<ul class="uk-nav-parent-icon" uk-nav="multiple: true">...</ul>
~~~

* * *

## Header & divider

Add one of the following classes to a list item to create a header or a divider between items.

<table><thead><tr><th style="text-align:left">Element</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>.uk-nav-header</code></td><td style="text-align:left">Add this class to a <code>&lt;li&gt;</code> element to create a header.</td></tr><tr><td style="text-align:left"><code>.uk-nav-divider</code></td><td style="text-align:left">Add this class to a <code>&lt;li&gt;</code> element to create a divider separating nav items.</td></tr></tbody></table>

~~~html
<li class="uk-nav-header"></li>

<li class="uk-nav-divider"></li>
~~~

* * *

## Default modifier

Add the `.uk-nav-default` class to give the nav its default style. You can place the nav inside cards or anywhere else in your content.

~~~html
<ul class="uk-nav uk-nav-default">...</ul>
~~~

* * *

## Primary modifier

Add the `.uk-nav-primary` class to give the nav a more distinct styling, for example when placing it inside a modal.

~~~html
<ul class="uk-nav uk-nav-primary">...</ul>
~~~

* * *

## Center modifier

Add the `.uk-nav-center` class to center nav items. This can be combined with the default and primary style modifiers.

~~~html
<ul class="uk-nav uk-nav-default uk-nav-center">...</ul>
~~~

* * *

## Nav in Dropdown

Add the `.uk-dropdown-nav` class to place a nav inside a default dropdown from the [Dropdown component](dropdown.md).

~~~html
<div uk-dropdown>
    <ul class="uk-nav uk-dropdown-nav">...</ul>
</div>
~~~

* * *

## Nav in Navbar

Add the `.uk-navbar-dropdown-nav` class to place the nav inside a navbar dropdown from the [Navbar component](navbar.md).

~~~html
<div class="uk-navbar-dropdown">
    <ul class="uk-nav uk-navbar-dropdown-nav">...</ul>
</div>
~~~

* * *

## Nav in Off-canvas

A nav can be used inside an off-canvas from the [Off-canvas component](offcanvas.md). No modifier class needs to be added.

* * *

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

<table><thead><tr><th style="text-align:left">Option</th><th style="text-align:left">Value</th><th style="text-align:left">Default</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>targets</code></td><td style="text-align:left">CSS selector</td><td style="text-align:left"><code>&gt; .uk-parent</code></td><td style="text-align:left">The element(s) to toggle.</td></tr><tr><td style="text-align:left"><code>toggle</code></td><td style="text-align:left">CSS selector</td><td style="text-align:left"><code>&gt; a</code></td><td style="text-align:left">The toggle element(s).</td></tr><tr><td style="text-align:left"><code>content</code></td><td style="text-align:left">CSS selector</td><td style="text-align:left"><code>&gt; ul</code></td><td style="text-align:left">The content element(s).</td></tr><tr><td style="text-align:left"><code>collapsible</code></td><td style="text-align:left">Boolean</td><td style="text-align:left"><code>true</code></td><td style="text-align:left">Allow all items to be closed.</td></tr><tr><td style="text-align:left"><code>multiple</code></td><td style="text-align:left">Boolean</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">Allow multiple open items.</td></tr><tr><td style="text-align:left"><code>transition</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>ease</code></td><td style="text-align:left">The transition to use.</td></tr><tr><td style="text-align:left"><code>animation</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>true</code></td><td style="text-align:left">The space separated names of animations to use. Comma separate for animation out.</td></tr><tr><td style="text-align:left"><code>duration</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>200</code></td><td style="text-align:left">The animation duration in milliseconds.</td></tr></tbody></table>

* * *

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

~~~js
UIkit.nav(element, options);
~~~

### Methods

The following methods are available for the component:

#### Toggle

~~~js
UIkit.nav(element).toggle(index, animate);
~~~

Toggles the content pane.

<table><thead><tr><th style="text-align:left">Name</th><th style="text-align:left">Type</th><th style="text-align:left">Default</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>index</code></td><td style="text-align:left">String, Integer, Node</td><td style="text-align:left">0</td><td style="text-align:left">Nav pane to toggle. 0 based index.</td></tr><tr><td style="text-align:left"><code>animate</code></td><td style="text-align:left">Boolean</td><td style="text-align:left">true</td><td style="text-align:left">Suppress opening animation by passing false.</td></tr></tbody></table>

## code:

~~~javascript
import Accordion from './accordion';

export default {

    extends: Accordion,

    data: {
        targets: '> .uk-parent',
        toggle: '> a',
        content: '> ul'
    }

};

~~~

* * *

_package: [uikit](uikit.md)_ _source: [test](https://github.com/git+https://github.com/uikit/uikit.git/tree/master/undefined/./src/js/core/nav.js)_