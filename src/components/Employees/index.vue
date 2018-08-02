<template lang="html">
  <div>
    <div class="mdl-textfield mdl-js-textfield">
      <input
        class="mdl-textfield__input"
        type="text"
        v-model="query"
        @keyup="search()"
        placeholder="Buscar...." />
    </div>
    <table id="employees_table" class="table_special mdl-data-table mdl-js-data-table mdl-shadow--2dp">
      <thead>
        <tr>
          <th class="mdl-data-table__cell--non-numeric">Nombre</th>
          <th class="mdl-data-table__cell--non-numeric">Compañía</th>
          <th>Edad</th>
          <th>
            Salario <small>({{ usd && !editable ? 'USD$' : 'MXN$' }})</small>
          </th>
          <th class="mdl-data-table__cell--non-numeric">Teléfono</th>
          <th class="mdl-data-table__cell--non-numeric">Correo</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- Se iteran los datos de empleados -->
        <template v-for="(employee, index) in employees">
          <tr :data-id="employee.id" :class="index % 2 ? '' : 'row-colored'">
            <!-- La vista de los datos normal -->
            <template v-if="!editable">
              <td class="mdl-data-table__cell--non-numeric">{{ employee.name }}</td>
              <td class="mdl-data-table__cell--non-numeric">{{ employee.company }}</td>
              <td>{{ employee.age }}</td>
              <td :class="{ 'currency': true, 'text-poor': employee.salary < 10000, 'text-rich': employee.salary > 10000 }">
                <span v-if="usd">{{ employee.salary | dollar(exchange) | currency }}</span>
                <span v-else>{{ employee.salary | currency }}</span>
              </td>
              <td class="mdl-data-table__cell--non-numeric">{{ employee.phone }}</td>
              <td class="mdl-data-table__cell--non-numeric">{{ employee.email }}</td>
            </template>
            <!-- La vista de los datos en modo editable -->
            <template v-if="editable">
              <td class="custom_text_input">
                <input class="mdl-textfield__input" type="text" v-model="employee.name" />
              </td>
              <td class="custom_text_input">
                <input class="mdl-textfield__input" type="text" v-model="employee.company" readonly />
              </td>
              <td>
                <input class="mdl-textfield__input" type="text" v-model="employee.age" />
              </td>
              <td :class="{ 'currency': true, 'text-poor': employee.salary < 10000, 'text-rich': employee.salary > 10000 }">
                <input class="mdl-textfield__input" type="text" v-model="employee.salary" />
              </td>
              <td class="custom_text_input">
                <input class="mdl-textfield__input" type="text" v-model="employee.phone" />
              </td>
              <td class="custom_text_input">
                <input class="mdl-textfield__input" type="email" v-model="employee.email" />
              </td>
            </template>
            <td>
              <a href @click.prevent="deleteEmployee(employee.id)" >
                <span class="material-icons">delete</span>
              </a>
            </td>
          </tr>
        </template>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="6">
            <button
              id="btn-edit"
              type="button"
              @click="editable = !editable"
              :class="classButtons"
              >
              <i class="material-icons">edit</i>
            </button>
            <div class="mdl-tooltip" data-mdl-for="btn-edit">Editar los campos</div>
            <button
              type="button"
              id="btn-money"
              @click="usd = !usd"
              :class="classButtons"
              >
              <i class="material-icons">attach_money</i>
            </button>
            <div class="mdl-tooltip" data-mdl-for="btn-money">
                Cambiar a {{ !usd ? 'Dólares Americanos' : 'Pesos Mexicanos' }}
                <br>
                {{ exchange }} MXN$/USD$
            </div>
            <button
              id="btn-print"
              type="button"
              @click="printEmployees"
              :class="classButtons"
              >
              <i class="material-icons">print</i>
            </button>
          <div class="mdl-tooltip" data-mdl-for="btn-print">Imprimir lista en consola</div>
            <button
              id="btn-add"
              type="button"
              @click="viewform = true"
              :class="classButtons"
              >
              <i class="material-icons">add</i>
            </button>
            <div class="mdl-tooltip" data-mdl-for="btn-add">Agregar un nuevo empleado</div>
          </td>
        </tr>
      </tfoot>
    </table>
    <!-- Se inyecta el formulario de agregar empleado -->
      <div class="modal-shell" v-show="viewform">
        <transition name="fade">
          <div  class="modal-cont mdl-shadow--2dp mld-grid">
            <AddEmployee
              v-if="viewform"
              :employees="rawData"
              @cancel="viewform = false"
              @saved="handleEmployeeSaved" />
          </div>
        </transition>
      </div>
  </div>
</template>

<script>
/*
 * Componente de administración de empleados.
 *
 * Importa los datos originales de los empleados y permite editarlos y
 * eliminarlos. Además se puede filtrar por nombre y empresa. El
 * sub-componente AddEmployee maneja la lógica de agregar un empleado.
 */

