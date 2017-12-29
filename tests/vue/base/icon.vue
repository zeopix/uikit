<template>
  <select v-model="value[type]">
      <option v-for="(item, index) in items" v-html="item" :value="item"></option>
  </select>
</template>

<script>

export default {

    props:{
        value: {
            type: Object
        },
        index: {
            type: Number
        }
    },

    created() {
        this.value[this.type] = this.value[this.type] || this.items[this.index % this.items.length];
    },

    computed:{
        type(){
            return 'icon';
        },
        items() {
            return UIkit.icon.list();
        }

    }
 
}
</script>
