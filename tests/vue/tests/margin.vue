<template>
    <div v-bind="attributes" >
        <div v-for="cont in content">
            <div :class="classes" class="uk-card uk-card-default uk-card-body" v-html="cont.text"></div>
        </div>
    </div>
</template>

<script>
import base from '../base/component';

const classesMargin = [
            '-',
           'uk-margin',
           'uk-margin-top',
           'uk-margin-left',
           'uk-margin-bottom',
           'uk-margin-right',

            'uk-margin-small',
           'uk-margin-small-top',
           'uk-margin-small-left',
           'uk-margin-small-bottom',
           'uk-margin-small-right',
       
            'uk-margin-medium',
           'uk-margin-medium-top',
           'uk-margin-medium-left',
           'uk-margin-medium-bottom',
           'uk-margin-medium-right',
       
            'uk-margin-large',
           'uk-margin-large-top',
           'uk-margin-large-left',
           'uk-margin-large-bottom',
           'uk-margin-large-right',
       
            'uk-margin-xlarge',
           'uk-margin-xlarge-top',
           'uk-margin-xlarge-left',
           'uk-margin-xlarge-bottom',
           'uk-margin-xlarge-right',
       
            'uk-margin-remove',
           'uk-margin-remove-top',
           'uk-margin-remove-left',
           'uk-margin-remove-bottom',
           'uk-margin-remove-right',
           'uk-margin-remove-vertical',
           'uk-margin-remove-adjacent',
       
            'uk-margin-auto',
           'uk-margin-auto-top',
           'uk-margin-auto-left',
           'uk-margin-auto-bottom',
           'uk-margin-auto-right',
           'uk-margin-auto-vertical',
       ];

export default {

    name:'margin',
    
    extends: base,

    types: ['text'],

    classes: {
       margin: classesMargin
        
    },

    props: {
        margin: {
            options:classesMargin.filter(name => name.indexOf('top') >= 0 && name.indexOf('remove') < 0)
        }
    }
    
}

</script>

