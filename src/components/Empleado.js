import React, { Component } from 'react';
import { redondeoPrecio } from '../functions'; //Esportar función para los precios
import '../styles/grid.css';
import '../styles/main.css';


class Empleado extends Component {

    render() {
            return(
                <div className="grid_12">
                            <td className="td-style grid_2">{this.props.empleado.name}</td>
                            <td className="td-style grid_2">{this.props.empleado.company }</td>
                            <td className="td-style grid_2">{redondeoPrecio(this.props.empleado.salary)} MXN</td>
                            <td className="td-style grid_1">{this.props.empleado.age }</td>
                            <td className="td-style grid_2">{this.props.empleado.phone }</td>
                            <td className="td-style grid_2"><a href="#">{this.props.empleado.email}</a></td>
                            <button className="eliminar">x</button> 
                            {/* {this.props.details.name} */}
                </div>
            );
        }
    }


    


export default Empleado;