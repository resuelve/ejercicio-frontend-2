import React, { Component } from 'react';
import Empleado from './Empleado';


class ListaDeEmpelados extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        };
    }

    updateSearch(e) {
        this.setState ({ 
            search: e.target.value}
        )
    }
    render() {
        let  filteredEmployees = this.props.employees.filter(
           (empleado) => {
            return empleado.name.toLowerCase().indexOf(this.state.search) !== -1; // !== -1 => Si no puedes encontrar este particula especifica, entonces no retornes nada 
            
            }
        );
        return (
            <div>
            <input placeholder="Busqueda" type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />                        
                <ul>
                    {filteredEmployees.map((empleado) => {
                        return <Empleado key={empleado.id}  empleado={empleado} />
                        })
                    }
                </ul>
            </div>
        );
      }
    }


    export default ListaDeEmpelados;