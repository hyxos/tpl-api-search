import React from 'react';
import SearchBox from './SearchBox.jsx';
import BookList from './BookList.jsx';


export default class FilterableBookList extends React.Component {

  state = {filterText: ''}

  handleUserInput = (filterText) => {
    this.setState({
      filterText: filterText
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <SearchBox filterText={this.props.filterText} onUserInput={this.handleUserInput} />
            <BookList books={this.props.books} filterText={this.state.filterText} />
          </div>
        </div>
      </div>
    )
  }
}