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
export default {
  data: () => ({
    create: {
      name: null,
      company: null,
      age: null,
      phone: null,
      email: null
    }
  }),

  props: ['employees'],

  methods: {
    store () {
      this.employees.push(JSON.parse(JSON.stringify(this.create)))
      this.viewform = false
      this.$emit('saved')
      this.$destroy()
    }
  },

  destroyed () {
    console.log('destruido')
  }
}
</script>

<style lang="css">
</style>
