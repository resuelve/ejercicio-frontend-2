<template lang="html">
  <div class="">
    <input type="text" v-model="query" @keyup="search()" placeholder="Buscar...." />
    <table id="employees_table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Compañía</th>
          <th>Edad</th>
          <th>Salario</th>
          <th>Teléfono</th>
          <th>Correo</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <template v-for="employee in employees">
          <tr :data-id="employee.id">
            <template v-if="!editable">
              <td>{{ employee.name }}</td>
              <td>{{ employee.company }}</td>
              <td>{{ employee.age }}</td>
              <td class="currency">
                <span v-if="usd">{{ employee.salary | dollar | currency }}</span>
                <span v-else>{{ employee.salary | currency }}</span>
              </td>
              <td>{{ employee.phone }}</td>
              <td>{{ employee.email }}</td>

            </template>

            <template v-if="editable">
              <td>
                <input type="text" v-model="employee.name" />
              </td>
              <td>
                <input type="text" v-model="employee.company" readonly />
              </td>
              <td>
                <input type="text" v-model="employee.age" />
              </td>
              <td class="currency">
                <input type="text" v-model="employee.salary" />
              </td>
              <td>
                <input type="text" v-model="employee.phone" />
              </td>
              <td>
                <input type="email" v-model="employee.email" />
              </td>

            </template>
            <td><a href @click.prevent="deleteEmployee(employee.id)" ><span>X</span></a></td>
          </tr>
        </template>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="6">
            <button type="button" @click="editable = !editable">Editar</button>
            <button type="button" @click="usd = !usd">USD$/MXN$</button>
            <button type="button" @click="viewform = true">Agregar</button>
          </td>
        </tr>
      </tfoot>
    </table>
    <AddEmployee
      v-if="viewform"
      :employees="rawData"
      @cancel="viewform = false"
      @saved="handleEmployeeSaved" />
  </div>
</template>

<script>
import rawData from '../../employees'
import AddEmployee from './AddEmployee'

export default {
  data: () => ({
    rawData,
    employees: [],
    editable: false,
    viewform: false,
    query: '',
    usd: false
  }),

  components: {
    AddEmployee
  },

  methods: {
    search () {
      let re = new RegExp(this.query, 'i')
      this.employees = this.rawData.filter((item) => (
        item.name.toString().match(re)
          || item.company.toString().match(re))
      )
    },

    deleteEmployee (id) {
      this.employees = this.employees.filter((item) => item.id !== id)
      this.rawData = this.rawData.filter((item) => item.id !== id)
    },

    resetData () {
      this.employees = this.rawData
      this.query = ''
    },

    handleEmployeeSaved () {
      this.resetData()
      this.viewform = false
    }

  },

  created () {
    this.resetData()
  }
}
</script>

<style lang="css">

  .currency {
    text-align: right;
  }
</style>
