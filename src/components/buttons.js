import React, { Component } from 'react';
import '../styles/grid.css';


class Buttons extends Component {
    handleClick() {
        
      }

        render() {
            return(
                <div className="12">
                    <div className="grid_12">
                        <button>Cambio USD</button>
                        <button onClick={this.props.pintarConsola}>Consola</button>
                    </div>
                </div>
            );
        }
    }

export default Buttons;