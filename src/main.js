import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false

const s = 'AIza',
    s2 = 'SyAY4',
    s3 = 'QdZYKD4',
    s4 = '2ebf4e',
    s5 = 'eADYQ',
    s6 = 's-zWwm2',
    s7 = 'rRFtI';
Vue.use(VueGoogleMaps, {
    load: {
        key: s + s2 + s3 + s4 + s5 + s6 + s7
        // libraries: "places" // necessary for places input
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')