import Vue from 'vue'
import App from './App.vue'

import Instructions from './components/Instructions'

import './filters'

Vue.component('Instructions', Instructions)

new Vue({
  el: '#app',
  render: h => h(App)
})
