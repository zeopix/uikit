<template>
    <div v-bind="attributes" :class="classes">
        <div v-for="n in count">
            <div class="uk-card uk-card-default uk-card-body" v-html="ipsum()"></div>
        </div>
    </div>
</template>

<script>
import margin from './margin.vue';
import width from './width.vue';

export default {

    name:'grid',
    
    extends: margin,

    classes: {
         gutter:[
            `uk-grid-collapse`,
            `uk-grid-small`,
            `uk-grid-medium`,
            `uk-grid-large`
        ],
        width: width.classes.width,
        margin: false,
        
        divider: 'uk-grid-divider'
    }

}

</script>

