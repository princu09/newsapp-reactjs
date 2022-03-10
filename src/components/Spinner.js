import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className="loading">
                <img src={loading} alt="loading" width={40} />
            </div>
        )
    }
}

export default Spinner