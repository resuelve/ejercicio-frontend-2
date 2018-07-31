<template lang="html">
  <div class="">
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
      <tbody v-for="employee in employees">
        <tr :data-id="employee.id">
          <td>{{ employee.name }}</td>
          <td>{{ employee.company }}</td>
          <td>{{ employee.age }}</td>
          <td>{{ employee.salary }}</td>
          <td>{{ employee.phone }}</td>
          <td>{{ employee.email }}</td>
        </tr>
      </tbody>
      <tfoot>

      </tfoot>
    </table>
  </div>
</template>

<script>
import employees from '../../employees'

export default {
  data: () => ({
    employees
  })
}
</script>

<style lang="css">
</style>
