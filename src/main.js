import Vue from 'vue'
import App from './App.vue'
import '@/assets/font/PTSans/stylesheet.css'
import '@/assets/font/Montserrat/stylesheet.css'
import '@/assets/css/style.css'
import VueMask from 'v-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

Vue.config.productionTip = false

Vue.use(VueMask);
Vue.use(createNumberMask);

new Vue({
  render: h => h(App),
}).$mount('#app')
