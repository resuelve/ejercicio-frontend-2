<template lang="html">
  <div>
    <a class="btn-switch" @click="active = !active">Instrucciones</a>
    <transition name="fade">
      <div v-show="active" class="modal-cont">
      <div id='employees'>
        <h1>Lista de empleados</h1>
        <p>Ejercicio para aplicar como front-end en Resuelve.</p>
        <h2>Para JS</h2>
        <ol>
          <li>Clona el proyecto e instala las dependencias</li>
          <li>El archivo <code>src/App.js</code> crear una tabla que muestre todos las propiedades de los empleados cumpliendo las siguientes características</li>
          <ul>
            <li>El salario está en pesos mexicanos</li>
            <li>Mostrar el salario en formato de dinero, es decir 16900 se muestra como $ 16,900.00</li>
            <li>Si el salario tuviera decimales se deben mostrar limitados a 2 decimales, es decir 16900.333 se debe mostrar como $ 16,900.33</li>
          </ul>
          <li>Adicionalmente en la tabla se debe de poder</li>
          <ul>
            <li>Agregar empleados (Un botón al principio o final de la tabla)</li>
            <li>Editar empleados (Un botón al principio o final de la tabla)</li>
            <li>El nombre de la empresa no se debe poder modificar</li>
            <li>Borrar empleados (Un botón de borrar por cada empleado)</li>
            <li>Agregar un botón que muestre los salarios en USD, tipo de cambio de US $1 = MXN $21.50</li>
          </ul>
          <li>En el estado de <code>src/App.js</code> se deben de mantener</li>
          <ul>
            <li>Empleados</li>
            <li>Si se están mostrando los salarios con MXN o USD</li>
            <li>El tipo de cambio</li>
          </ul>
          <li>Poder filtrar empleados con un campo que permita buscar a los empleados por nombre y empresa</li>
          <ul>
            <li>El mismo campo debe funcionar para nombre y empresa</li>
            <li>Se deben actualizar los resultados conforme se vayan escribiendo</li>
          </ul>
          <li>Agregar un botón que imprima la lista de empleados a la consola</li>
        </ol>
        <h2>Para CSS</h2>
        <p>Ejecutar SASS con <code>sass -w css/main.scss:src/main.css</code></p>
        <p>El CSS para la tabla puedes colocarlo en el archivo <code>css/main.scss</code></p>
        <p>La tabla debe contener las siguientes características, algunas necesitarán agregar clases con CSS</p>
        <ol>
          <li>Las filas deben de alternar el color del fondo</li>
          <li>Al hacer hover en una fila debe cambiar el color del fondo</li>
          <li>Los montos deben ir alineados a la derecha</li>
          <li>Los caracteres de los montos deben estar monoespaciados</li>
          <li>Si el salario es menor a 10,000 mostrarlo en color rojo, si es mayor mostrarlo en color verde</li>
          <li>Los botones de texto (como agregar nuevo empleado o imprimir a consola) deben tener fondo transparente y tener texto y borde en color verde</li>
          <li>Al hacer hover deben de poner su color de fondo con el mismo color del borde y el texto pasa a ser color blanco, esto debe tener una transición</li>
        </ol>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // Controla la visibilidad del modal
      active: false
    }
  }
}
</script>

<style scoped>
  /* La ventana modal */
  .modal-cont {
    background-color: #cc8;
    width: 600px;
    padding: 10px 20px;
    margin-top: 25px;
    margin-right: 5px;
    position: fixed;
    right: 0;
    top: 20px;
    bottom: 5px;
    overflow-y: auto;
  }

  /* El botón de activar */
  .btn-switch {
    background-color: green;
    color: white;
    display: block;
    position: fixed;
    right: 10px;
    top: 15px;
    z-index: 3;
    padding: 2px 4px 2px 4px;
    border-radius: 4px;
  }

  /* Transiciones */

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
