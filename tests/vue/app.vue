<template>

    <div class="uk-container">
        <div v-if="debug">__debug__</div>
        <section>
            <select>
            <option v-for="(obj, name) in $options.components" v-model="componentName" v-html="name"></option>
            </select>
        </section>
        <section>

            <div v-for="(param, name) in classes" >
                <label :for="name" v-html="`${name}:`"></label>
                <select v-if="Array.isArray(param)" :name="name" v-model="classesValues[name]">
                    <option v-for="val in param" :value="val" v-html="val"></option>
                </select>
                <input v-else :name="name" type="checkbox" v-model="classesValues[name]">
            </div>

           <div v-for="(param, name) in childClasses" >
                <label :for="name" v-html="`${name}:`"></label>
                <select v-if="Array.isArray(param)" :name="name" v-model="childClassesValues[name]">
                    <option v-for="val in param" :value="val" v-html="val"></option>
                </select>
                <input v-else :name="name" type="checkbox" v-model="childClassesValues[name]">
            </div>

            <div v-for="(param, name) in attributes" v-if="name !== componentAttribute">
                <label :for="name" v-html="`${name}:`"></label>
                <input :name="name" :type="getType(name)" v-model="attributes[name]">
            </div>
            <div v-for="(param, name) in props">
                <label :for="name" v-html="`${name}:`"></label>
                <input :type="getPropType(name)" v-model="props[name]">
            </div>
        </section>
        <section>
            <component :is="componentName" :attributes="attributes" v-bind="props" :classes="computedClasses"></component>
        </section>
    </div>

</template>

<script>

import components from './tests/index';
export default {
    components,
    data() {
        return {
            componentName:'grid',
            attributes: {},
            props: {},
            classesValues: {},
            childClassesValues: {},
            debug: DEBUG
        }
    },
    methods: {
        getType(paramName) {

            const propOverrideType = this.getPropType(paramName);
            if (propOverrideType) {
                return propOverrideType;
            }

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
            if (this.vueComp.props[paramName]) {

                switch(this.vueComp.props[paramName].type) {
                    case Number:
                        return 'number';
                    case Boolean:
                        return 'checkbox';
                    default:
                        return 'text';
                }
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
                        //igonre override props in props
                        if (this.attributes[name]) {
                            return;
                        }
                        const def = this.vueComp.props[name].default;
                        const value = typeof def === 'function' ? def() : def;
                        this.$set(this.props, name, value);
                    });
                
            },
            immediate:true
        }
    },
    computed: {

        computedClasses() {
            const res = [];
            Object.keys(this.classesValues).forEach(name => {
                const value = this.classesValues[name];
                if (value === true) {
                    res.push(this.classes[name]);
                } else if (typeof value === 'string') {
                    res.push(value);
                }
            });
            debugger
            return res;            
        },
        classes() {
            return this.vueComp.classes;
        },

        childClasses() {
            return this.vueComp.childClasses;
        },

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
