# scroll

# Scroll

Scroll smoothly when jumping to different sections on a page.

## Usage

Simply add the `uk-scroll` attribute to any page-internal link that contains a URL fragment to add the smooth scrolling behavior.

~~~html
<a href="#my-id" uk-scroll></a>
~~~

<ExampleRunner id="runner-e2109fdd-fa07-0813-aa1f-4ed9aba56a1e" resource="src.js.core.scroll.js"/>

* * *

## Callback after scroll

To receive a callback when scrolling has completed, you can listen to the `scrolled` event on the link element that triggered the scrolling.

~~~html
<a id="js-scroll-trigger" href="#my-id" uk-scroll></a>
~~~

~~~js
UIkit.util.on('#scroll-trigger', 'scrolled', function () {
    alert('Done.');
});
~~~

<ExampleRunner id="runner-2a26b499-728b-6276-4b63-b1f2f1fdd105" resource="src.js.core.scroll.js"/>

* * *

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

<table><thead><tr><th style="text-align:left">Option</th><th style="text-align:left">Value</th><th style="text-align:left">Default</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>duration</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>1000</code></td><td style="text-align:left">Animation duration in milliseconds.</td></tr><tr><td style="text-align:left"><code>offset</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>0</code></td><td style="text-align:left">Pixel offset added to scroll top.</td></tr></tbody></table>

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

~~~js
UIkit.scroll(element, options);
~~~

[Scroll up](#top)

### Events

The following events will be triggered on elements with this component attached:

<table><thead><tr><th style="text-align:left">Name</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>beforescroll</code></td><td style="text-align:left">Fires before scroll begins. Can prevent scrolling by returning <code>false</code>.</td></tr><tr><td style="text-align:left"><code>scrolled</code></td><td style="text-align:left">Fires after scrolling is finished.</td></tr></tbody></table>

### Methods

The following methods are available for the component:

#### ScrollTo

~~~js
UIkit.scroll(element).scrollTo(el);
~~~

Scroll to the given element.

<table><thead><tr><th style="text-align:left">Name</th><th style="text-align:left">Type</th><th style="text-align:left">Default</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>el</code></td><td style="text-align:left">Node, Selector</td><td style="text-align:left">undefined</td><td style="text-align:left">The element to scroll to.</td></tr></tbody></table>

## code:

~~~javascript
import {$, clamp, escape, height, offset, trigger} from 'uikit-util';

export default {

    props: {
        duration: Number,
        offset: Number
    },

    data: {
        duration: 1000,
        offset: 0
    },

    methods: {

        scrollTo(el) {

            el = el && $(el) || document.body;

            const docHeight = height(document);
            const winHeight = height(window);

            let target = offset(el).top - this.offset;
            if (target + winHeight > docHeight) {
                target = docHeight - winHeight;
            }

            if (!trigger(this.$el, 'beforescroll', [this, el])) {
                return;
            }

            const start = Date.now();
            const startY = window.scrollY;
            const step = () => {

                const currentY = startY + (target - startY) * ease(clamp((Date.now() - start) / this.duration));

                window.scroll(window.scrollX, currentY);

                // scroll more if we have not reached our destination
                if (currentY !== target) {
                    requestAnimationFrame(step);
                } else {
                    trigger(this.$el, 'scrolled', [this, el]);
                }

            };

            step();

        }

    },

    events: {

        click(e) {

            if (e.defaultPrevented) {
                return;
            }

            e.preventDefault();
            this.scrollTo(escape(this.$el.hash).substr(1));
        }

    }

};

function ease(k) {
    return 0.5 * (1 - Math.cos(Math.PI * k));
}

~~~

* * *

_package: [uikit](uikit.md)_ _source: [test](https://github.com/git+https://github.com/uikit/uikit.git/tree/master/undefined/./src/js/core/scroll.js)_