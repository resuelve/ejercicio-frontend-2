import React, { Component } from 'react';
import '../styles/grid.css';
import '../main.css'


class Header extends Component {
        render() {
            return(
                <div>
                    <div>
                        <img id="logo" src="https://api.kobra.red/img/logos/resuelvetudeuda.png" alt="resuelve"/>
                    </div>
                </div>
            );
        }
    }

export default Header;