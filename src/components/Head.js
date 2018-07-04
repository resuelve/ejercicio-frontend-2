import React, { Component } from 'react';
import '../styles/grid.css';


class Header extends Component {
        render() {
            return(
                <div className="12">
                    <div className="grid_12">
                        <img id="logo" src="https://api.kobra.red/img/logos/resuelvetudeuda.png" alt="resuelve"/>
                        <h1>Empleados Resuelve</h1>
                    </div>
                </div>
            );
        }
    }

export default Header;