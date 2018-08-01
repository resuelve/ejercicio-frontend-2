<template lang="html">
  <form class="" @submit.prevent="store" method="post">
    <input type="text" v-model="create.name" placeholder="Nombre" />
    <input type="text" v-model="create.company" placeholder="Compañía" />
    <input type="text" v-model="create.age" placeholder="Edad..." />
    <input type="text" v-model="create.salary" placeholder="Salario" />
    <input type="text" v-model="create.phone" placeholder="Teléfono" />
    <input type="text" v-model="create.email" placeholder="Correo" />
    <button type="submit" name="button">Guardar</button>
    <button @click.prevent="$emit('cancel')">Cancelar</button>
  </form>
</template>

<script>
/*
 * Componente para agregar empleado.
 *
 * Recibe (array) employees La lista de empleados y le agrega un nuevo
 * elemento.
 */

export default {
  data: () => ({
    create: {           // (object) Maneja los campos de entrada del formulario
      name: null,
      company: null,
      age: null,
      salary: 0,
      phone: null,
      email: null
    }
  }),

  props: ['employees'],   // (array) Los datos de los empleados

  methods: {
    /**
     * Guarda un nuevo empleado.
     *
     * @listens event:click
     * @emits parent:saved Informa que fue guardado.
     *
     * @param {array} $props.employees La lista de empleados.
     * @param {object} $data.create Los datos del nuevo.
     */
    store () {
      // Se crea un clon de los datos y se puja
      this.employees.push(JSON.parse(JSON.stringify(this.create)))
      this.$emit('saved')
    }
  },

  destroyed () {
    console.log('destruido')
  }
}
</script>

<style lang="css">
</style>
