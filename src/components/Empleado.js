import React, { Component } from 'react';
import { redondeoPrecio } from '../functions'; //Esportar función para los precios
import '../styles/grid.css';
import '../styles/main.css';


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
                            <li className="li-style grid_1">{this.props.empleado.name}</li>
                            <li className="li-style grid_1">{this.props.empleado.company }</li>
                            <li className="li-style grid_1">{this.props.empleado.salary}</li>
                            <li className="li-style grid_1">{this.props.empleado.age }</li>
                            <li className="li-style grid_1">{this.props.empleado.phone }</li>
                            <li className="li-style grid_1"><a href="">{this.props.empleado.email}</a></li>
                            <button className="eliminar"> x</button> 
                            {/* {this.props.details.name} */}

                </div>
            );
        }
    }


    


export default Empleado;