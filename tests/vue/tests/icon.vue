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

    name:'icon',
    
    extends: base,

    props: {
        ratio: {
            type: Number,
            default: 1,
            min: 0.1,
            max: 10,
            step: 0.1
        },
        count: {
            type: Number,
            default: 1,
            min: 0,
            max: 100
        },
        icon: {
            type: String,
            default: 'home',
            options: UIkit.icon.list()
        }
    }
}

</script>

