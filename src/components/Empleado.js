import React, { Component } from 'react';
import { redondeoPrecio } from '../functions'; //Esportar función para los precios
import '../main.css'

class Empleado extends Component {

    render() {
        {
            const { value, onChange } = this.props; 
    
            return this.state.editing ?
                <input ref='input' value={value} onChange={e => onChange(e.target.value)} onBlur={() => this.onBlur()} /> : 
                <div onClick={() => this.onFocus()}>{value}</div>
        }
    
        onFocus() {
            this.setState({ editing: true }, () => {
                this.refs.input.focus();
            });
        }
    
        onBlur() {
            this.setState({ editing: false });
        }
    }






        const getEmployeesData = this.props.empleado;
        const salaryEmployees = this.props.empleado.salary
            return(
                <tr className="grid_12" onChange={this.props.changeItem}>
                            <td>{getEmployeesData.name}</td>
                            <td>{getEmployeesData.company }</td>
                            <td>{redondeoPrecio (salaryEmployees)} MXN</td>
                            {/* <td>{(salaryEmployees/20.50).toFixed(2)}USD</td> */}
                            <td>{getEmployeesData.age }</td>
                            <td>{getEmployeesData.phone }</td>
                            <td><a href="">{getEmployeesData.email}</a></td>
                            <td><button onClick={this.props.removeItem}>x</button>
                            
                            {/* {this.props.details.name} */}
                </tr>

            

               
            );
        }
    }


    


export default Empleado;