/**
 * Entrypoint.
 *
 * Se incluyen los componentes globales, css, filtros y se levanta la
 * instancia de Vue
 */

import Vue from 'vue'
import App from './App.vue'

// Se importan los componentes globales
import Instructions from './components/Instructions'
// Se importan los filtros para dar formato a los datos (ya activos)
import './filters'

// Se registran los componentes globales
Vue.component('Instructions', Instructions)

new Vue({
  el: '#app',
  render: h => h(App)
})
