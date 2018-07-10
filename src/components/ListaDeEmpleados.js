import React, { Component } from 'react';
import Empleado from './Empleado';
import '../styles/main.css'




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

    deleteEmployee = (index, e) => {
        //console.log(employeeDeleted);
        //copia de estado
        const employees = Object.assign([], this.state.employees);
        employees.splice(index, 1);
        this.setState({employees: employees})
    }

    render() { //buscador
        let  filteredEmployees = this.state.employees.filter(
            (empleado) => {
            return empleado.name.toLowerCase().trim().indexOf(this.state.search) !==-1 || empleado.company.toLowerCase().indexOf(this.state.search) !== -1; // !== -1 => Si no puedes encontrar este particula especifica, entonces no retornes nada 
                
            }
        );
        return (
            <div> 
                <div className="grid_12">                
                    <input  id="buscador" type="text" 
                    value={this.state.search} 
                    onChange={this.updateSearch} 
                    placeholder="Busqueda" />
                </div>  
                
                <form action=""  className="grid_12"
                onSubmit={this.agregarEmpleado} 
                ref={(input) => this.empleadoForm = input} >
                    <input type="text" ref="nombre" placeholder="nombre"/>
                    <input type="text" ref="empresa" placeholder="empresa"/>
                    <input type="text" ref="sueldo" placeholder="sueldo"/>
                    <input type="text" ref="edad" placeholder="edad"/> 
                    <input type="text" ref="telefono" placeholder="telefono"/>
                    <input type="text" ref="correo" placeholder="correo"/>
                    <button className="btn-carga-empleados" type="submit">Agregar empleado</button>
                </form>
                <table>
                       
                            <tr>
                                <th className="grid_2">Nombre</th>
                                <th className="grid_2">Compañia</th>
                                <th className="grid_2">Sueldo</th>
                                <th className="grid_1">Edad</th>
                                <th className="grid_2">Telefono</th>
                                <th className="grid_2">Correo</th>
                            </tr>
                        
                    <tbody>
                             {/*Devolver items de la data ubicada en el archivo index.js, iterando con map y creando un <li/> diferente por cada uno*/}
                            {filteredEmployees.map((empleado, index) => {
                                return <Empleado key={index}  empleado={empleado} removeItem={this.deleteEmployee.bind(this, index)} />
                                
                                })
                            }
                    </tbody>
                </table>
                
            </div>
        );
      }
    }


export default ListaDeEmpelados;