# accordion

# Accordion

Create a list of items that can be shown individually by clicking an item's header.

## Usage

The Accordion component consists of a parent container with the `uk-accordion` attribute, and a title and content part for each accordion item.

<table><thead><tr><th style="text-align:left">Class</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>.uk-accordion-title</code></td><td style="text-align:left">Defines and styles the toggle for each accordion item. Use <code>&lt;a&gt;</code> elements.</td></tr><tr><td style="text-align:left"><code>.uk-accordion-content</code></td><td style="text-align:left">Defines the content part for each accordion item.</td></tr></tbody></table>

~~~html
<ul uk-accordion>
    <li>
        <a class="uk-accordion-title" href="#"></a>
        <div class="uk-accordion-content"></div>
    </li>
</ul>
~~~

* * *

## No collapsing

By default, all accordion items can be collapsed. To prevent this behavior and always maintain one open item, add the `collapsible: false` option to the attribute.

~~~html
<ul uk-accordion="collapsible: false">...</ul>
~~~

* * *

## Multiple open items

To display multiple content sections at the same time without one collapsing when the other one is opened, add the `multiple: true` option to the `uk-accordion` attribute.

~~~html
<ul uk-accordion="multiple: true">...</ul>
~~~

* * *

## Set open items

To specify which items should be opened initially, add the `.uk-open` class to the item. You can also use this to open multiple items. Just make sure to add the option `multiple: true` to the `uk-accordion` attribute.

**Note** Alternatively, you can open a single item by adding the `active: <index>` option to the `uk-accordion` attribute, e.g. `active: 1` to show the second element (the index is zero-based). Note that this will overwrite the `uk-open` class.

~~~html
<ul uk-accordion>
    <li></li>
    <li class="uk-open"></li>
    <li></li>
</ul>
~~~

* * *

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

<table><thead><tr><th style="text-align:left">Option</th><th style="text-align:left">Value</th><th style="text-align:left">Default</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>active</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">Index of the element to open initially.</td></tr><tr><td style="text-align:left"><code>animation</code></td><td style="text-align:left">Boolean</td><td style="text-align:left"><code>true</code></td><td style="text-align:left">Reveal item directly or with a transition.</td></tr><tr><td style="text-align:left"><code>collapsible</code></td><td style="text-align:left">Boolean</td><td style="text-align:left"><code>true</code></td><td style="text-align:left">Allow all items to be closed.</td></tr><tr><td style="text-align:left"><code>content</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>&gt; .uk-accordion-content</code></td><td style="text-align:left">The content selector, which selects the accordion content elements.</td></tr><tr><td style="text-align:left"><code>duration</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>200</code></td><td style="text-align:left">Animation duration in milliseconds.</td></tr><tr><td style="text-align:left"><code>multiple</code></td><td style="text-align:left">Boolean</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">Allow multiple open items.</td></tr><tr><td style="text-align:left"><code>targets</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>&gt; *</code></td><td style="text-align:left">CSS selector of the element(s) to toggle.</td></tr><tr><td style="text-align:left"><code>toggle</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>&gt; .uk-accordion-title</code></td><td style="text-align:left">The toggle selector, which toggles accordion items.</td></tr><tr><td style="text-align:left"><code>transition</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>ease</code></td><td style="text-align:left">The transition to use when revealing items. Use keyword for <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function#Keywords_for_common_timing-functions">easing functions</a>.</td></tr></tbody></table>

* * *

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

~~~js
UIkit.accordion(element, options);
~~~

### Events

The following events will be triggered on elements with this component attached:

<table><thead><tr><th style="text-align:left">Name</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>beforeshow</code></td><td style="text-align:left">Fires before an item is shown. Can prevent showing by returning <code>false</code>.</td></tr><tr><td style="text-align:left"><code>show</code></td><td style="text-align:left">Fires after an item is shown.</td></tr><tr><td style="text-align:left"><code>shown</code></td><td style="text-align:left">Fires after the item's show animation has completed.</td></tr><tr><td style="text-align:left"><code>beforehide</code></td><td style="text-align:left">Fires before an item is hidden. Can prevent hiding by returning <code>false</code>.</td></tr><tr><td style="text-align:left"><code>hide</code></td><td style="text-align:left">Fires after an item's hide animation has started.</td></tr><tr><td style="text-align:left"><code>hidden</code></td><td style="text-align:left">Fires after an item is hidden.</td></tr></tbody></table>

