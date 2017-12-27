import ipsum from 'lorem-ipsum';

export default {
    props: {
        attributes: {
            type: Object,
            private: true
        },
        classes: {
            type: Array,
            private: true
        },
        content: {
            type: Array,
            required: true,
            private: true
        },
    },

    methods: {
        ipsum() {
            return ipsum({count: Math.random() * 5 });
        }
    },


};