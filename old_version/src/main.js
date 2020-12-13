import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueHtmlToPaper from "vue-html-to-paper";
import { VueMaskDirective } from 'v-mask'
import './plugins/element.js'


Vue.config.productionTip = false

const options = {
    specs: [
        'fullscreen=yes',
        'titlebar=yes',
        'scrollbars=yes'
    ],
    styles: ['/css/result.css'],
}

new Vue({
    store,
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
Vue.directive('mask', VueMaskDirective);
Vue.use(VueHtmlToPaper, options)