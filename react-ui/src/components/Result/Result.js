import React from 'react'

import { connect } from 'react-redux'
import { search } from '../../redux/actions/Sports'

import '../../App.css'
import './style.css'

import SportClass from './SportClass/SportClass'
import Loading from '../Loading/Loading'

class Result extends React.Component {

    componentDidMount = () => {
        this.props.search()
    }

    render() {
        return (
            <div className="results-container">
                <div className="results-box">

                    {this.props.isLoading ? <Loading /> : null}

                    {this.props.sports.map(activity => {
                        return (
                            <SportClass {...activity} key={activity.id} />
                        )
                    })}

                    {this.props.sports.length === 0 ? 
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

const mapStateToProps = ({ sports }) => {
    return {
        sports: sports.sports,
        isLoading: sports.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        search: () => dispatch(search())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result)