<template>
    <div class="uk-container">
        <div v-for="(con, n) in content">
            <!-- <span>{{n}}</span> -->
            <div :src="con.svg || attributes.src" v-bind="attributes" :class="classes"></div>
        </div> 
    </div>
</template>

<script>
import ipsum from 'lorem-ipsum';
import base from '../base/component';

export default {

    name:'svg',
    
    extends: base,

    types: ['svg'],
    togglable:true,
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

