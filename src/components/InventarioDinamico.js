import React, { Component } from 'react';
import FormAgregarEmpleados from './FormAgregarEmpleado';
import '../styles/grid.css';
import '../styles/main.css'


class Inventario extends Component {
        render() {
            return(
                <div>
                    <FormAgregarEmpleados agregarEmpleado={this.props.agregarEmpleado}/>
                    <button className="btn-carga-empleados" onClick={this.props.cargarEjemplo}> Cargar Empleados -></button>
                </div>
            );
        }
    }

export default Inventario;