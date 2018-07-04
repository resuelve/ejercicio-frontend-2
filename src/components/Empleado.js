import React, { Component } from 'react';
import { redondeoPrecio } from '../functions'; //Esportar función para los precios
import '../styles/grid.css';

class Empleado extends Component {

    render() {
            // const details  = this.props.empleado;
            // const  getFilter  = this.props.empleado.filter(
            //     (empleado) => {
            //         return empleado.name.indexOf(this.state.search) !== -1;
            //     }
            // );
            return(
                <div className="grid_12">
                        <li>{this.props.empleado.name}</li>
                            <li>{this.props.empleado.company }</li>
                            <li>{this.props.empleado.salary}</li>
                            <li>{this.props.empleado.age }</li>
                            <li>{this.props.empleado.phone }</li>
                            <a href=""><li>{this.props.empleado.email}</li></a>
                            <button className="eliminar">Eliminar x</button> 
                            {/* {this.props.details.name} */}

                </div>
            );
        }
    }


    


export default Empleado;