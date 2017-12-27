<template>

    <div class="uk-container">
        <section>
            <select v-model="componentName" @change="loadComp(),makeHash()">
                <option v-for="(obj, name) in $options.components" v-if="!obj.hidden" :value="obj.name"  v-html="name"></option>
            </select>
        </section>

        <h2>classes</h2>
        <section>
            <div v-for="(param, name) in classes" v-if="param" >
                <label :for="name" v-html="`${name}:`"></label>
                <select v-if="Array.isArray(param)" :name="name" v-model="classesValues[name]">
                    <option v-for="val in param" :value="val" v-html="val"></option>
                </select>
                <input v-else :name="name" type="checkbox" v-model="classesValues[name]">
            </div>


            <h2>attributes</h2>
            <div v-for="(param, name) in attributes" v-if="component.options.props[name] && name !== componentAttribute">
                <label :for="name" v-html="`${name}:`"></label>
                <select v-if="vueProps[name] && vueProps[name].options" v-model="attributes[name]">
                    <option v-for="(option,key) in vueProps[name].options" :value="option" v-html="key"></option>
                </select>
                <castingInput v-else :type="getType(name)" :config="inputOptions(name)" v-model="attributes[name]"></castingInput>
            </div>

        <h2>    </h2>
            <div v-for="(param, name) in vueProps" v-if="!component.options.props[name]  && !(vueProps[name] && vueProps[name].private) ">
                <label :for="name" v-html="`${name}:`"></label>
                <castingInput :type="getType(name)" :config="inputOptions(name)" v-model="vuePropValues[name]"></castingInput>
            </div>

        <content-list v-model="content" :types="vueComp.types"></content-list>
        </section>
        <section>
            <component :is="testCompName" :attributes="attributeValues" v-bind="vuePropValues" :content="content" :classes="computedClasses"></component>
        </section>
    </div>

</template>

<script>

import testComponents from './tests/index';
import castingInput from './castingInput.vue';
import content from './base/content.vue';

const components = Object.keys(testComponents).reduce((res, name) => {res[`uk-${name}`] = testComponents[name]; return res;}, {});
components.castingInput = castingInput;
components.contentList = content;
const hashVars = ['vuePropValues', 'attributes','classesValues', 'componentName', 'content'];
export default {
    components,
    data() {

        const res = {
            componentName: 'grid',
            attributes: {},
            vuePropValues: {},
            classesValues:  {},
            childClassesValues: {},
            content: [],
            debug: DEBUG
        };

        this.loadHash(res);
        return res
    },
    mounted(){

        window.$app = this;

        this.loadComp();
        this.$watch('hash',this.makeHash, {deep:true});
    },

    methods: {
        loadHash(target = this) {
            const data = JSON.parse(window.location.hash.replace('#','') || '{}') || {};
            hashVars.forEach(name => {
                target[name] = data[name] !== undefined ? data[name] : target[name];
            });
        },

        loadComp() {
                console.log('loading');
                const newAttributes = {[this.componentAttribute]:''};
                Object.keys(this.component.options.props)
                    .forEach(name => {
       
                        var def = this.component.options.defaults[name];
                        const override = this.vueProps[name];

                        if(override && override.private) {
                            return;
                        }

                        if (override && override.default) {
                            def = override.default
                            def = typeof def === 'function' ? def() : def;
                        }

                        const validValue = !override || override.options && override.options[this.attributes[name]];

                        if (this.attributes[name] === undefined || !validValue) {
                            newAttributes[name] = def;
                        } else {
                            newAttributes[name] = this.attributes[name];
                        }

                    });

                this.attributes = newAttributes;    

                Object.keys(this.vueProps).forEach(name => {
                        const def = this.vueProps[name].default;
                        const value = typeof def === 'function' ? def() : def;
                        if (!this.vuePropValues) {
                            this.$set(this.vuePropValues, name, value);

                        }
                    });
                
                const newValues = {};
                Object.keys(this.classes).forEach(name => {
                    const available = this.classes[name];
                    const currentValue = this.classesValues[name];
                    newValues[name] = currentValue;
                    if (Array.isArray(available) && available.indexOf(currentValue) < 0) {
                        const index = Math.round(Math.random() * (available.length - 1));
                        newValues[name] = available[index];
                    }
                }); 
                this.classesValues = newValues;
        },

        makeHash() {
            window.location.hash = JSON.stringify(this.hash);

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
        },

        getInheritedValues(key, converter = null, comp = this.vueComp, obj = {}) {

            if(comp.extends) {
                this.getInheritedValues(key, converter, comp.extends, obj);
            }

                
            if(comp[key]) {
                Object.keys(comp[key]).forEach(name => {

                    const prop = comp[key][name];
                    const res = converter ? converter(prop) : prop;
                    if (typeof res !== 'undefined') {
                        obj[name] = res;
                    }
                });
            }

            return obj;

        }
    }, 
    computed: {
        hash() {
            const obj = {};
            hashVars.forEach(name => {
                obj[name] = this[name];
            });
            return obj;
        },
        testCompName() {
            return `uk-${this.componentName}`;
        },
        computedClasses() {
            const res = [];
             Object.keys(this.classes).forEach(name => {
                const value = this.classesValues[name];
                const definition = this.classes[name];
                if(definition) {
                    if (value === true) {
                        res.push(this.classes[name]);
                    } else if (typeof value === 'string') {
                        res.push(value);
                    } else if (typeof value === 'undefined') {
                    
                    }
                }
            });
            return res;            
        },
        classes() {
            return this.getInheritedValues('classes');
        },

        childClasses() {
            return this.getInheritedValues('childClasses');
        },

        propsFiltered() {
        },

        attributeValues() {
            const vals = Object.keys(this.component.options.props).concat([this.componentAttribute]).reduce((val, name) => {val[name] = this.attributes[name]; return val;},{});
             return vals;
        },

        componentAttribute() {
            return `uk-${this.componentName}`;
        },

        vueProps() {

            return this.getInheritedValues('props',(prop) => {
                if (true || !prop.private) {
                    if (Array.isArray(prop.options)) {
                        prop.options = prop.options.reduce((val, name) => {val[name] = name; return val;}, {});
                    }
                    return prop;
                }
            });
        },

        vueComp() {
            return this.$options.components[this.testCompName];
        },

        component() {
            return UIkit.components[this.componentName];
        },
    }
}
</script>
