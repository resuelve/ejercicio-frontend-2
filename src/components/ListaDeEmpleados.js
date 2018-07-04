import React, { Component } from 'react';
import Empleado from './Empleado';
import '../main.css';



class ListaDeEmpelados extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            search: '', //declarando input vacio como estado inicial
            employees: props.employees
        };
        //bind sobre los eventHandler
        this.updateSearch = this.updateSearch.bind(this);
        this.agregarEmpleado = this.agregarEmpleado.bind(this);
    }

    updateSearch(e) {
        this.setState ({ //cambiando estado de buscador segun valor ingresado
            search: e.target.value}
        )
        
    }

    agregarEmpleado(e) {
        e.preventDefault(); //prevenir evento submit
        console.log(this.refs.nombre.value);
        let name = this.refs.nombre.value;
        let company = this.refs.empresa.value;
        let salary = this.refs.sueldo.value;
        let age = this.refs.edad.value;
        let phone = this.refs.telefono.value;
        let email = this.refs.correo.value;

        //añadiendo ID unico con Math floor 
        let id = Math.floor((Math.random() * 100)+1);
        this.setState({
            employees : this.state.employees.concat({
                id: id, name, company, salary, age, phone, email
            })
        })
        this.empleadoForm.reset(); //limpiar inputs del form después del evento submit
    }

    render() { //buscador
        let  filteredEmployees = this.state.employees.filter(
            (empleado) => {
            return empleado.name.toLowerCase().trim().indexOf(this.state.search) !== -1; // !== -1 => Si no puedes encontrar este particula especifica, entonces no retornes nada 
                
            }
        );
        return (
            <div>                        
                <input type="text" 
                value={this.state.search} 
                onChange={this.updateSearch} 
                placeholder="Busqueda" />
                <form action="" 
                onSubmit={this.agregarEmpleado} 
                ref={(input) => this.empleadoForm = input} >
                    <input type="text" ref="nombre" placeholder="nombre"/>
                    <input type="text" ref="empresa" placeholder="empresa"/>
                    <input type="text" ref="sueldo" placeholder="sueldo"/>
                    <input type="text" ref="edad"/> 
                    <input type="text" ref="telefono"/>
                    <input type="text" ref="correo"/>
                    <button type="submit">Agregar empleado</button>
                </form>
                    <ul> {/*Devolver items de la data ubicada en el archivo index.js, iterando con map y creando un <li/> diferente por cada uno*/}
                    {filteredEmployees.map((empleado) => {
                        return <Empleado key={empleado.id}  empleado={empleado} />
                        })
                    }
                </ul>
            </div>
        );
      }
    }


export default ListaDeEmpelados;