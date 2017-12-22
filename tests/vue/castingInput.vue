<template>
    <input v-bind="config" :value="value" @input="change">
</template>

<script>
export default {
    props: {
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
                    debugger;
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
