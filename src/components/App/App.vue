<template>
    <div id="app">
        <Nav ref="nav"
             :showShadow="showShadow"/>
        <Content/>
        <transition
                name="fade">
            <div v-if="show"
                 ref="shadow"
                 class="shadow"
                 @click.self="closeAll">
            </div>
        </transition>
    </div>
</template>

<script>
    import Nav
        from '../Nav/Nav.vue'
    import Content
        from '../Content/Content.vue'

    export default {
        name: 'App',
        components: {
            Nav,
            Content
        },
        data: function () {
            return {
                show: false
            }
        },
        methods: {
            showShadow: function () {
                this.show = !this.show;
            },
            closeAll: function () {
                this.show = false;
                this.$refs.nav.closeNav();
            }
        },
        mounted: function () {
        }

    }
</script>

<style lang="scss"
       src="./App.scss"
>
</style>
