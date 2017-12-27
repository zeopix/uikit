<template>
    <div>
        <div v-for="con in content" :icon="con.icon || attributes.icon" v-bind="attributes"></div>
    </div>
</template>

<script>
import ipsum from 'lorem-ipsum';
import svg from './svg.vue';

export default {

    name:'icon',
    
    extends: svg,

    types: ['icon'],

    props: {
        
        icon: {
            type: String,
            default: 'home',
            options: [].concat(UIkit.icon.list())
        },
        id: {
            private: true
        }
    }
}

</script>

