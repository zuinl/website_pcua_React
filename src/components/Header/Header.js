import React from 'react'

import '../../App.css'
import './style.css'

import logoPrefeitura from '../../assets/img/logo_prefeitura.png'
import logoPCUA from '../../assets/img/logo.png'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sports: ["Futebol", "Natação", "Atletismo", "Hidroginástica", "Ritmos", "Karatê", "Taekwondo", 
                "Ballet", "Vôlei", "Handebol", "Ginástica"],
            currentSportPosition: 0,
            currentSport: "Futebol"
        }
    }

    componentDidMount = () => {
        setInterval(this.setSport, 2000)
    }

    setSport = () => {
        let position = this.state.currentSportPosition

        if(position >= (this.state.sports.length -1)) {
            position = 0
        } else {
            position++
        }
        
        let sport = this.state.sports[position]
        this.setState({ currentSportPosition: position, currentSport: sport })
    }


    render() {
        return (
            <div className="header-container">
                <div className="row">
                    <div className="col-4 center">
                        <img src={logoPrefeitura} alt="Prefeitura de Taubaté" width="120"></img>
                    </div>
                    <div className="col-4 center">
                        <img src={logoPCUA} alt="Programa Comunidade em Ação" width="120"></img>
                    </div>
                    <div className="col-4 center">
                        <div className="sports-name">
                            <span className="sports-question">Quer </span><br />
                            <span className="sports-title"><i>{this.state.currentSport}</i><span>?</span></span><br />
                            <span className="sports-exclamation">Tem!</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}