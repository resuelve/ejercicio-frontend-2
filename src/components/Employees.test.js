import Vue from 'vue'
import {JSDOM} from 'jsdom'
import Employees from './Employees'
import data from '../employees'
import '../filters'

const renderer = require('vue-server-renderer').createRenderer()
const Component = Vue.extend(Employees)


describe('Probando la tabla de empleados', () => {

  it('Contar que los <tr> coincidan con el número de datos', () => {
    let vm = new Component().$mount()

    renderer.renderToString(vm, (err, str) => {
      if (err) {
        throw err
      } else {
        let dom = new JSDOM(str)
        let allTr = dom.window.document.querySelectorAll('#employees_table tbody tr')

        expect(allTr.length).toBe(data.length)
      }
    })
  })

  it.skip('Verificar que existe el botón \'Agregar Empleados\'', () => {

  })

  it.skip('Verificar que existe el botón \'Editar Empleados\'', () => {

  })

  it.skip('Verificar que existe el botón \'Tipo de Moneda\'', () => {

  })

  it.skip('Verificar que existe el botón \'Imprimir Lista de Empleados\'', () => {

  })
})

describe('Probando los datos de fila', () => {
  it.skip('Probar que cada fila tenga columnas con datos no nulos', () => {

  })

  it.skip('Verificar que existen los botones de \'Borrar Empleado\'', () => {

  })
})
