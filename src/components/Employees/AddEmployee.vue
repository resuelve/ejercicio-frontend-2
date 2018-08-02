<template lang="html">
  <div class="">
    <div class="">
      <h4>Agregar Empleado</h4>
    </div>
    <form @submit.prevent="store" method="post">
        <div class="mdl-textfield mdl-js-textfield">
          <!-- Campo Nombre -->
          <input
            class="mdl-textfield__input"
            type="text"
            v-model="create.name"
            pattern="[A-Z](\.|[a-z]+)( [A-Z](\.|[a-z]+))( [A-Z](\.|[a-z]+))?" required
            placeholder="Nombre" />
          <span class="mdl-textfield__error">error</span>
        </div>
        <div class="mdl-textfield mdl-js-textfield">
          <!-- Campo Empresa -->
          <input
            class="mdl-textfield__input"
            type="text"
            v-model="create.company"
            placeholder="Compañía" />
        </div>
        <div class="mdl-textfield mdl-js-textfield">
          <!-- Campo Edad -->
          <input
            class="mdl-textfield__input"
            type="text"
            v-model="create.age"
            pattern="\d{2}|11\d"
            placeholder="Edad" />
        </div>
        <div class="mdl-textfield mdl-js-textfield">
          <!-- Campo Salario -->
          <input
            class="mdl-textfield__input"
            type="text"
            v-model="create.salary"
            pattern="\d*(\.\d+)?" required
            placeholder="Salario" />
        </div>
        <!-- Campo Teléfono -->
        <div class="mdl-textfield mdl-js-textfield">
          <input
            class="mdl-textfield__input"
            type="text"
            v-model="create.phone"
            pattern="^\(\d{3}\) \d{3} \d{4}$"
            title="(###) ### ####"
            placeholder="Teléfono" />
        </div>
        <div class="mdl-textfield mdl-js-textfield">
          <!-- Campo Correo -->
          <input
            class="mdl-textfield__input"
            type="text"
            v-model="create.email"
            pattern=".+@[a-z].*\..*"
            placeholder="Correo" />
        </div>
        <div class="">
          <!-- Se utiliza esta forma de submit para utilizar los patterns -->
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
      id: null,
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
      // El id se saca del mayor id encontrado más 1
      this.create.id = this.employees.reduce((acc, item) => {
        return item.id > acc.id ? item : acc
      }).id + 1

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
