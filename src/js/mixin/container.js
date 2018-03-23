import UIkit from '../api/index';
import {$} from 'uikit-utils';

export default {

    props: {
        container: Boolean
    },

    defaults: {
        container: true
    },

    computed: {

        container({container}) {
            return container === true && UIkit.container || container && $(container);
        }

    }

};
