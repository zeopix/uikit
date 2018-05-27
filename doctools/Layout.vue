<template>
    <div>
        <div v-if="data">
            <Navbar :data="data"/>
            <router-view ref="view"/>
        </div>
        <div v-else>
            <div class="uk-position-center" style="text-align:center;">
                <div uk-spinner></div>
                <div v-html="$t('waiting for data...')"></div>
            </div>
        </div>
    </div>
</template>

<script>

    import DocApp from 'yootheme-doctools/ui/app/DocApp.js';
    import Navbar from './Navbar.vue';

    /**
     * Container Component for the doctools app ui
     */
    export default {

        components: {
            Navbar
        },

        data() {
            const self = this;
            return {
                onResize: res => {
                        self.adjustHeight();
                    }
                };
        },

        extends: DocApp,

        ref: '$doc',

        updated() {
            this.adjustHeight();
        },

        mounted() {
            window.addEventListener('resize', this.onResize);
            this.adjustHeight();

        },

        destroyed() {
            window.removeEventListener('resize', this.onResize);
        },

        methods: {
            adjustHeight() {
                if(this.$refs.view) {

                    const top = this.$refs.view.$el.getBoundingClientRect().top;
                    const h = window.innerHeight;
                    this.$refs.view.$el.style.height =  `${h - top}px`;
                }
            },
        }

    }
</script>
