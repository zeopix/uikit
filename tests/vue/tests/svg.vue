<template>
    <div v-bind="attributes" :class="classes">
        <div v-for="block in children">
            <div class="uk-card uk-card-default uk-card-body" v-html="block"></div>
        </div>
    </div>
</template>

<script>
import ipsum from 'lorem-ipsum';
import base from '../base/component';

export default {

    name:'grid',
    
    extends: base,

    classes: {
        gutter:[
            `uk-grid-collapse`,
            `uk-grid-small`,
            `uk-grid-medium`,
            `uk-grid-large`
        ],
        
        divider: 'uk-grid-divider',

        width: [
            'uk-child-width-auto',
            'uk-child-width-expand',
            'uk-child-width-1-2',
            'uk-child-width-1-3',
            'uk-child-width-1-4',
            'uk-child-width-1-5',
            'uk-child-width-1-6'
        ]
    },

    childClasses: {
        width:[
            'uk-width-auto',
            'uk-width-expand',

            'uk-width-small',
            'uk-width-medium',
            'uk-width-large',
            'uk-width-xlarge',
            'uk-width-xxlarge',

            'uk-child-width-1-1',
            'uk-child-width-1-2',
            'uk-child-width-1-3',
            'uk-child-width-2-3',
            'uk-child-width-1-4',
            'uk-child-width-2-4',
            'uk-child-width-3-4',
            'uk-child-width-1-5',
            'uk-child-width-2-5',
            'uk-child-width-3-5',
            'uk-child-width-4-5',
            'uk-child-width-1-6',
            'uk-child-width-2-6',
            'uk-child-width-3-6',
            'uk-child-width-4-6',
            'uk-child-width-5-6'
        ]
    },

    props: {
        cols: {
            type:Number,
            default: 4
        },
        rows: {
            type:Number,
            default: 4
        }
    },

    data() {
        return {
            blocks: [],

        }
    },

    computed: {
        numItems() {
            return this.cols * this.rows;
        },
        children() {
            while (this.numItems > this.blocks.length) {
                this.blocks.push(ipsum({count: Math.random() * 5 }));
            }
            while (this.numItems < this.blocks.length) {
                this.blocks.shift();
            }
            return this.blocks;
        }
    }
}

</script>

