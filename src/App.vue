<template>
  <div id="app">
    <h1>Ejercicio Frontend</h1>
    <!-- Se inyecta la tabla de empleados -->
    <Employees />
    <!-- Se incluyen las instrucciones como modal -->
    <Instructions />
  </div>
</template>

<script>
// Este componente maneja la tabla de los empleados
import Employees from './components/Employees'

export default {
  name: 'app',
  data: () => ({

  }),

  components: {
    Employees
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
