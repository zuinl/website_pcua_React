import React from 'react'

import { connect } from 'react-redux'

import '../../App.css'
import './style.css'

import SportClass from './SportClass/SportClass'
import Loading from '../Loading/Loading'

class Result extends React.Component {
    render() {
        return (
            <div className="results-container">
                <div className="results-box">

                    {this.props.isLoading ? <Loading /> : null}

                    {this.props.results.map(activity => {
                        return (
                            <SportClass {...activity} key={activity.id} />
                        )
                    })}

                    {this.props.results.length === 0 ? 
                    <div className="row center">
                        <div className="col-12">
                            <h4 className="text">Não encontramos resultados para sua busca.</h4>
                        </div>
                    </div> 
                    : null}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ search }) => {
    return {
        results: search.results,
        isLoading: search.isLoading
    }
}

export default connect(mapStateToProps, null)(Result)