# cover

# Cover

Expand images, videos or iframes to cover their entire container and place your own content on top.

## Usage

To have an image cover its parent element, add the `.uk-cover-container` class to the parent and the `uk-cover` attribute to the image.

~~~html
<div class="uk-cover-container">
    <img src="" alt="" uk-cover>
</div>
~~~

**Note** To position content on top of the covering element, use the [Position component](position.md). To adapt your content for better visibility, add the `.uk-light` or `.uk-dark` class from the [Inverse component](inverse.md).

<ExampleRunner id="runner-11a731df-f7a3-c2c6-9d6f-721185967888" resource="src.js.core.cover.js"/>

* * *

## Video

To create a video that covers its parent container, add the `uk-cover` attribute to a video. Wrap a container element around the video and add the `.uk-cover-container` class to clip the content.

The Cover component inherits all properties from the [Video component](utility.md#video) which means videos are muted and play automatically. The video will pause whenever it's not visible and resume once it becomes visible again.

~~~html
<div class="uk-cover-container">
    <video uk-cover></video>
</div>
~~~

<ExampleRunner id="runner-1eceabde-b9d8-609e-35fa-81f81a536932" resource="src.js.core.cover.js"/>

* * *

## Iframe

To apply the Cover component to an iframe, you need to add the `uk-cover` attribute to the iframe. Now add the `.uk-cover-container` class to a container element around the iframe to clip the content.

~~~html
<div class="uk-cover-container">
    <iframe src="" uk-cover></iframe>
</div>
~~~

<ExampleRunner id="runner-b2fa08c1-8c56-5c7d-336c-d19eba4db64a" resource="src.js.core.cover.js"/>

* * *

## Responsive height

To add responsive behavior to your cover image, you need to create an invisible `<canvas>` element and assign `width` and `height` values to it, according to the aspect ratio you want the covered area to have. That way it will adapt the responsive behavior of the image.

~~~html
<div class="uk-cover-container">
    <canvas width="" height=""></canvas>
    <img src="" alt="" uk-cover>
</div>
~~~

<ExampleRunner id="runner-2d08a058-c8fc-0acd-5bf1-aba9070f882e" resource="src.js.core.cover.js"/>

* * *

## Viewport height

Adding the `uk-height-viewport` attribute from the [Utility component](utility.md) will stretch the height of the parent element to fill the whole viewport.

~~~html
<div class="uk-cover-container" uk-height-viewport>
    <img src="" alt="" uk-cover>
</div>
~~~

* * *

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

<table><thead><tr><th style="text-align:left">Option</th><th style="text-align:left">Value</th><th style="text-align:left">Default</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>automute</code></td><td style="text-align:left">Boolean</td><td style="text-align:left">true</td><td style="text-align:left">Tries to automute the iframe's video.</td></tr><tr><td style="text-align:left"><code>width</code></td><td style="text-align:left">Number</td><td style="text-align:left">undefined</td><td style="text-align:left">The element's width.</td></tr><tr><td style="text-align:left"><code>height</code></td><td style="text-align:left">Number</td><td style="text-align:left">undefined</td><td style="text-align:left">The element's height.</td></tr></tbody></table>

* * *

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

~~~js
UIkit.cover(element, options);
~~~

## code:

~~~javascript
import Video from './video';
import Class from '../mixin/class';
import {css, Dimensions, isVisible} from 'uikit-util';

export default {

    mixins: [Class, Video],

    props: {
        width: Number,
        height: Number
    },

    data: {
        automute: true
    },

    update: {

        write() {

            const el = this.$el;

            if (!isVisible(el)) {
                return;
            }

            const {offsetHeight: height, offsetWidth: width} = el.parentNode;

            css(
                css(el, {width: '', height: ''}),
                Dimensions.cover(
                    {
                        width: this.width || el.clientWidth,
                        height: this.height || el.clientHeight
                    },
                    {
                        width: width + (width % 2 ? 1 : 0),
                        height: height + (height % 2 ? 1 : 0)
                    }
                )
            );

        },

        events: ['load', 'resize']

    },

    events: {

        loadedmetadata() {
            this.$emit();
        }

    }

};

~~~

* * *

_package: [uikit](uikit.md)_ _source: [test](https://github.com/git+https://github.com/uikit/uikit.git/tree/master/undefined/./src/js/core/cover.js)_