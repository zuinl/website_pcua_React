import React from 'react'

import '../../../App.css'
import './style.css'

export default props => {
    const detailsLink = "http://www.taubate.sp.gov.br/secretarias/seel/sistema/verLista.php?id="
    return (
        <div className="class-container center">
            <div className="row">
                <div className="col-12">
                    <p className="text class-title">{props.title}</p>
                    <p className="text class-time">{props.time}</p>
                    <p className="text"><b>Projeto: </b>{props.project}</p>
                    <p className="text"><b>Local: </b>{props.address}</p>
                    <p className="text"><b>Instrutor: </b>{props.instructor}</p>

                    <a href={detailsLink + props.id} target="_blank" rel="noopener noreferrer">
                        <button className="details-button">Mais...</button>
                    </a>
                </div>
            </div>
        </div>
    )
}