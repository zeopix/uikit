# icon

# Icon

Place scalable vector icons anywhere in your content.

UIkit comes with its own SVG icon system and a comprehensive library, which comprises a growing number of elegant outline icons. This component injects SVGs into the site, so that they adopt color and can be styled with CSS.

* * *

## Usage

Make sure to include the icon library script, for more details see the [installation instructions](installation.md).

~~~html
<script src="uikit/dist/js/uikit-icons.min.js"></script>
~~~

To apply this component, add the `uk-icon` attribute to a `<span>` or `<a>` element. To display the actual icon, you need to append the `icon: NAME` parameter to the attribute. Et voilà, you have a vector icon which inherits color just like your text does.

~~~html
<span uk-icon="icon: check"></span>

<a href="" uk-icon="icon: heart"></a>
~~~

If `icon` is the only option in the attribute value, you can also use `uk-icon="NAME"`

~~~html
<span uk-icon="heart"></span>
~~~

<ExampleRunner id="runner-f6356c71-8810-645a-57fa-ef16a7f3a5cb" resource="src.js.core.icon.js"/>

* * *

## Library

Here is an overview of all currently available icons. Over time, we will keep adding new icons to the list.

#### App

*   home
*   sign-in
*   sign-out
*   user
*   users
*   lock
*   unlock
*   settings
*   cog
*   nut
*   comment
*   commenting
*   comments
*   hashtag
*   tag
*   cart
*   credit-card
*   mail
*   receiver
*   search
*   location
*   bookmark

*   code
*   paint-bucket
*   camera
*   bell
*   bolt
*   star
*   heart
*   happy
*   lifesaver
*   rss
*   social
*   git-branch
*   git-fork
*   world
*   calendar
*   clock
*   history
*   future
*   pencil
*   trash
*   move
*   link

*   question
*   info
*   warning
*   image
*   thumbnails
*   table
*   list
*   menu
*   grid
*   more
*   more-vertical
*   plus
*   plus-circle
*   minus
*   minus-circle
*   close
*   check
*   ban
*   refresh
*   play
*   play-circle

#### Devices

*   tv
*   desktop
*   laptop

*   tablet
*   phone

*   tablet-landscape
*   phone-landscape

#### Storage

*   file
*   copy
*   file-edit
*   folder
*   album

*   push
*   pull
*   server
*   database

*   cloud-upload
*   cloud-download
*   download
*   upload

#### Direction

*   reply
*   forward
*   expand
*   shrink
*   arrow-up
*   arrow-down

*   arrow-left
*   arrow-right
*   chevron-up
*   chevron-down
*   chevron-left

*   chevron-right
*   triangle-up
*   triangle-down
*   triangle-left
*   triangle-right

#### Editor

*   bold
*   italic

*   strikethrough
*   video-camera

*   quote-right

#### Brands

*   500px
*   behance
*   dribbble
*   facebook
*   flickr
*   foursquare
*   github
*   github-alt
*   gitter

*   google
*   google-plus
*   instagram
*   joomla
*   linkedin
*   pagekit
*   pinterest
*   soundcloud
*   tripadvisor

*   tumblr
*   twitter
*   uikit
*   vimeo
*   whatsapp
*   wordpress
*   xing
*   yelp
*   youtube

* * *

## Ratio

Add the `ratio: 2` parameter to the `uk-icon` attribute to double its size – or any other number, depending on how big you want you icon to be.

~~~html
<span uk-icon="icon: check; ratio: 2"></span>
~~~

<ExampleRunner id="runner-f6ad95b8-93e6-35ff-3eeb-2ecaef9c5b10" resource="src.js.core.icon.js"/>

* * *

## Link modifier

To reset the default link styling to a more muted color when using an icon inside an anchor, add the `.uk-icon-link` class.

~~~html
<a href="" class="uk-icon-link" uk-icon="heart"></a>
~~~

<ExampleRunner id="runner-8c336d6c-9359-cddd-f395-d2170151b25b" resource="src.js.core.icon.js"/>

* * *

## Button modifier

Use the modifier `.uk-icon-button` class on an `<a>` element to create an icon button, which can be used for social icons.

~~~html
<a href="" class="uk-icon-button" uk-icon="twitter"></a>
~~~

<ExampleRunner id="runner-d6d46230-b015-5964-53eb-ea159b4f8a62" resource="src.js.core.icon.js"/>

* * *

## Image modifier

You can also make any background image scale to the size of an icon. Just add the `.uk-icon-image` class and a background image path.

<ExampleRunner id="runner-38e9eb8f-7b78-0266-9b2d-f1a64e6058f0" resource="src.js.core.icon.js"/>

* * *

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

<table><thead><tr><th style="text-align:left">Option</th><th style="text-align:left">Value</th><th style="text-align:left">Default</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>icon</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>''</code></td><td style="text-align:left">The icon to display.</td></tr><tr><td style="text-align:left"><code>ratio</code></td><td style="text-align:left">Number</td><td style="text-align:left"><code>1</code></td><td style="text-align:left">The icon size ratio.</td></tr></tbody></table>

