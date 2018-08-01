import Vue from 'vue'
import jsdom from 'jsdom'
import App from './App.vue'
import './filters'

const renderer = require('vue-server-renderer').createRenderer()

describe('Probando shell', () => {
  const Const = Vue.extend(App)

  it('Monta el #app: a ser <div>', () => {
    const vm = new Const().$mount()

    renderer.renderToString(vm, (err, str) => {
      const dom = new jsdom.JSDOM(str)
      const tag = dom.window.document.querySelector('#app')
      // console.log(tag.nodeName)
      expect(tag.nodeName).toBe('DIV')
    })
  })

  it('probar que monta las instrucciones: tiene frase', () => {
    const Instructions = Vue.extend(require('./components/Instructions'))
    const vm = new Const({components: {Instructions}}).$mount()

    renderer.renderToString(vm, (err, str) => {
      const dom = new jsdom.JSDOM(str)
      const instButton = dom.window.document.querySelector('#employees')
      // console.log(firstHeading.textContent)
      expect(instButton.textContent)
        .toContain('Ejercicio para aplicar como front-end')
    })
  })
})
