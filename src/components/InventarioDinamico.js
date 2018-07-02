import React, { Component } from 'react';
import FormAgregarEmpleados from './FormAgregarEmpleado';

class Inventario extends Component {
        render() {
            return(
                <div>
                    <FormAgregarEmpleados agregarEmpleado={this.props.agregarEmpleado}/>
                    <button onClick={this.props.cargarEjemplo}> Cargar Empleados -></button>
                </div>
            );
        }
    }

export default Inventario;