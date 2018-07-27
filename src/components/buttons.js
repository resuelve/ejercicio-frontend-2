import React, { Component } from 'react';
import '../main.css'



class Buttons extends Component {
    handleClick() {
        
      }

        render() {
            return(
                <div >
                    <div >
                        <button onClick={this.props.changeDolar}>Cambio USD</button>
                        <button onClick={this.props.pintarConsola}>Consola</button> 
                    </div>
                </div>
            );
        }
    }

export default Buttons;