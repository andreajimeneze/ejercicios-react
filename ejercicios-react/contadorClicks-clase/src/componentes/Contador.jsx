import React from 'react'
import '../stylesheets/Contador.css'

export class Contador extends React.Component {
    render() {
        return (
            <div className="contador">
                {this.props.numClicks}
            </div>
        )
    }
}
