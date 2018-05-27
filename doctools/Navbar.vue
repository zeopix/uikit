<template>
    <div>

        <select v-model="page">
            <option v-for="name in Object.keys(this.data.pages).sort()" :value="name" v-html="name"></option>
        </select>

        <ul uk-tab class="uk-tab">
            <li v-for="tab in tabs" :aria-expanded="selectedTab === tab" :class="{'uk-active': selectedTab === tab}" @click="selectedTab = tab"><a href="#">{{tab}}</a></li>
        </ul>

        <label v-if="selectedTab === 'UIkitTest'">
            RTL
            <input type="checkbox" v-model="rtl"/>
        </label>

    </div>
</template>

<script>

export default {

    props: {
        data: Object
    },

    inject: ['$doc'],

    updated() {
        if (!this.pages[this.page][this.selectedTab]) {
            this.selectedTab = this.tabs[0];
        }
    },

    mounted() {
        if (!this.pages[this.page][this.selectedTab]) {
            this.selectedTab = this.tabs[0];
        }
    },

    data() {
        return {};
    },

    computed: {

        pages() {
            return this.$doc.data.pages;
        },

        rtl: {

            get() {
                return this.$doc.settings.rtl;
            },
            set(rtl) {
                this.$set(this.$doc.settings, 'rtl', rtl);
            }

        },

        selectedTab: {

            get() {
                return this.$doc.settings.selectedTab;
            },
            set(tab) {
                this.$set(this.$doc.settings, 'selectedTab', tab);
            }

        },

        page: {
            set(page) {
                this.$router.push('/' + page);
            },
            get() {
                return this.$route.path.substr(1);
            }
        },

        tabs() {
            return this.pages[this.page] && Object.keys(this.pages[this.page]).sort();
        }
    }

}

</script>