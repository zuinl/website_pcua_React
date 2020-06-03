import React from 'react'

import '../../../App.css'
import './style.css'

export default props => {
    return (
        <div className="class-container center">
            <div className="row">
                <div className="col-12">
                    <p className="text class-title">{props.title}</p>
                    <p className="text class-time">{props.time}</p>
                    <p className="text"><b>Projeto: </b>{props.project}</p>
                    <p className="text"><b>Local: </b>{props.address}</p>
                    <p className="text"><b>Instrutor: </b>{props.instructor}</p>
                </div>
            </div>
        </div>
    )
}