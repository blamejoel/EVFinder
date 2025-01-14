import Vue from 'vue'
import VueHead from 'vue-head'
import { VuePlausible } from 'vue-plausible'

import App from './App.vue'

import router from './router/routes.js'
import store from './vuexStore'

import './vueFilters.js'

import {
  AlertPlugin,
  BIconX,
  BIconXCircle,
  BIconChevronDown,
  BIconBoxArrowUpRight,
  BIconSliders,
  BIconInfoCircle,
  BIconPhoneLandscape,
  BIconGithub,
  LayoutPlugin,
  FormGroupPlugin,
  FormSelectPlugin,
  FormInputPlugin,
  ButtonPlugin,
  TooltipPlugin,
  TablePlugin,
  DropdownPlugin,
  BadgePlugin,
  FormCheckboxPlugin,
  LinkPlugin,
  CardPlugin,
  ListGroupPlugin,
  SpinnerPlugin,
  ImagePlugin,
  CollapsePlugin,
} from 'bootstrap-vue'

[
  AlertPlugin,
  LayoutPlugin,
  FormGroupPlugin,
  FormSelectPlugin,
  FormInputPlugin,
  ButtonPlugin,
  TooltipPlugin,
  TablePlugin,
  DropdownPlugin,
  BadgePlugin,
  FormCheckboxPlugin,
  LinkPlugin,
  CardPlugin,
  ListGroupPlugin,
  SpinnerPlugin,
  ImagePlugin,
  CollapsePlugin,
].forEach(x => Vue.use(x));

Vue.component('BIconSliders', BIconSliders)
Vue.component('BIconX', BIconX)
Vue.component('BIconXCircle', BIconXCircle)
Vue.component('BIconChevronDown', BIconChevronDown)
Vue.component('BIconBoxArrowUpRight', BIconBoxArrowUpRight)
Vue.component('BIconInfoCircle', BIconInfoCircle)
Vue.component('BIconPhoneLandscape', BIconPhoneLandscape)
Vue.component('BIconGithub', BIconGithub)


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueHead)

Vue.use(VuePlausible, {
  domain: 'theevfinder.com',
  trackLocalhost: false,
  enableAutoPageviews: true,
  enableAutoOutboundTracking: true,
})

import './assets/app_style.scss'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
