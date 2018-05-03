# grid

# Grid

Create a fully responsive, fluid and nestable grid layout.

The Grid system of UIkit allows you to arrange block elements in columns and works closely together with the [Width component](width.md) to determine how much space of the container each item will take up. It can also be combined with the [Flex component](flex.md) to align and order grid items.

* * *

## Usage

To create the grid container, add the `uk-grid` attribute to a `<div>` element. Add child `<div>` elements to create the cells. By default, all grid cells are stacked. To place them side by side, add one of the classes from the [Width component](width.md). Using `uk-child-width-expand` will automatically apply equal width to items, regardless of how many there are.

**Note** There's no need to add a `uk-grid` class, as it will get added via JavaScript. However, if UIkit's JavaScript is [deferred](https://developer.mozilla.org/de/docs/Web/HTML/Element/script#attr-defer), the class should be added to prevent stacking while loading.

~~~html
<div uk-grid>
    <div></div>
    <div></div>
</div>
~~~

**Note** Often cards from the [Card component](card.md) are used inside a grid. In the following examples too for visualization.

<ExampleRunner id="runner-55c154ca-fe15-0d46-c49a-0c298cad43f1" resource="src.js.core.grid.js"/>

* * *

## Gutter modifiers

The Grid component comes with a default gutter, that is decreased automatically from a certain breakpoint, usually on a smaller desktop viewport width. To apply a different gutter, add one of the following classes.

<table><thead><tr><th style="text-align:left">Class</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>.uk-grid-small</code></td><td style="text-align:left">Add this class to apply a small gutter.</td></tr><tr><td style="text-align:left"><code>.uk-grid-medium</code></td><td style="text-align:left">Add this class to apply a medium gutter like the default one, but without a breakpoint.</td></tr><tr><td style="text-align:left"><code>.uk-grid-large</code></td><td style="text-align:left">Add this class to apply a large gutter with breakpoints.</td></tr><tr><td style="text-align:left"><code>.uk-grid-collapse</code></td><td style="text-align:left">Add this class to remove the grid gutter entirely.</td></tr></tbody></table>

~~~html
<div class="uk-grid-small" uk-grid>...</div>
~~~

<ExampleRunner id="runner-378eb340-1dde-1471-4060-84182be835bd" resource="src.js.core.grid.js"/>

<ExampleRunner id="runner-80f29037-5d4f-ede6-268a-26be877e19eb" resource="src.js.core.grid.js"/>

<ExampleRunner id="runner-f3637067-d5ae-2e64-8e02-c2751b58be88" resource="src.js.core.grid.js"/>

<ExampleRunner id="runner-5e6ee2a9-9703-7e0b-e621-bdf802f6d6a9" resource="src.js.core.grid.js"/>

* * *

## Nested grid

You can easily extend your grid layout with nested grids.

~~~html
<div uk-grid>
    <div>
        <div uk-grid>
            <div></div>
            <div></div>
        </div>
    </div>
    <div>
        <div uk-grid>
            <div></div>
            <div></div>
        </div>
    </div>
</div>
~~~

<ExampleRunner id="runner-9ac72a3b-7ad5-a5c3-db7e-b3333b8e3c3e" resource="src.js.core.grid.js"/>

* * *

## Divider modifier

Add the `.uk-grid-divider` class to separate grid cells with lines. This class can be combined with the gutter modifiers. As soon as the grid stacks, the divider lines will become horizontal.

~~~html
<div class="uk-grid-divider" uk-grid>...</div>
~~~

<ExampleRunner id="runner-c090dcc0-ad6a-35d2-5047-c80b75b7194c" resource="src.js.core.grid.js"/>

* * *

## Match height

To match the height of the direct child of each cell, add the `.uk-grid-match` class. This is needed to match the height of cards from the [Card component](card.md).

~~~html
<div class="uk-grid-match" uk-grid>....</div>
~~~

<ExampleRunner id="runner-6da61383-a0f8-e982-602d-c5d7f7ab0ed9" resource="src.js.core.grid.js"/>

* * *

### Match only one cell

You can also match the height of the direct child of just one cell. To do so, add the `.uk-grid-item-match` class to the grid item whose child you want to match.

~~~html
<div uk-grid>
    <div class="uk-grid-item-match"></div>
    <div></div>
</div>
~~~

<ExampleRunner id="runner-529a6ceb-91d3-6d48-f194-fad9d4c8fa17" resource="src.js.core.grid.js"/>

* * *

### JavaScript

For a more specific selection of the elements whose heights should be matched, add the `target: SELECTOR` option to the `uk-height-match` attribute from the [Utility component](utility.md).

~~~html
<div uk-grid uk-height-match="target: > div > .uk-card">
    <div>
        <div class="uk-card uk-card-default"></div>
    </div>
    <div>
        <div class="uk-card uk-card-default"></div>
    </div>
</div>
~~~

<ExampleRunner id="runner-16249e00-02d5-e875-a495-c84c8b1e8c94" resource="src.js.core.grid.js"/>

* * *

## Grid and width

The grid is mostly used in combination with the [Width component](width.md). This allows for great flexibility when determining the column widths.

~~~html
<div uk-grid>
    <div class="uk-width-auto@m"></div>
    <div class="uk-width-1-3@m"></div>
    <div class="uk-width-expand@m"></div>
</div>
~~~

<ExampleRunner id="runner-4f3bf134-28fb-0583-c8f4-da16e2bdaff0" resource="src.js.core.grid.js"/>

* * *

### Child width

If the grid columns are evenly split, you can add one of the `.uk-child-width-*` classes to the grid container, instead of adding a class to each of the items.

~~~html
<div class="uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid>...</div>
~~~

<ExampleRunner id="runner-d0503865-ba56-d343-f9e7-c2b129f86d9f" resource="src.js.core.grid.js"/>

For more detailed information, take a look at the [Width component](width.md).

* * *

## Grid and flex

You can easily combine the grid with the [Flex component](flex.md). That way you can modify the items' alignment, ordering, direction and wrapping. This allows you, for example, to flip the cells' display order for wider viewports. All this works together with the gutter and divider modifiers.

~~~html
<div class="uk-flex-center" uk-grid>
    <div></div>
    <div class="uk-flex-first"></div>
</div>
~~~

<ExampleRunner id="runner-3118258f-51de-8446-1d0d-fc424522681b" resource="src.js.core.grid.js"/>

* * *

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

<table><thead><tr><th style="text-align:left">Option</th><th style="text-align:left">Value</th><th style="text-align:left">Default</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>margin</code></td><td style="text-align:left">String</td><td style="text-align:left">uk-grid-margin</td><td style="text-align:left">This class is added to items that break into the next row, typically to create margin to the previous row.</td></tr><tr><td style="text-align:left"><code>first-column</code></td><td style="text-align:left">String</td><td style="text-align:left">uk-first-column</td><td style="text-align:left">This class is added to the first element in each row.</td></tr></tbody></table>

* * *

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

~~~js
UIkit.grid(element, options);
~~~

## code:

~~~javascript
import Margin from './margin';
import Class from '../mixin/class';
import {addClass, css, hasClass, height as getHeight, scrolledOver, toFloat, toggleClass, toNodes, sortBy} from 'uikit-util';

export default {

    extends: Margin,

    mixins: [Class],

    attrs: true,

    name: 'grid',

    props: {
        masonry: Boolean,
        parallax: Number
    },

    data: {
        margin: 'uk-grid-margin',
        clsStack: 'uk-grid-stack',
        masonry: false,
        parallax: 0
    },

    computed: {

        parallax({parallax}) {
            return Math.abs(parallax);
        }

    },

    connected() {
        this.masonry && addClass(this.$el, 'uk-flex-top uk-flex-wrap-top');
    },

    update: [

        {

            read({rows}) {

                if (this.masonry || this.parallax) {
                    rows = rows.map(elements => sortBy(elements, 'offsetLeft'));
                }

                let translates = false;
                let elHeight = false;

                if (this.masonry) {

                    let height = 0;

                    translates = rows.reduce((translates, row, i) => {

                        translates[i] = row.map((_, j) => i === 0 ? 0 : toFloat(translates[i - 1][j]) + (height - toFloat(rows[i - 1][j] && rows[i - 1][j].offsetHeight)));
                        height = row.reduce((height, el) => Math.max(height, el.offsetHeight), 0);

                        return translates;

                    }, []);

                    elHeight = maxColumnHeight(rows) + getMarginTop(this.$el, this.margin) * (rows.length - 1);

                }

                return {rows, translates, height: elHeight};

            },

            write({rows, stacks, height}) {

                toggleClass(this.$el, this.clsStack, stacks);

                css(this.$el, 'paddingBottom', this.parallax && rows.some(row => row.length > 1) ? this.parallax : '');

                height && css(this.$el, 'height', height);

            },

            events: ['load', 'resize']

        },

        {

            read({rows, height}) {
                return {
                    scrolled: this.parallax && rows.some(row => row.length > 1)
                        ? scrolledOver(this.$el, height ? height - getHeight(this.$el) : 0) * this.parallax
                        : false
                };
            },

            write({rows, scrolled, translates}) {

                if (scrolled === false && !translates) {
                    return;
                }

                rows.forEach((row, i) =>
                    row.forEach((el, j) =>
                        css(el, 'transform', !scrolled && !translates ? '' : `translateY(${
                            (translates && -translates[i][j]) + (scrolled ? j % 2 ? scrolled : scrolled / 8 : 0)
                        }px)`)
                    )
                );

            },

            events: ['scroll', 'load', 'resize']

        }

    ]

};

function getMarginTop(root, cls) {

    const nodes = toNodes(root.children);
    const [node] = nodes.filter(el => hasClass(el, cls));

    return toFloat(node
        ? css(node, 'marginTop')
        : css(nodes[0], 'paddingLeft'));
}

function maxColumnHeight(rows) {
    return Math.max(...rows.reduce((sum, row) => {
        row.forEach((el, i) => sum[i] = (sum[i] || 0) + el.offsetHeight);
        return sum;
    }, []));
}

~~~

* * *

_package: [uikit](uikit.md)_ _source: [test](https://github.com/git+https://github.com/uikit/uikit.git/tree/master/undefined/./src/js/core/grid.js)_