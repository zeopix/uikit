<template>
    <div class="uk-container">
        <div v-for="n in parseInt(count)">
            <span>{{n}}</span>
            <div v-bind="attributes" :class="classes"></div>
        </div> 
    </div>
</template>

<script>
import ipsum from 'lorem-ipsum';
import base from '../base/component';

export default {

    name:'svg',
    
    extends: base,

    props: {
        src:{
            type: String,
            options: {
                'Image': '../../src/images/components/navbar-toggle-icon.svg',
                'Symbol+ID': '../images/icons.svg#table',
                'Symbol+ID+notfound': '../images/icons.svg#notfound'
            }
        },
        ratio: {
            type: Number,
            default: 1,
            min: 0.1,
            max: 10,
            step: 0.1
        }
        
    }
}

</script>

