import React, { Component } from 'react';

class FormAgregarEmpleados extends Component {
    crearEmpleado(e) {
        e.preventDefault(); //Aplica PreventDefault al evento submit
        //console.log('creando nuevo empleado'); 
        const empleado = { //Objeto para añadir un nuevo empleado, pasando refs de los inputs. Este objeto se pasa a App
            name : this.name.value,
            company : this.company.value,
            salary : this.salary.value,
            age : this.age.value
        }
        this.props.agregarEmpleado(empleado); //llamando funcipn de App
        this.empleadoForm.reset(); //limpiando form
        //console.log(empleado)
    }
        render() {
            return(
                <div> {/*Declaro mi evento onSubmit en form, y antes del renderizado la funcion (crearEmpleado) que va a pasar este evento declarado para enviar datos*/}
                    <form  ref={(input) => this.empleadoForm = input} onSubmit={
                        (e) => this.crearEmpleado(e)}> {/*Formato para agregar empleados*/}
                        <input ref={(input) => this.name = input} type="text" placeholder="Name"/>
                        <input ref={(input) => this.company = input} type="text" placeholder="Company"/>
                        <input ref={(input) => this.salary = input} type="text" placeholder="Salary"/>
                        <input ref={(input) => this.age = input} type="text" placeholder="age"/>
                        <button type="submmit">+ Add </button>
                    </form>
                </div>
            );
        }
    }

export default FormAgregarEmpleados;