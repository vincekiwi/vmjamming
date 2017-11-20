import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {
  constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            touched: {
              searchTerm: false
            },
        };
        this.search = this.search.bind(this);
        this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.canBeSubmitted = this.canBeSubmitted.bind(this);
    }

    search() {
        if (this.state.searchTerm.length > 0) {
          this.props.onSearch(this.state.searchTerm);
        }
    }

    handleSearchTermChange(event) {
        this.setState({searchTerm: event.target.value })
    }

    handleSubmit = (event) => {
      if (!this.canBeSubmitted()) {
        event.preventDefault();
        return;
      }
    }

    canBeSubmitted() {
      return (
        this.state.searchTerm.length > 0
      );
    }

    handleEnter(event) {
      if (event.key === 'Enter' && this.state.searchTerm.length > 0) {
        this.search();
      }
    }

    render() {
        const isEnabled = this.canBeSubmitted();
        return (
          <div onSubmit={this.handleSubmit} className="SearchBar">
            <input
              type="text"
              placeholder="Enter A Song, Album, or Artist"
              value={this.state.searchTerm}
              onChange={this.handleSearchTermChange}
              onKeyDown={this.handleEnter}
            />
            <a onClick={this.search} className={!isEnabled ? "disabled" : ""}>SEARCH</a>
          </div>
        );
      }
}


export default SearchBar;
