import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {
  constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
        this.search = this.search.bind(this)
        this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
    }

    search() {
        this.props.onSearch(this.state.searchTerm);
    }

    handleSearchTermChange(event) {
        this.setState({searchTerm: event.target.value })
    }

    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleSearchTermChange} />
                <a onClick={this.search}>SEARCH</a>
            </div>
        );
    }
}


export default SearchBar;
