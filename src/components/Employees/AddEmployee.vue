<template lang="html">
  <div class="">
    <div class="">
      <h4>Agregar Empleado</h4>
    </div>
    <form class="" @submit.prevent="store" method="post">
        <div class="mdl-textfield mdl-js-textfield">
          <input id="form_name" class="mdl-textfield__input" type="text" v-model="create.name" placeholder="Nombre" />
          <span class="mdl-textfield__error">error</span>
        </div>
        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="text" v-model="create.company" placeholder="Compañía" />
        </div>

        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="text" v-model="create.age" placeholder="Edad" />
        </div>
        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="text" v-model="create.salary" placeholder="Salario" />
        </div>
        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="text" v-model="create.phone" placeholder="Teléfono" />

        </div>
        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="text" v-model="create.email" placeholder="Correo" />

        </div>
        <div class="">
          <button class="mdl-button" type="submit" name="button">Guardar</button>
          <button class="mdl-button" @click.prevent="$emit('cancel')">Cancelar</button>
        </div>
      </form>
  </div>
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
      salary: null,
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

  mounted () {
      this.$el.querySelector('input').focus()
  },

  destroyed () {
    console.log('destruido')
  }
}
</script>

<style lang="css">
</style>
