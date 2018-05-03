# gif

## code:

~~~javascript
import {isInView} from 'uikit-util';

// Deprecated
export default {

    update: {

        read(data) {

            const inview = isInView(this.$el);

            if (!inview || data.isInView === inview) {
                return false;
            }

            data.isInView = inview;
        },

        write() {
            this.$el.src = this.$el.src;
        },

        events: ['scroll', 'load', 'resize']
    }

};

~~~

* * *

_package: [uikit](uikit.md)_ _source: [test](https://github.com/git+https://github.com/uikit/uikit.git/tree/master/undefined/./src/js/core/gif.js)_