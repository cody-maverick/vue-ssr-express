import Vue
    from 'vue'
import VueRouter
    from 'vue-router'
import Home
    from './Home/Home.vue'
import About
    from './About/About.vue'

Vue.use(VueRouter)

export function createRouter() {
    return new VueRouter({
        routes: [
            {
                path: '/',
                component: Home
            },
            {
                path: '/about',
                component: About
            }
        ],
        mode: 'history'
    })
}