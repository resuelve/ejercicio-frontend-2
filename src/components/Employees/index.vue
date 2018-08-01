<template lang="html">
  <div class="">
    <input type="text" @keyup="search($event)" placeholder="Buscar...." />
    <table id="employees_table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Compañía</th>
          <th>Edad</th>
          <th>Salario</th>
          <th>Teléfono</th>
          <th>Correo</th>
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
          </tr>
        </template>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="6">
            <button type="button" @click="editable = !editable">Editar</button>
            <button type="button" @click="usd = !usd">USD$/MXN$</button>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import rawData from '../../employees'

export default {
  data: () => ({
    rawData,
    employees: [],
    editable: false,
    usd: false
  }),

  methods: {
    search (ev) {
      let re = new RegExp(ev.target.value, 'i')
      this.employees = this.rawData.filter((item) => (
        item.name.toString().match(re)
          || item.company.toString().match(re))
      )
    }
  },

  created () {
    this.employees = this.rawData
  }
}
</script>

<style lang="css">

  .currency {
    text-align: right;
  }
</style>
