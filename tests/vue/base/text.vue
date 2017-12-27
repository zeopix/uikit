<template>
<div>
  <input type="text" v-model="value.text"></input>
</div>
</template>

<script>
import ipsum from "lorem-ipsum";

export default {

    props:{
        value: {
            type: Object
        }
    },
    created() {
        this.value.text = this.value.text || ipsum();
    },
 
};
</script>
