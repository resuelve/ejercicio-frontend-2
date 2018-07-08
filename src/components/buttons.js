import React, { Component } from 'react';
import '../styles/grid.css';


class Buttons extends Component {
        render() {
            return(
                <div className="12">
                    <div className="grid_12">
                        <button>Cambio USD</button>
                        <button onClick={
                            {/* ()=> {()} */}
                        }>Consola</button>
                    </div>
                </div>
            );
        }
    }

export default Buttons;