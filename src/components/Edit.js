import React, { Component } from 'react';
//import { redondeoPrecio } from '../functions'; //Esportar función para los precios



class Empleado extends Component {

    render() {
        const getEmployeesData = this.props.empleado;
            return(
                <tr className="grid_12">
                            <td>{getEmployeesData.name}</td>
                            <td>{getEmployeesData.company }</td>
                            <td>{ getEmployeesData.salary} MXN</td>
                            <td>{getEmployeesData.age }</td>
                            <td>{getEmployeesData.phone }</td>
                            <td><a href="#">{getEmployeesData.email}</a></td>
                            <td id="delete"><button id="style-x" onClick={this.props.removeItem}>x</button> <button>edit</button></td>
                            {/* {this.props.details.name} */}
                </tr>

               
            );
        }
    }


    


export default Empleado;