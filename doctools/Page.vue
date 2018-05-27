<template>
    <div v-if="$doc.data">

        <UIkitTest v-if="$doc.settings.selectedTab === 'UIkitTest' && page.UIkitTest" :moduleProperty="$doc.resources[page.UIkitTest]"/>
        <Markdown v-if="$doc.settings.selectedTab === 'markdown' && page.markdown" :moduleProperty="$doc.resources[page.markdown]"/>
        <UIkitComponent v-if="$doc.settings.selectedTab === 'UIkitComponent' && page.UIkitComponent" :moduleProperty="$doc.resources[page.UIkitComponent]"/>

    </div>
    <div v-else v-html="$t('select a module on the left')"></div>
</template>


<script>
    import layout from 'yootheme-doctools/ui/app/layout';

    export default {
        extends: layout.Page,

        computed: {
            module() {
                return this.page[this.$doc.settings.selectedTab];
            },
            page() {
                return this.$doc.data.pages[this.$route.path.substr(1)];
            }
        }
    }
</script>
