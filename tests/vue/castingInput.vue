<template>
    <input v-if="type==='checkbox'" :type="type" v-bind="config" :checked="value" @change="change">
    <input v-else v-bind="config" :value="value" @input="change" >
</template>

<script>
export default {
    props: {
        type: {
            required:true,
            type: String
        },
        value:{
            required:true
        },
        config: {
            required: true,
            type: Object
        }
    },
    hidden: true,
    methods:{
        change(e) {
            switch(this.config.type) {
                case 'number':
                    this.$emit('input', parseFloat(e.target.value));
                    break;
                case 'checkbox': {
                    this.$emit('input', e.target.checked);
                    break;
                }
                default:
                    this.$emit('input', e.target.value);
            }
        }
    }
}
</script>
