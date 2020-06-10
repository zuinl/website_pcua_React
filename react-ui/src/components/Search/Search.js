import React from 'react'

import { connect } from 'react-redux'
import { search, setLoading } from '../../redux/actions/Sports'

import '../../App.css'
import './style.css'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = { searchText: '' }
        this.onSearch = this.onSearch.bind(this)
    }
    
    onSearch = event => {
        this.props.setLoading(true)
        this.setState({ searchText: event.target.value })
        this.props.search(this.state.searchText)
        this.props.setLoading(false)
    }

    render() {
        return (
            <div className="search-container">
                <div className="row">
                    <div className="col-12 center">
                        <input className="search-input" 
                            placeholder="Como quer se movimentar?" 
                            type="text" 
                            name="search-text"
                            id="search-text"
                            value={this.props.searchText}
                            onChange={this.onSearch} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        search: searchText => dispatch(search(searchText)),
        setLoading: boolean => dispatch(setLoading(boolean))
    }
}

export default connect(null, mapDispatchToProps)(Search)