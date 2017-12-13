<template lang="pug">
    div.uk-container
        select
            option(v-for='(obj, name) in $options.components' v-model='component') {{name}}
        component(:is='component')
</template>

<script>

import components from './tests';

export default {
    components,
    data() {
        return {
            component:'grid',
            items: ['a', 'b', 'c']
        }
    }
}
</script>
