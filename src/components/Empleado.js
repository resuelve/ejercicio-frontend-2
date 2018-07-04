import React, { Component } from 'react';
import { redondeoPrecio } from '../functions'; //Esportar función para los precios
import '../main.css';

class Empleado extends Component {

    render() {
            // const details  = this.props.empleado;
            // const  getFilter  = this.props.empleado.filter(
            //     (empleado) => {
            //         return empleado.name.indexOf(this.state.search) !== -1;
            //     }
            // );
            return(
                <div>
                        <li>
                            <p>{this.props.empleado.name}</p>
                            <p>{this.props.empleado.company }</p>
                            <p>{this.props.empleado.salary}</p>
                            <p>{this.props.empleado.age }</p>
                            <p>{this.props.empleado.phone }</p>
                            <a href=""> <p>{this.props.empleado.email}</p></a>
                            <button>Eliminar x</button> 
                            {/* {this.props.details.name} */}
                        </li>
                    
                </div>
            );
        }
    }


    


export default Empleado;