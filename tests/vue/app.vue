<template>

    <div class="uk-container">
        <section>
            <select v-model="componentName">
            <option v-for="(obj, name) in $options.components"  v-html="name"></option>
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

            <div v-for="(param, name) in attributes" v-if="component.options.props[name] && name !== componentAttribute">
                <label :for="name" v-html="`${name}:`"></label>
                <select v-if="vueProps[name] && vueProps[name].options" v-model="attributes[name]">
                    <option v-for="option in vueProps[name].options" :value="option" v-html="option"></option>
                </select>
                <input v-else :type="getType(name)" v-bind="inputOptions(name)" v-model="attributes[name]">
            </div>

            <div v-for="(param, name) in vueProps" v-if="!component.options.props[name]">
                <label :for="name" v-html="`${name}:`"></label>
                <input v-bind="inputOptions(name)" v-model="vuePropValues[name]">
            </div>
        </section>

        <section>
            <component :is="componentName" :attributes="attributes" v-bind="vuePropValues" :classes="computedClasses"></component>
        </section>
    </div>

</template>

<script>

import components from './tests/index';

const urlFields = ['attributes','componentName','classesValues'];

export default {
    components,
    data() {

        const data = JSON.parse(window.location.hash.replace('#','') || '{}') || {};
        return {
            componentName: data.comp || 'grid',
            attributes: data.attributes || {},
            vuePropValues: {},
            classesValues: data.classes || {},
            childClassesValues: {},
            debug: DEBUG
        }
    },
    mounted(){

        window.$app = this;
        this.$watch('attributes', this.makeHash, {deep: true});
        this.$watch('classesValues', this.makeHash, {deep: true});

        window.onhashchange = () => {
            console.log('hashed');
            const data = JSON.parse(window.location.hash.replace('#','')) || {};
            this.componentName = data.comp || this.componentName;
            this.attributes = data.attributes || this.attributes;
            this.classesValues = data.classes || this.classesValues;
        };
    },
    methods: {

        makeHash() {
            const sets = [`comp=${this.componentName}`];
            Object.keys(this.attributes).forEach(name => {
                sets.push(`${name}=${this.attributes[name]}`);
            });
            window.location.hash = JSON.stringify({comp: this.componentName, attributes: this.attributes,classes: this.classesValues});//sets.join('&');


        },
        inputOptions(name) {
            const opts = {name, type: this.getType(name)}
            if (this.vueProps[name]) {
                ['min','max','step'].forEach(opt => {
                    if (!UIkit.util.isUndefined(this.vueProps[name][opt])) {
                        opts[opt] = this.vueProps[name][opt];
                    }
                    });
             } 
             console.log(opts);
             return opts;
        },
        getInputType(type) {
                     switch(type) {
                case Number:
                    return 'number';
                case Boolean:
                    return 'checkbox';
                default:
                    return 'text';
            }
        },

        getType(paramName) {

            const propOverrideType = this.getPropType(paramName);
            if (propOverrideType) {
                return propOverrideType;
            }

            return this.getInputType(this.component.options.props[paramName]);
        },

        getPropType(paramName) {
            if (this.vueProps[paramName]) {
                return this.getInputType(this.vueProps[paramName].type);
            }
        }
    }, 
    watch: {
        componentName: {
            handler() {
                this.attributes = {};
                this.$set(this.attributes, this.componentAttribute, '');
                Object.keys(this.component.options.props)
                    .forEach(name => {
                        if (this.attributes[name]) {
                            return;
                        }
                        var def = this.component.options.defaults[name];
                        const override = this.vueProps[name];
                        if (override && override.default) {
                            def = override.default
                            def = typeof def === 'function' ? def() : def;
                        }
                        this.$set(this.attributes, name, def)
                    });

                Object.keys(this.vueProps).forEach(name => {
                        const def = this.vueProps[name].default;
                        const value = typeof def === 'function' ? def() : def;
                        this.$set(this.vuePropValues, name, value);
                    });
                
                Object.keys(this.classes).forEach(name => {
                    const available = this.classes[name];
                    const currentValue = this.classesValues[name];
                    if (Array.isArray(available) && available.indexOf(currentValue) < 0) {
                        const index = Math.round(Math.random() * (available.length - 1));
                        this.$set(this.classesValues, name, available[index]);
                    }
                });
                this.makeHash();
            },
            immediate: true
        }
    },
    computed: {
        
        computedClasses() {
            const res = [];
             Object.keys(this.classes).forEach(name => {
                const value = this.classesValues[name];
                if (value === true) {
                    res.push(this.classes[name]);
                } else if (typeof value === 'string') {
                    res.push(value);
                } else if (typeof value === 'undefined') {
                    
                }
            });
            return res;            
        },
        classes() {
            return this.vueComp.classes ? this.vueComp.classes : {};
        },

        childClasses() {
            return this.vueComp.childClasses ? this.vueComp.childClasses : {};
        },

        propsFiltered() {

        },

        componentAttribute() {
            return `uk-${this.componentName}`;
        },

        vueProps() {
            return this.vueComp.props ? this.vueComp.props : {};
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
