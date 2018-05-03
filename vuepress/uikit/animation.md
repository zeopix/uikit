# animation

# Animation

A collection of smooth animations to use within your page.

## Usage

Add one of the `.uk-animation-*` classes to any element. The animation is shown when the class is added, so usually immediately on page load. To show the animation at another point, for example when the element enters the viewport, you would add the class using JavaScript — with the [Scrollspy component](scrollspy.md) for instance. This is what happens in many of UIkit's components that make use of animations. All animations themselves are implemented with CSS, so they do not require JavaScript to play.

<table><thead><tr><th style="text-align:left">Class</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>.uk-animation-fade</code></td><td style="text-align:left">The element fades in.</td></tr><tr><td style="text-align:left"><code>.uk-animation-scale-up</code><br><code>.uk-animation-scale-down</code></td><td style="text-align:left">The element fades in and scales up or down.</td></tr><tr><td style="text-align:left"><code>.uk-animation-slide-top</code><br><code>.uk-animation-slide-bottom</code> <code>.uk-animation-slide-left</code><br><code>.uk-animation-slide-right</code></td><td style="text-align:left">The element fades and slides in from the top, bottom, left or right by its own height or width.</td></tr><tr><td style="text-align:left"><code>.uk-animation-slide-top-small</code><br><code>.uk-animation-slide-bottom-small</code> <code>.uk-animation-slide-left-small</code><br><code>.uk-animation-slide-right-small</code></td><td style="text-align:left">The element fades and slides in from the top, bottom, left or right with a smaller distance which is specified by a fixed pixel value.</td></tr><tr><td style="text-align:left"><code>.uk-animation-slide-top-medium</code><br><code>.uk-animation-slide-bottom-medium</code> <code>.uk-animation-slide-left-medium</code><br><code>.uk-animation-slide-right-medium</code></td><td style="text-align:left">The element fades and slides in from the top, bottom, left or right with a medium distance which is specified by a fixed pixel value.</td></tr><tr><td style="text-align:left"><code>.uk-animation-kenburns</code></td><td style="text-align:left">The element scales very slowly up without fading in.</td></tr><tr><td style="text-align:left"><code>.uk-animation-shake</code></td><td style="text-align:left">The element shakes.</td></tr></tbody></table>

~~~html
<div class="uk-animation-toggle">
    <div class="uk-animation-fade"></div>
</div>
~~~

To apply the hover effect, add the `.uk-animation-toggle` class on a parent element. This will trigger the animation when the element is hovered.

* * *

## Reverse modifier

By default, all animations are incoming. To reverse any animation, add the `.uk-animation-reverse` class.

~~~html
<div class="uk-animation-fade uk-animation-reverse"></div>
~~~

* * *

## Fast modifier

To play animations at a faster speed, add the `.uk-animation-fast` class to the element.

~~~html
<div class="uk-animation-fade uk-animation-fast"></div>
~~~

* * *

## Origin modifiers

By default, scaling animations originate from the center. To modify this behavior, add one of the `.uk-transform-origin-*` classes from the [Utility component](utility.md#transform-origin).

~~~html
<div class="uk-animation-scale-up uk-transform-origin-bottom-right"></div>
~~~

* * *

## Ken Burns

To add a simple Ken Burns effect, add the `.uk-animation-kenburns` class to any image. You can also apply the `.uk-animation-reverse` or one of the `.uk-transform-origin-*` classes from the [Utility component](utility.md#transform-origin) to modify the effect.

~~~html
<img class="uk-animation-kenburns" src="" alt="">
~~~

By default the animation starts on page load. In this example we used the [Scrollspy](scrollspy.md) component, to toggle the effect when the image enters the view.

## code:

~~~javascript
import {attr} from './attr';
import {Promise} from './promise';
import {once, trigger} from './event';
import {css, propName} from './style';
import {assign, startsWith, toNodes} from './lang';
import {addClass, hasClass, removeClass, removeClasses} from './class';

export function transition(element, props, duration = 400, timing = 'linear') {

    return Promise.all(toNodes(element).map(element =>
        new Promise((resolve, reject) => {

            for (const name in props) {
                const value = css(element, name);
                if (value === '') {
                    css(element, name, value);
                }
            }

            const timer = setTimeout(() => trigger(element, 'transitionend'), duration);

            once(element, 'transitionend transitioncanceled', ({type}) => {
                clearTimeout(timer);
                removeClass(element, 'uk-transition');
                css(element, {
                    'transition-property': '',
                    'transition-duration': '',
                    'transition-timing-function': ''
                });
                type === 'transitioncanceled' ? reject() : resolve();
            }, false, ({target}) => element === target);

            addClass(element, 'uk-transition');
            css(element, assign({
                'transition-property': Object.keys(props).map(propName).join(','),
                'transition-duration': `${duration}ms`,
                'transition-timing-function': timing
            }, props));

        })
    ));

}

export const Transition = {

    start: transition,

    stop(element) {
        trigger(element, 'transitionend');
        return Promise.resolve();
    },

    cancel(element) {
        trigger(element, 'transitioncanceled');
    },

    inProgress(element) {
        return hasClass(element, 'uk-transition');
    }

};

const animationPrefix = 'uk-animation-';
const clsCancelAnimation = 'uk-cancel-animation';

export function animate(element, animation, duration = 200, origin, out) {

    return Promise.all(toNodes(element).map(element =>
        new Promise((resolve, reject) => {

            if (hasClass(element, clsCancelAnimation)) {
                requestAnimationFrame(() =>
                    Promise.resolve().then(() =>
                        animate(...arguments).then(resolve, reject)
                    )
                );
                return;
            }

            let cls = `${animation} ${animationPrefix}${out ? 'leave' : 'enter'}`;

            if (startsWith(animation, animationPrefix)) {

                if (origin) {
                    cls += ` uk-transform-origin-${origin}`;
                }

                if (out) {
                    cls += ` ${animationPrefix}reverse`;
                }

            }

            reset();

            once(element, 'animationend animationcancel', ({type}) => {

                let hasReset = false;

                if (type === 'animationcancel') {
                    reject();
                    reset();
                } else {
                    resolve();
                    Promise.resolve().then(() => {
                        hasReset = true;
                        reset();
                    });
                }

                requestAnimationFrame(() => {
                    if (!hasReset) {
                        addClass(element, clsCancelAnimation);

                        requestAnimationFrame(() => removeClass(element, clsCancelAnimation));
                    }
                });

            }, false, ({target}) => element === target);

            css(element, 'animationDuration', `${duration}ms`);
            addClass(element, cls);

            function reset() {
                css(element, 'animationDuration', '');
                removeClasses(element, `${animationPrefix}\\S*`);
            }

        })
    ));

}

const inProgress = new RegExp(`${animationPrefix}(enter|leave)`);
export const Animation = {

    in(element, animation, duration, origin) {
        return animate(element, animation, duration, origin, false);
    },

    out(element, animation, duration, origin) {
        return animate(element, animation, duration, origin, true);
    },

    inProgress(element) {
        return inProgress.test(attr(element, 'class'));
    },

    cancel(element) {
        trigger(element, 'animationcancel');
    }

};

~~~

* * *

_package: [uikit](uikit.md)_ _source: [test](https://github.com/git+https://github.com/uikit/uikit.git/tree/master/undefined/./src/js/util/animation.js)_