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
        count: {
            type: Number,
            default: 1,
            min: 0,
            max: 100
        },
    },

    methods: {
        ipsum() {
            return ipsum({count: Math.random() * 5 });
        }
    }
};