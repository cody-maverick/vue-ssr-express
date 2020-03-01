<template>
    <div class="nav-wrapper"
         ref="nav">
        <button @click="toggleNav()"
                class="nav-button">
            x
        </button>
        <div class="nav">
            <h3>
                Nav
            </h3>
            <ul class="nav-list">
                <li class="nav-list__item"
                    v-for="{name, path} in links"
                    @click="toggleNav()">
                    <router-link
                            :to="path"
                            class="nav-list__link"
                            active-class="nav-list__link--active"
                            exact>
                        {{name}}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Nav",
        props: {
            showShadow: Function
        },
        data() {
            return {
                links: [
                    {
                        name: 'Home',
                        path: "/",
                    },
                    {
                        name: 'About',
                        path: "/about",
                    },
                ],
            }
        },
        methods: {
            toggleNav: function () {
                this.$refs.nav.classList.toggle('nav-wrapper--active')
                this.$props.showShadow()
            },
            closeNav: function () {
                this.$refs.nav.classList.remove('nav-wrapper--active')
            }
        }
    }
</script>

<style scoped
       lang="scss"
       src="./Nav.scss">
</style>