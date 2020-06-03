import React from 'react'

import '../../App.css'
import './style.css'

export default class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = { searchText: '' }
    }

    search = event => {
        this.setState({ searchText: event.target.value })
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
                            value={this.state.searchText}
                            onChange={this.search} />
                    </div>
                </div>
            </div>
        )
    }
}