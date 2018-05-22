import React, { Component } from 'react';

// if SearchBar have a state, and the state changes, the render function will rerun

class SearchBar extends Component {
    constructor(props) {
        super(props); // t

        this.state = { term: '' };
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={(event) => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;