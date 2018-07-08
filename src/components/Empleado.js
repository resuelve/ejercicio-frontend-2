import React, { Component } from 'react';
//import { redondeoPrecio } from '../functions'; //Esportar función para los precios
import '../styles/grid.css';
import '../styles/main.css';


class Empleado extends Component {

    render() {
        const getEmployeesData = this.props.empleado;
            return(
                <tr className="grid_12">
                            <td className="td-style grid_2">{getEmployeesData.name}</td>
                            <td className="td-style grid_2">{getEmployeesData.company }</td>
                            <td className="td-style grid_2">{ getEmployeesData.salary} MXN</td>
                            <td className="td-style grid_1">{getEmployeesData.age }</td>
                            <td className="td-style grid_2">{getEmployeesData.phone }</td>
                            <td className="td-style grid_2"><a href="#">{getEmployeesData.email}</a></td>
                            <td id="delete" className="grid_1"><button id="style-x" onClick={this.props.removeItem}>x</button></td>
                            {/* {this.props.details.name} */}
                </tr>
            );
        }
    }


    


export default Empleado;