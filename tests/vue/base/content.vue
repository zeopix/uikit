<template>
    <div>
        <input type="number" min="0" max="100" v-model="length">
        <ul class="sortable">
            <li v-for="(val, index) in value">
                <component v-for="kind in types" :is="`co${kind}`" ref="element" :key="getKey(val, index)" :value="val">{{text(val)}}</component>
            </li>
        </ul>
    </div>
</template>

<script>
import cotext from "./text.vue";
import coicon from "./icon.vue";

const coimage = Object.assign({}, coicon);
Object.assign(coimage, {computed:{ type: () => 'image', items: () => JPGS}});

const cosvg = Object.assign({}, coicon);
Object.assign(cosvg, {computed:{ type: () => 'svg', items: () => ({
                'Image': '../../src/images/components/navbar-toggle-icon.svg',
                'Symbol+ID': '../images/icons.svg#table',
                'Symbol+ID+notfound': '../images/icons.svg#notfound'
            })}});


// debugger;
const components = {
  cotext,
  coicon,
  coimage,
  cosvg
};
export default {
  hidden: true,
  components,
  props: {
    value: {
      type: Array,
      required: true
    },

    components: {
      type: Object,
      required: false
    },

    types: {
      type: Array,
      default() {
        return ["text", "icon", "image"];
      }
    }
  },

  data: {
    length: null
  },

  created() {
    if (this.components) {
      Object.assign(this.$options.components, this.components);
    }
  },

  computed: {
    length: {
      get() {
        return this.value.length;
      },
      set(newLength) {
        while (this.value.length > newLength) {
          this.value.pop();
        }
        while (this.value.length < newLength) {
          const index = Math.round((this.types.length - 1) * Math.random());
          const val = this.types[index];
          this.value.push({ type: val });
        }
      }
    }
  },

  methods: {
    text(val) {
      return typeof val === "string" ? val : "";
    },

    getKey(val, index) {
      return typeof val === "string" ? index : val;
    },

    getType(val) {
      return this.types.indexOf(val) >= 0 ? val : this.types[0];
    }
  },

  mounted() {
    const el = UIkit.util.$(".sortable", this.$el);
    const srtable = UIkit.sortable(el);
    var originalList;

    UIkit.util.on(el, "start", (e, sortable, item) => {
      originalList = UIkit.util.toNodes(el.children);
    });

    UIkit.util.on(el, "stop", (e, sortable, item) => {
      const newOrder = []; // new Array(this.$refs.length);
      originalList.forEach((el, i) => {
        const index = UIkit.util.index(el);
        newOrder[index] = this.value[i];
      });
      originalList.forEach(child => {
        UIkit.util.append(el, child);
      });
      this.$emit("input", newOrder);
    });
  }
};
</script>