// Los datos crudos
import rawData from '../../employees'
// El sub-componente formulario de agregar empleado
import AddEmployee from './AddEmployee'

export default {
  data: () => ({
    rawData,
    employees: [],        // (array) Empleados filtrados para renderizar
    editable: false,      // (bool) Controla la edición de los todos los campos
    viewform: false,      // (bool) Activa el AddEmployee (formulario)
    query: '',            // (string) La consulta de la barra de búsqueda
    usd: false,           // (bool) Controla si se visualizan cantidades en dólares
    rowColored: false,    // (bool) Controla el color de las filas
    beautify: false,      // (bool) Controla las clases de MDL en algunas cosas
    exchange: 21.50       // (float) Valor del dólar
  }),

  computed: {
    classButtons () {
      return {
        'custom-button': !this.beautify,
        'mdl-button': this.beautify,
        'mdl-js-button': this.beautify,
        'mdl-button--fab': this.beautify  ,
        'mdl-button--primary': this.beautify
      }
    }
  },

  components: {
    AddEmployee
  },

  methods: {
    /**
     * Filtra los datos de la tabla.
     *
     * Toma los datos crudos (sin modificarlos) y los filtra según la consulta
     * guarndándolos en el array employees. Filtra por nombre o empresa.
     *
     * @param {string} $data.query La consulta.
     * @param {array} $data.rawData Los empleados originales.
     * @param {array} $data.employees Los empleados filtrados.
     */
    search () {
      let re = new RegExp(this.query, 'i')
      // Filtra de los datos crudos al array que renderiza
      this.employees = this.rawData.filter((item) => (
        item.name.toString().match(re)
          || item.company.toString().match(re))
      )
    },

    /**
     * Elimina un empleado con un id dado de los datos originales.
     *
     * @param {int} id Identificación del empleado.
     * @param {array} $data.rawData Los empleados originales.
     * @param {array} $data.employees Los empleados filtrados.
     */
    deleteEmployee (id) {
      this.employees = this.employees.filter((item) => item.id !== id)
      this.rawData = this.rawData.filter((item) => item.id !== id)
    },

    /**
     * Iguala los empleados filtrados a los originales.
     *
     * @param {array} $data.rawData Los empleados originales.
     * @param {array} $data.employees Los empleados filtrados.
     * @param {string} $data.query La consulta.
     */
    resetFilter () {
      this.employees = this.rawData
      this.query = ''
    },

    /**
     * Reinicia los filtros cuando se agraga un nuevo empleado.
     *
     * @listens AddEmployee~event:save
     *
     * @param {bool} $data.viewform Apaga el formulario.
     */
    handleEmployeeSaved () {
      this.resetFilter()
      this.viewform = false
    },

    /**
     * Imprime el array de empleados en consola.
     *
     * @listens event:click
     *
     * @param {array} $data.employees Los empleados.
     */
    printEmployees () {
      let cloneEmployees = JSON.parse(JSON.stringify(this.employees))
      let cloneRawData = JSON.parse(JSON.stringify(this.rawData))
      console.log('Empleados filtrados: ', cloneEmployees)
      console.log('Empleados totales: ', cloneRawData)
    }
  },

  created () {
    // Reinicia los filtros al crear
    this.resetFilter()
  }
}
</script>

<style lang="css">
  .table_special {
    margin: auto;
    margin-bottom: 20px;
    padding-right: 20px;
    overflow-y: auto;
  }

  .currency {
    text-align: right;
  }

  .custom_text_input {
    transition: width 2s linear;
    -moz-transition: width 2s linear;
    -webkit-transition: width 2s linear;
  }

  .custom_text_input:hover {
    width: 250px;
  }

  .modal-shell {
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }

  .modal-cont {
    background-color: #fff;
    width: 60%;
    color: #000;
    position: relative;
    margin: auto;
    font-size: 1.5em;
    text-align: center;
    border-radius: 10px;
    padding: 10px;
    transition: all .8s;
  }

   tr.row-colored {
    background-color: #ebfaeb;   /* green 95% */
  }

  tr:hover {
    color: #145214;   /* green 20% */
  }

  td.text-poor {
    color: #ff3300 !important;    /* red 50% */
  }

  td.text-rich {
    color: #00802b !important;    /* gree 25% */
  }

  .custom-button {
    background-color: rgba(0, 0, 0, .2);
    border-radius: 50%;
    border-color: #00802b;
    border-style: solid;
    border-width: 2px;
    height: 60px;
    width: 60px;
    transition: all .3s;
    color: #00802b;
  }

  .custom-button:hover {
    background-color: #00802b;
    color: #FFF;
  }

  /* Transiciones */

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
