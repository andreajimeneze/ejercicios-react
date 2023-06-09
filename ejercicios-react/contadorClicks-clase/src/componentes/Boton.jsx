import React from 'react'
import './../stylesheets/Boton.css'
// eslint-disable-next-line react/prop-types

export class Boton extends React.Component {
    render() {
        return (
            <button className= { this.props.isButtonClick ? 'btn-click' : 'btn-reiniciar' } onClick={this.props.manejarclick}>
                {this.props.texto}
            </button>
        )
    }
}
