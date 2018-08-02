<template>
  <div id="app">
    <div class="demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
      <div class="demo-ribbon"></div>
      <main class="demo-main mdl-layout__content">
        <div class="demo-container mdl-grid">
          <div class="mdl-cell mdl-cell--1-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
          <div class="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--10-col">
            <h3>Ejercicio Frontend</h3>
            <!-- Se inyecta la tabla de empleados -->
            <Employees />
            <!-- Se incluyen las instrucciones como modal -->
            <Instructions />
          </div>
        </div>
        <footer class="demo-footer mdl-mini-footer">
          <div class="mdl-mini-footer--left-section">
            <ul class="mdl-mini-footer--link-list">
                <li><a
                  href="https://github.com/diegovinie/ejercicio-frontend-2"
                  target="_blank"
                  >Repositorio</a></li>
              <li><a href="mailto:diego.viniegra@gmail.com">Diego Viniegra</a></li>
              <li>2018</li>
            </ul>
          </div>
        </footer>
      </main>
    </div>
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
