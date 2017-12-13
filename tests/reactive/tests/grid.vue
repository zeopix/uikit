<template lang="pug">
    div.uk-container
        div(v-bind="attributes" :class="`uk-child-width-1-${cols} uk-grid-small`")
            div(v-for="block in children")
                div.uk-card.uk-card-default.uk-card-body(v-html="block")

</template>

<script>
import ipsum from 'lorem-ipsum';
import base from '../base/component';

export default {

    name:'grid',
    
    extends: base,

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
            blocks: []
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

