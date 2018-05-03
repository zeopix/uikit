# modal

# Modal

Create modal dialogs with different styles and transitions.

## Usage

The Modal component consists of an overlay, a dialog and an optional close button. You can use any element to toggle a modal dialog. To enable the necessary JavaScript, add the `uk-toggle` attribute. An `<a>` element needs to be linked to the modal's id. If you are using another element, like a button, just add the `uk-toggle="target: #ID"` attribute to target the id of the modal container.

Add the `uk-modal` attribute to a `<div>` element to create the modal container and an overlay that blanks out the page. It is important to add an `id` to indicate the element for toggling. Use the following classes to define the modal's sections.

<table><thead><tr><th style="text-align:left">Class</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>.uk-modal-dialog</code></td><td style="text-align:left">Add this class to a child <code>&lt;div&gt;</code> element to create the dialog</td></tr><tr><td style="text-align:left"><code>.uk-modal-body</code></td><td style="text-align:left">Add this class to create padding between the modal and its content.</td></tr><tr><td style="text-align:left"><code>.uk-modal-title</code></td><td style="text-align:left">Add this class to a heading element to create the modal title.</td></tr><tr><td style="text-align:left"><code>.uk-modal-close</code></td><td style="text-align:left">Add this class to an <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> element to create a close button and enable its functionality.</td></tr></tbody></table>

~~~html
<!-- This is a button toggling the modal -->
<button uk-toggle="target: #my-id" type="button"></button>

<!-- This is the modal -->
<div id="my-id" uk-modal>
    <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title"></h2>
        <button class="uk-modal-close" type="button"></button>
    </div>
</div>
~~~

<ExampleRunner id="runner-8b13d6be-c5e4-2783-1ba5-c4d3cdbd5612" resource="src.js.core.modal.js"/>

* * *

## Close button

To create a close button, enable its functionality and add proper styling and positioning, add the `.uk-modal-close-default` class to an `<a>` or `<button>` element. To place the close button outside the modal, add the `.uk-modal-close-outside` class.

Add the `uk-close` attribute from the [Close component](close.md), to apply a close icon.

~~~html
<div id="my-id">
    <div class="uk-modal-dialog">
        <button class="uk-modal-close-default" type="button" uk-close></button>
    </div>
</div>

<div id="my-id">
    <div class="uk-modal-dialog">
        <button class="uk-modal-close-outside" type="button" uk-close></button>
    </div>
</div>
~~~

<ExampleRunner id="runner-5b3b5fb0-bab1-a34c-3f70-e0f186c8f2dd" resource="src.js.core.modal.js"/>

* * *

## Center modal

To vertically center the modal dialog, you can use the `.uk-margin-auto-vertical` class from the [Margin component](margin.md).

~~~html
<div id="my-id" class="uk-flex-top" uk-modal>
    <div class="uk-modal-dialog uk-margin-auto-vertical"></div>
</div>
~~~

<ExampleRunner id="runner-2f8036d9-1ec1-2d86-223d-65139062f573" resource="src.js.core.modal.js"/>

**Note** `.uk-flex-top` on the modal container is needed to support IE 11.

* * *

## Header and footer

To divide the modal into different content sections, use the following classes.

<table><thead><tr><th style="text-align:left">Class</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>.uk-modal-header</code></td><td style="text-align:left">Add this class to a <code>&lt;div&gt;</code> element to create the modal header.</td></tr><tr><td style="text-align:left"><code>.uk-modal-footer</code></td><td style="text-align:left">Add this class to a <code>&lt;div&gt;</code> element to create the modal footer.</td></tr></tbody></table>

~~~html
<div id="my-id" uk-modal>
    <div class="uk-modal-dialog">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <div class="uk-modal-header">
            <h2 class="uk-modal-title"></h2>
        </div>
        <div class="uk-modal-body"></div>
        <div class="uk-modal-footer"></div>
    </div>
</div>
~~~

<ExampleRunner id="runner-a99c1383-c9e1-e661-f787-e55df8c54f41" resource="src.js.core.modal.js"/>

* * *

## Container modifier

Add the `.uk-modal-container` class to expand the modal dialog to the default [Container](container.md) width.

~~~html
<div id="my-id" class="uk-modal-container" uk-modal>...</div>
~~~

<ExampleRunner id="runner-ca06c2eb-d319-a71d-0b6e-f53329d65088" resource="src.js.core.modal.js"/>

* * *

## Full modifier

To create a modal, that fills the entire page, add the `.uk-modal-full` class. It is also recommended to add the `.uk-modal-close-full` class to the close button, so that it adapts its styling.

~~~html
<div id="my-id" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog">
        <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
    </div>
</div>
~~~

Using the [grid](grid.md) and [width](width.md) classes, you can create a nice, split fullscreen modal.

<ExampleRunner id="runner-66aa1da9-5ce9-88ef-5704-2ec6e010ab6e" resource="src.js.core.modal.js"/>

* * *

## Overflow