`icon` is the _Primary_ option and its key may be omitted, if it's the only option in the attribute value.

~~~html
<span uk-icon="heart"></span>
~~~

* * *

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

~~~js
UIkit.icon(element, options);
~~~

### Properties

#### svg

A JavaScript Promise that will resolve with the added SVG Node.

~~~js
UIkit.icon(element).svg.then(function(svg) { svg.querySelector('path').style.stroke = 'red'; })
~~~

## code:

~~~javascript
import SVG from './svg';
import Class from '../mixin/class';
import closeIcon from '../../images/components/close-icon.svg';
import closeLarge from '../../images/components/close-large.svg';
import marker from '../../images/components/marker.svg';
import navbarToggleIcon from '../../images/components/navbar-toggle-icon.svg';
import overlayIcon from '../../images/components/overlay-icon.svg';
import paginationNext from '../../images/components/pagination-next.svg';
import paginationPrevious from '../../images/components/pagination-previous.svg';
import searchIcon from '../../images/components/search-icon.svg';
import searchLarge from '../../images/components/search-large.svg';
import searchNavbar from '../../images/components/search-navbar.svg';
import slidenavNext from '../../images/components/slidenav-next.svg';
import slidenavNextLarge from '../../images/components/slidenav-next-large.svg';
import slidenavPrevious from '../../images/components/slidenav-previous.svg';
import slidenavPreviousLarge from '../../images/components/slidenav-previous-large.svg';
import spinner from '../../images/components/spinner.svg';
import totop from '../../images/components/totop.svg';
import {$, addClass, apply, css, hasClass, hyphenate, isRtl, noop, parents, Promise, swap} from 'uikit-util';

const parsed = {};
const icons = {
    spinner,
    totop,
    marker,
    'close-icon': closeIcon,
    'close-large': closeLarge,
    'navbar-toggle-icon': navbarToggleIcon,
    'overlay-icon': overlayIcon,
    'pagination-next': paginationNext,
    'pagination-previous': paginationPrevious,
    'search-icon': searchIcon,
    'search-large': searchLarge,
    'search-navbar': searchNavbar,
    'slidenav-next': slidenavNext,
    'slidenav-next-large': slidenavNextLarge,
    'slidenav-previous': slidenavPrevious,
    'slidenav-previous-large': slidenavPreviousLarge
};

const Icon = {

    install,

    attrs: ['icon', 'ratio'],

    mixins: [Class, SVG],

    name: 'icon',

    args: 'icon',

    props: ['icon'],

    data: {exclude: ['id', 'style', 'class', 'src', 'icon', 'ratio']},

    connected() {
        addClass(this.$el, 'uk-icon');
    },

    methods: {

        getSvg() {

            const icon = getIcon(applyRtl(this.icon));

            if (!icon) {
                return Promise.reject('Icon not found.');
            }

            return Promise.resolve(icon);
        }

    }

};

export default Icon;

export const IconComponent = {

    extends: Icon,

    data: vm => ({
        icon: hyphenate(vm.constructor.options.name)
    })

};

export const Slidenav = {

    extends: IconComponent,

    connected() {
        addClass(this.$el, 'uk-slidenav');
    },

    computed: {

        icon({icon}, $el) {
            return hasClass($el, 'uk-slidenav-large')
                ? `${icon}-large`
                : icon;
        }

    }

};

export const Search = {

    extends: IconComponent,

    computed: {

        icon({icon}, $el) {
            return hasClass($el, 'uk-search-icon') && parents($el, '.uk-search-large').length
                ? 'search-large'
                : parents($el, '.uk-search-navbar').length
                    ? 'search-navbar'
                    : icon;
        }

    }

};

export const Close = {

    extends: IconComponent,

    connected() {
        this.icon = `close-${hasClass(this.$el, 'uk-close-large') ? 'large' : 'icon'}`;
    }

};

export const Spinner = {

    extends: IconComponent,

    connected() {
        this.svg.then(svg => this.ratio !== 1 && css($('circle', svg), 'strokeWidth', 1 / this.ratio), noop);
    }

};

function install(UIkit) {
    UIkit.icon.add = added => {
        Object.keys(added).forEach(name => {
            icons[name] = added[name];
            delete parsed[name];
        });

        if (UIkit._initialized) {
            apply(document.body, el => {
                const icon = UIkit.getComponent(el, 'icon');
                if (icon) {
                    icon.$reset();
                }
            });
        }
    };
}

function getIcon(icon) {

    if (!icons[icon]) {
        return null;
    }

    if (!parsed[icon]) {
        parsed[icon] = $(icons[icon].trim());
    }

    return parsed[icon];
}

function applyRtl(icon) {
    return isRtl ? swap(swap(icon, 'left', 'right'), 'previous', 'next') : icon;
}

~~~

* * *

_package: [uikit](uikit.md)_ _source: [test](https://github.com/git+https://github.com/uikit/uikit.git/tree/master/undefined/./src/js/core/icon.js)_