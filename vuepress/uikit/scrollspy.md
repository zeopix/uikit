# scrollspy

# Scrollspy

Trigger events and animations while scrolling your page.

## Usage

The Scrollspy component listens to page scrolling and triggers events based on the scroll position. For example, if you scroll down a page and an element appears in the viewport for the first time, you can trigger a smooth animation to fade in the element. Just add the `uk-scrollspy` attribute which takes the following options.

Typically, classes from the [Animation component](animation.md) are used together with the Scrollspy component.

~~~html
<div uk-scrollspy="cls:uk-animation-fade"></div>
~~~

This example uses the `repeat: true` option. Scroll up and down to see the triggered animations. The layout is made with the [Card component](card.md).

* * *

## Groups

You can also group scrollspy elements, so you won't have to apply the attribute to each of them. Just add the `uk-scrollspy="target:MY-CLASS"` attribute to a container element, targeting the selector of the items you want to animate inside the container. When using a delay, it will be applied cumulatively to the items within the row that scrolls into view. The delay will be reseted for the next row within the group when it scrolls into view.

~~~html
<div uk-scrollspy="target: > div; cls:uk-animation-fade; delay: 500">
    <div></div>
    <div></div>
</div>
~~~

* * *

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

<table><thead><tr><th style="text-align:left">Option</th><th style="text-align:left">Value</th><th style="text-align:left">Default</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>cls</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>uk-scrollspy-inview</code></td><td style="text-align:left">Class to add when the element is in view. If two, comma separated classes are provided those will be toggled.</td></tr><tr><td style="text-align:left"><code>hidden</code></td><td style="text-align:left">Boolean</td><td style="text-align:left"><code>true</code></td><td style="text-align:left">Hides the element while out of view.</td></tr><tr><td style="text-align:left"><code>offset-top</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>0</code></td><td style="text-align:left">Top offset before triggering in view.</td></tr><tr><td style="text-align:left"><code>offset-left</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>0</code></td><td style="text-align:left">Left offset before triggering in view.</td></tr><tr><td style="text-align:left"><code>repeat</code></td><td style="text-align:left">Boolean</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">Applies the <code>cls</code> class every time the element is in view.</td></tr><tr><td style="text-align:left"><code>delay</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>0</code></td><td style="text-align:left">Delay time in ms.</td></tr></tbody></table>

`cls` is the _Primary_ option and its key may be omitted, if it's the only option in the attribute value.

~~~html
<span uk-scrollspy="my-class"></span>
~~~

* * *

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

~~~js
UIkit.scrollspy(element, options);
~~~

### Events

The following events will be triggered on elements with this component attached:

<table><thead><tr><th style="text-align:left">Name</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>inview</code></td><td style="text-align:left">Fires after an item moves into the viewport.</td></tr><tr><td style="text-align:left"><code>outview</code></td><td style="text-align:left">Fires after an item moves into out of viewport.</td></tr></tbody></table>

* * *

## Scrollspy nav

To automatically update the active menu item depending on the scroll position of your site, add the `uk-scrollspy-nav` attribute to any navigation. Each menu item must link to the ID of its corresponding part of the site.

~~~html
<ul class="uk-nav uk-nav-default" uk-scrollspy-nav="closest: li; scroll: true">
    <li><a href=""></a></li>
    <li><a href=""></a></li>
</ul>
~~~

For an example of the scrollspy nav, just check out the fixed nav on the right side of this page or take a look at the test. Any of the following options can be applied to the `uk-scrollspy-nav` attribute. Separate multiple options with a semicolon.

* * *

### Scrollspy nav options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

<table><thead><tr><th style="text-align:left">Option</th><th style="text-align:left">Value</th><th style="text-align:left">Default</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>cls</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>uk-active</code></td><td style="text-align:left">Class to add to the active links.</td></tr><tr><td style="text-align:left"><code>closest</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>uk-scrollspy-init-inview</code></td><td style="text-align:left">Target to apply the class to.</td></tr><tr><td style="text-align:left"><code>scroll</code></td><td style="text-align:left">Boolean</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">Adds the <a href="scroll.html">Scroll component</a> to its links.</td></tr><tr><td style="text-align:left"><code>overflow</code></td><td style="text-align:left">Boolean</td><td style="text-align:left"><code>true</code></td><td style="text-align:left">If overflow is set to true, the first or last item will stay active if above or below the navigation.</td></tr><tr><td style="text-align:left"><code>offset</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>0</code></td><td style="text-align:left">Pixel offset added to scroll top.</td></tr></tbody></table>

* * *

### Scrollspy nav JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Scrollspy nav initialization

~~~js
UIkit.scrollspyNav(element, options);
~~~

### Scrollspy nav events

The following events will be triggered on elements with this component attached:

<table><thead><tr><th style="text-align:left">Name</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>active</code></td><td style="text-align:left">Fires after an item becomes active.</td></tr></tbody></table>

## code:

~~~javascript
import {$$, addClass, css, data, filter, isInView, removeClass, toggleClass, trigger} from 'uikit-util';

export default {

    args: 'cls',

    props: {
        cls: 'list',
        target: String,
        hidden: Boolean,
        offsetTop: Number,
        offsetLeft: Number,
        repeat: Boolean,
        delay: Number
    },

    data: () => ({
        cls: [],
        target: false,
        hidden: true,
        offsetTop: 0,
        offsetLeft: 0,
        repeat: false,
        delay: 0,
        inViewClass: 'uk-scrollspy-inview'
    }),

    computed: {

        elements({target}, $el) {
            return target ? $$(target, $el) : [$el];
        }

    },

    update: [

        {

            write() {
                if (this.hidden) {
                    css(filter(this.elements, `:not(.${this.inViewClass})`), 'visibility', 'hidden');
                }
            }

        },

        {

            read(els) {

                // Let child components be applied at least once first
                if ((els.delay = !els.delay)) {
                    this.$emit();
                    return;
                }

                this.elements.forEach((el, i) => {

                    let elData = els[i];

                    if (!elData || elData.el !== el) {
                        const cls = data(el, 'uk-scrollspy-class');
                        elData = {el, toggles: cls && cls.split(',') || this.cls};
                    }

                    elData.show = isInView(el, this.offsetTop, this.offsetLeft);
                    els[i] = elData;

                });
            },

            write(els) {

                let index = this.elements.length === 1 ? 1 : 0;

                this.elements.forEach((el, i) => {

                    const elData = els[i];
                    const cls = elData.toggles[i] || elData.toggles[0];

                    if (elData.show && !elData.inview && !elData.timer) {

                        const show = () => {
                            css(el, 'visibility', '');
                            addClass(el, this.inViewClass);
                            toggleClass(el, cls);

                            trigger(el, 'inview');

                            this.$update(el);

                            elData.inview = true;
                            delete elData.timer;
                        };

                        if (this.delay && index) {
                            elData.timer = setTimeout(show, this.delay * index);
                        } else {
                            show();
                        }

                        index++;

                    } else if (!elData.show && elData.inview && this.repeat) {

                        if (elData.timer) {
                            clearTimeout(elData.timer);
                            delete elData.timer;
                        }

                        css(el, 'visibility', this.hidden ? 'hidden' : '');
                        removeClass(el, this.inViewClass);
                        toggleClass(el, cls);

                        trigger(el, 'outview');

                        this.$update(el);

                        elData.inview = false;

                    }


                });

            },

            events: ['scroll', 'load', 'resize']

        }

    ]

};

~~~

* * *

_package: [uikit](uikit.md)_ _source: [test](https://github.com/git+https://github.com/uikit/uikit.git/tree/master/undefined/./src/js/core/scrollspy.js)_