By default, the page will scroll with the modal, if its content exceeds the window height. To apply a scrollbar inside the modal, add the `uk-overflow-auto` attribute from the [Utility component](utility.md#overflow) to the modal body.

~~~html
<div id="my-id" uk-modal>
    <div class="uk-modal-dialog" uk-overflow-auto></div>
</div>
~~~

<ExampleRunner id="runner-23ab5830-108d-2473-0041-0a25fb4396ca" resource="src.js.core.modal.js"/>

* * *

## Media

If you want to display media, you should first check, if the [Lightbox component](lightbox.md) doesn't already offer everything you need. However, you can also use the modal to have more control over the markup to wrap your media in.

**Note** Use the `uk-video` attribute from the [Utility component](utility.md) to make sure videos are stopped when the modal is closed.

~~~html
<div uk-modal>
    <div class="uk-modal-dialog uk-width-auto">
        <iframe src="" uk-video></iframe>
    </div>
</div>
~~~

<ExampleRunner id="runner-1d743ac1-d307-7c9e-6aff-82d7e3fa39cc" resource="src.js.core.modal.js"/>

* * *

## Groups

You can group multiple modals by linking from one to the other and back. Use this to create multistep wizards inside your modals.

~~~html
<div id="modal-group-1" uk-modal>
    <div class="uk-modal-dialog">
        <a href="#modal-group-2" uk-toggle>Next</a>
    </div>
</div>

<div id="modal-group-2" uk-modal>
    <div class="uk-modal-dialog">
        <a href="#modal-group-1" uk-toggle>Previous</a>
    </div>
</div>
~~~

<ExampleRunner id="runner-be1ea72f-7973-a179-d4c9-fb0007180245" resource="src.js.core.modal.js"/>

* * *

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](javascript.md#component-configuration)

<table><thead><tr><th style="text-align:left">Option</th><th style="text-align:left">Value</th><th style="text-align:left">Default</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>esc-close</code></td><td style="text-align:left">Boolean</td><td style="text-align:left"><code>true</code></td><td style="text-align:left">Close the modal when the <em>Esc</em> key is pressed.</td></tr><tr><td style="text-align:left"><code>bg-close</code></td><td style="text-align:left">Boolean</td><td style="text-align:left"><code>true</code></td><td style="text-align:left">Close the modal when the background is clicked.</td></tr><tr><td style="text-align:left"><code>stack</code></td><td style="text-align:left">Boolean</td><td style="text-align:left"><code>false</code></td><td style="text-align:left">Stack modals, when more than one is open. By default, the previous modal will be hidden.</td></tr><tr><td style="text-align:left"><code>container</code></td><td style="text-align:left">String</td><td style="text-align:left"><code>true</code></td><td style="text-align:left">Define a target container via a selector to specify where the modal should be appended in the DOM. Setting it to <code>false</code> will prevent this behavior.</td></tr></tbody></table>

* * *

## JavaScript

Learn more about [JavaScript components](javascript.md#programmatic-use).

### Initialization

~~~js
UIkit.modal(element, options);
~~~

### JavaScript options

<table><thead><tr><th style="text-align:left">Name</th><th style="text-align:left">Default</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>cls-page</code></td><td style="text-align:left"><code>'uk-modal-page'</code></td><td style="text-align:left">Class to add to <code>&lt;body&gt;</code> when modal is active</td></tr><tr><td style="text-align:left"><code>cls-panel</code></td><td style="text-align:left"><code>'uk-modal-dialog'</code></td><td style="text-align:left">Class of the element to be considered the panel of the modal</td></tr><tr><td style="text-align:left"><code>sel-close</code></td><td style="text-align:left"><code>'.uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full'</code></td><td style="text-align:left">CSS selector for all elements that should trigger the closing of the modal</td></tr></tbody></table>

* * *

### Modal dialogs

The component comes with a number of prepared modal dialogs that you can use for user interaction. You can call the dialog directly from JavaScript and use callback functions to process the user input.

<table><thead><tr><th style="text-align:left">Code</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>UIkit.modal.alert('UIkit alert!')</code></td><td style="text-align:left">Show an alert box with one button.</td></tr><tr><td style="text-align:left"><code>UIkit.modal.confirm('UIkit confirm!')</code></td><td style="text-align:left">Show a confirm dialog with your message and two buttons.</td></tr><tr><td style="text-align:left"><code>UIkit.modal.prompt('Name:', 'Your name')</code></td><td style="text-align:left">Show a dialog asking for a text input.</td></tr><tr><td style="text-align:left"><code>UIkit.modal.dialog('&lt;p&gt;UIkit dialog!&lt;/p&gt;');</code></td><td style="text-align:left">Show dialog with any HTML content.</td></tr></tbody></table>

To process the user input, the modal uses a promise based interface which provides a `then()` function to register your callback functions.

~~~js
UIkit.modal.confirm('UIkit confirm!').then(function() {
    console.log('Confirmed.')
}, function () {
    console.log('Rejected.')
});
~~~

<ExampleRunner id="runner-8d08aac6-16ee-738c-7d12-9b8a5f183a60" resource="src.js.core.modal.js"/>

* * *

### Events

The following events will be triggered on elements with this component attached:

<table><thead><tr><th style="text-align:left">Name</th><th style="text-align:left">Description</th></tr></thead><tbody><tr><td style="text-align:left"><code>beforeshow</code></td><td style="text-align:left">Fires before an item is shown.</td></tr><tr><td style="text-align:left"><code>show</code></td><td style="text-align:left">Fires after an item is shown.</td></tr><tr><td style="text-align:left"><code>shown</code></td><td style="text-align:left">Fires after the item's show animation has completed.</td></tr><tr><td style="text-align:left"><code>beforehide</code></td><td style="text-align:left">Fires before an item is hidden.</td></tr><tr><td style="text-align:left"><code>hide</code></td><td style="text-align:left">Fires after an item's hide animation has started.</td></tr><tr><td style="text-align:left"><code>hidden</code></td><td style="text-align:left">Fires after an item is hidden.</td></tr></tbody></table>

### Methods

The following methods are available for the component:

#### Show

~~~js
UIkit.modal(element).show();
~~~

Shows the Modal.

#### Hide

~~~js
UIkit.modal(element).hide();
~~~

Hides the Modal.

## code:

~~~javascript
import Modal from '../mixin/modal';
import {$, addClass, assign, css, hasClass, height, html, isString, on, Promise, removeClass} from 'uikit-util';

export default {

    install,

    mixins: [Modal],

    data: {
        clsPage: 'uk-modal-page',
        selPanel: '.uk-modal-dialog',
        selClose: '.uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full'
    },

    events: [

        {
            name: 'show',

            self: true,

            handler() {

                if (hasClass(this.panel, 'uk-margin-auto-vertical')) {
                    addClass(this.$el, 'uk-flex');
                } else {
                    css(this.$el, 'display', 'block');
                }

                height(this.$el); // force reflow
            }
        },

        {
            name: 'hidden',

            self: true,

            handler() {

                css(this.$el, 'display', '');
                removeClass(this.$el, 'uk-flex');

            }
        }

    ]

};

function install (UIkit) {

    UIkit.modal.dialog = function (content, options) {

        const dialog = UIkit.modal(`
            <div class="uk-modal">
                <div class="uk-modal-dialog">${content}</div>
             </div>
        `, options);

        dialog.show();

        on(dialog.$el, 'hidden', ({target, currentTarget}) => {
            if (target === currentTarget) {
                dialog.$destroy(true);
            }
        });

        return dialog;
    };

    UIkit.modal.alert = function (message, options) {

        options = assign({bgClose: false, escClose: false, labels: UIkit.modal.labels}, options);

        return new Promise(
            resolve => on(UIkit.modal.dialog(`
                <div class="uk-modal-body">${isString(message) ? message : html(message)}</div>
                <div class="uk-modal-footer uk-text-right">
                    <button class="uk-button uk-button-primary uk-modal-close" autofocus>${options.labels.ok}</button>
                </div>
            `, options).$el, 'hide', resolve)
        );
    };

    UIkit.modal.confirm = function (message, options) {

        options = assign({bgClose: false, escClose: true, labels: UIkit.modal.labels}, options);

        return new Promise((resolve, reject) => {

            const confirm = UIkit.modal.dialog(`
                <form>
                    <div class="uk-modal-body">${isString(message) ? message : html(message)}</div>
                    <div class="uk-modal-footer uk-text-right">
                        <button class="uk-button uk-button-default uk-modal-close" type="button">${options.labels.cancel}</button>
                        <button class="uk-button uk-button-primary" autofocus>${options.labels.ok}</button>
                    </div>
                </form>
            `, options);

            let resolved = false;

            on(confirm.$el, 'submit', 'form', e => {
                e.preventDefault();
                resolve();
                resolved = true;
                confirm.hide();
            });
            on(confirm.$el, 'hide', () => {
                if (!resolved) {
                    reject();
                }
            });

        });
    };

    UIkit.modal.prompt = function (message, value, options) {

        options = assign({bgClose: false, escClose: true, labels: UIkit.modal.labels}, options);

        return new Promise(resolve => {

            const prompt = UIkit.modal.dialog(`
                    <form class="uk-form-stacked">
                        <div class="uk-modal-body">
                            <label>${isString(message) ? message : html(message)}</label>
                            <input class="uk-input" autofocus>
                        </div>
                        <div class="uk-modal-footer uk-text-right">
                            <button class="uk-button uk-button-default uk-modal-close" type="button">${options.labels.cancel}</button>
                            <button class="uk-button uk-button-primary">${options.labels.ok}</button>
                        </div>
                    </form>
                `, options),
                input = $('input', prompt.$el);

            input.value = value;

            let resolved = false;

            on(prompt.$el, 'submit', 'form', e => {
                e.preventDefault();
                resolve(input.value);
                resolved = true;
                prompt.hide();
            });
            on(prompt.$el, 'hide', () => {
                if (!resolved) {
                    resolve(null);
                }
            });

        });
    };

    UIkit.modal.labels = {
        ok: 'Ok',
        cancel: 'Cancel'
    };

}

~~~

* * *

_package: [uikit](uikit.md)_ _source: [test](https://github.com/git+https://github.com/uikit/uikit.git/tree/master/undefined/./src/js/core/modal.js)_