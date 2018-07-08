import React, { Component } from 'react';


class FormAgregarEmpleados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            employees: props.employees
        };
        this.crearEmpleado = this.crearEmpleado.bind(this);
    }
    
    crearEmpleado(e) {
        e.preventDefault(); //Aplica PreventDefault al evento submit
        //console.log('creando nuevo empleado'); 
        // const empleado = { //Objeto para añadir un nuevo empleado, pasando refs de los inputs. Este objeto se pasa a App
        //     name : this.name.value,
        //     company : this.company.value,
        //     salary : this.salary.value,
        //     age : this.age.value
        // }
        let name = this.refs.nombre.value;
        let company = this.refs.empresa.value;
        let salary = this.refs.sueldo.value;
        let age = this.refs.edad.value;
        let phone = this.refs.telefono.value;
        let email = this.refs.correo.value;

       
        let id = Math.floor((Math.random() * 100)+1);
        this.setState({
            employees : this.state.employees.concat({
            id:id, name, company, salary, age, phone, email
            })
         })

        // this.props.agregarEmpleado(empleado); //llamando funcipn de App
        this.empleadoForm.reset(); //limpiando form
        //console.log(empleado)
    }
        render() {
            
            return(
                <div> {/*Declaro mi evento onSubmit en form, y antes del renderizado la funcion (crearEmpleado) que va a pasar este evento declarado para enviar datos*/}
                    <form  ref={(input) => this.empleadoForm = input} 
                        onSubmit={
                        (e) => this.crearEmpleado(e)}> {/*Formato para agregar empleados*/}
                        {/* <input ref={(input) => this.name = input} type="text" placeholder="Name"/>
                        <input ref={(input) => this.company = input} type="text" placeholder="Company"/>
                        <input ref={(input) => this.salary = input} type="text" placeholder="Salary"/>
                        <input ref={(input) => this.age = input} type="text" placeholder="age"/> */}
                        
                        <input type="text" ref="nombre" placeholder="nombre"/>
                            <input type="text" ref="empresa" placeholder="empresa"/>
                            <input type="text" ref="sueldo" placeholder="sueldo"/>
                            <input type="text" ref="edad"/> 
                            <input type="text" ref="telefono"/>
                            <input type="text" ref="correo"/>
                        <button type="submmit">+ Add </button>
                    </form>
                </div>
            );
        }
    }

export default FormAgregarEmpleados;