### Methods

The following methods are available for the component:

#### Toggle

~~~js
UIkit.accordion(element).toggle(index, animate);
~~~

Toggles the content pane.

<table><thead><tr><th style="text-align:left">Name</th><th style="text-align:left">Type</th><th style="text-align:left">Default</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>index</code></td><td style="text-align:left">String, Integer, Node</td><td style="text-align:left">0</td><td style="text-align:left">Accordion pane to toggle. 0 based index.</td></tr><tr><td style="text-align:left"><code>animate</code></td><td style="text-align:left">Boolean</td><td style="text-align:left">true</td><td style="text-align:left">Suppress opening animation by passing false.</td></tr></tbody></table>

## code:

~~~javascript
import Class from '../mixin/class';
import Togglable from '../mixin/togglable';
import {$, $$, attr, filter, getIndex, hasClass, includes, index, toggleClass, unwrap, wrapAll} from 'uikit-util';

export default {

    mixins: [Class, Togglable],

    props: {
        targets: String,
        active: null,
        collapsible: Boolean,
        multiple: Boolean,
        toggle: String,
        content: String,
        transition: String
    },

    data: {
        targets: '> *',
        active: false,
        animation: [true],
        collapsible: true,
        multiple: false,
        clsOpen: 'uk-open',
        toggle: '> .uk-accordion-title',
        content: '> .uk-accordion-content',
        transition: 'ease'
    },

    computed: {

        items({targets}, $el) {
            return $$(targets, $el);
        }

    },

    events: [

        {

            name: 'click',

            delegate() {
                return `${this.targets} ${this.$props.toggle}`;
            },

            handler(e) {
                e.preventDefault();
                this.toggle(index($$(`${this.targets} ${this.$props.toggle}`, this.$el), e.current));
            }

        }

    ],

    connected() {

        if (this.active === false) {
            return;
        }

        const active = this.items[Number(this.active)];
        if (active && !hasClass(active, this.clsOpen)) {
            this.toggle(active, false);
        }
    },

    update() {

        this.items.forEach(el => this._toggleImmediate($(this.content, el), hasClass(el, this.clsOpen)));

        const active = !this.collapsible && !hasClass(this.items, this.clsOpen) && this.items[0];
        if (active) {
            this.toggle(active, false);
        }
    },

    methods: {

        toggle(item, animate) {

            const index = getIndex(item, this.items);
            const active = filter(this.items, `.${this.clsOpen}`);

            item = this.items[index];

            item && [item]
                .concat(!this.multiple && !includes(active, item) && active || [])
                .forEach(el => {

                    const isItem = el === item;
                    const state = isItem && !hasClass(el, this.clsOpen);

                    if (!state && isItem && !this.collapsible && active.length < 2) {
                        return;
                    }

                    toggleClass(el, this.clsOpen, state);

                    const content = el._wrapper ? el._wrapper.firstElementChild : $(this.content, el);

                    if (!el._wrapper) {
                        el._wrapper = wrapAll(content, '<div>');
                        attr(el._wrapper, 'hidden', state ? '' : null);
                    }

                    this._toggleImmediate(content, true);
                    this.toggleElement(el._wrapper, state, animate).then(() => {
                        if (hasClass(el, this.clsOpen) === state) {

                            if (!state) {
                                this._toggleImmediate(content, false);
                            }

                            el._wrapper = null;
                            unwrap(content);
                        }
                    });

                });
        }

    }

};

~~~

* * *

_package: [uikit](uikit.md)_ _source: [test](https://github.com/git+https://github.com/uikit/uikit.git/tree/master/undefined/./src/js/core/accordion.js)_