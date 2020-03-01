import Vue
    from 'vue'
import App
    from './components/App/App.vue'
import VueRouter
    from 'vue-router'
import {createRouter}
    from './components/router.js'
import Meta
    from 'vue-meta'

Vue.use(VueRouter)
Vue.use(Meta, {
    ssrAppId: 1
});

export const createApp = context => {
    // Создаём экземпляр маршрутизатора

    const router = createRouter();
    const app = new Vue({
        // внедряем маршрутизатор в корневой экземпляр Vue
        router,
        render: h => h(App)
    })
    // возвращаем и приложение и маршрутизатор
    return {
        app,
        router
    }
}
