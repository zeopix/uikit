# leader

## code:

~~~javascript
import Class from '../mixin/class';
import {attr, getCssVar, toggleClass, unwrap, wrapInner} from 'uikit-util';

export default {

    mixins: [Class],

    props: {
        fill: String,
        media: 'media'
    },

    data: {
        fill: '',
        media: false,
        clsWrapper: 'uk-leader-fill',
        clsHide: 'uk-leader-hide',
        attrFill: 'data-fill'
    },

    computed: {

        fill({fill}) {
            return fill || getCssVar('leader-fill');
        }

    },

    connected() {
        [this.wrapper] = wrapInner(this.$el, `<span class="${this.clsWrapper}">`);
    },

    disconnected() {
        unwrap(this.wrapper.childNodes);
    },

    update: [

        {

            read({changed, width}) {

                const prev = width;

                width = Math.floor(this.$el.offsetWidth / 2);

                return {
                    width,
                    changed: changed || prev !== width,
                    hide: this.media && !window.matchMedia(this.media).matches
                };
            },

            write(data) {

                toggleClass(this.wrapper, this.clsHide, data.hide);

                if (data.changed) {
                    data.changed = false;
                    attr(this.wrapper, this.attrFill, new Array(data.width).join(this.fill));
                }

            },

            events: ['load', 'resize']

        }
    ]

};

~~~

* * *

_package: [uikit](uikit.md)_ _source: [test](https://github.com/git+https://github.com/uikit/uikit.git/tree/master/undefined/./src/js/core/leader.js)_