import React from 'react'

import '../../App.css'
import './style.css'

import SportClass from './SportClass/SportClass'

export default class Result extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activities: [
            {
                id: 1,
                title: "Natação",
                time: "09h às 10h",
                project: "Água em Movimento",
                address: "Clube VW",
                instructor: "Alexandre"
            },
            {
                id: 2,
                title: "Natação",
                time: "09h às 10h",
                project: "Água em Movimento",
                address: "Clube VW",
                instructor: "Alexandre"
            },
            {
                id: 3,
                title: "Natação",
                time: "09h às 10h",
                project: "Água em Movimento",
                address: "Clube VW",
                instructor: "Alexandre"
            }
        ] }
    }

    render() {
        return (
            <div className="results-container">
                <div className="results-box">
                    {this.state.activities.map(activity => {
                        return (
                            <SportClass {...activity} key={activity.id} />
                        )
                    })}
                </div>
            </div>
        )
    }
}