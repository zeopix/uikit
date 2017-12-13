<template lang="pug">
    div.uk-container
        input(v-model='cols' type='number')
        input(v-model='masonry' type='checkbox')
        div(uk-grid :masonry='masonry' :class="`uk-child-width-1-${cols} uk-grid-small`")
            div(v-for='block in children')
                div.uk-card.uk-card-default.uk-card-body(v-html='block')

</template>

<script>
import ipsum from 'lorem-ipsum';

export default {


    data() {

        return {
            rows:4,
            cols:4,
            masonry:false,
            blocks:[]
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

