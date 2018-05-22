import Class from '../mixin/class';
import Togglable from '../mixin/togglable';
import {$, $$, attr, filter, getIndex, hasClass, includes, index, toggleClass, unwrap, wrapAll} from 'uikit-util';

/**
 * accordion
 * @exclude {props:{targets: true}}
 * @tutorial accordion
 */
export default {

    mixins: [Class, Togglable],

    props: {
        /**
         * CSS selector of the element(s) to toggle.
         */
        targets: String,

        /**
         * Index of the element to open initially.
         */
        active: null,

        /**
         * Allow all items to be closed.
         */
        collapsible: Boolean,

        /**
         * Allow multiple open items.
         */
        multiple: Boolean,

        /**
         * The toggle selector, which toggles accordion items.
         */
        toggle: String,

        /**
         * The content selector, which selects the accordion content elements.
         */
        content: String,

        /**
         * The transition to use when revealing items. Use keyword for
         * [easing functions](https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function#Keywords_for_common_timing-functions).
         */
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

        /**
         * Toggles the content pane.
         * @param {String|Integer|Node} [item = 0] - Accordion pane to toggle. 0 based index.
         * @param {Boolean} [animate = true] - Suppress opening animation by passing false.
         */
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
