<template lang="pug">
    div.uk-container
        section
            select
                option(v-for='(obj, name) in $options.components' v-model='componentName' v-html='name')
        section
            div
                label(v-for='(param, name) in attributes' v-if='name !== componentAttribute' ) {{name}}:
                    input(:type="getType(name)" v-model="attributes[name]")
            div
                label(v-for='(param, name) in props') {{name}}:
                    input(:type="getPropType(name)" v-model="props[name]")
        section
            component(:is='componentName' :attributes='attributes' v-bind='props')

</template>

<script>

import components from './tests';
export default {
    components,
    data() {
        return {
            componentName:'grid',
            attributes: {},
            props: {}
        }
    },
    methods: {
        getType(paramName) {

            switch(this.component.options.props[paramName]) {
                case Number:
                    return 'number';
                case Boolean:
                    return 'checkbox';
                default:
                    return 'text';
            }
        },
        getPropType(paramName) {
            switch(this.vueComp.props[paramName].type) {
                case Number:
                    return 'number';
                case Boolean:
                    return 'checkbox';
                default:
                    return 'text';
            }
        }
    },  
    watch: {
        component: {
            
            handler() {
                this.attributes = {};
                this.$set(this.attributes, this.componentAttribute, '');
                Object.keys(this.component.options.props)
                    .forEach(name => this.$set(this.attributes, name, this.component.options.defaults[name]));

                this.props = {};
                Object.keys(this.vueComp.props)
                    .forEach(name => {
                        const def = this.vueComp.props[name].default;
                        const value = typeof def === 'function' ? def() : def;
                        this.$set(this.props, name, value);
                    });

                
            },
            immediate:true
        }
    },
    computed: {
        propsFiltered() {

        },

        componentAttribute() {
            return `uk-${this.componentName}`;
        },

        vueComp() {
            return this.$options.components[this.componentName];
        },

        component() {
            return UIkit.components[this.componentName];
        },
    }
}
</script>
