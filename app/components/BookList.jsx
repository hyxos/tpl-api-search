import React from 'react';
import Book from './Book.jsx';

export default class BookList extends React.Component {
  render() {
    console.log(this.props.books);
    var items = [];
    this.props.books.forEach(function(book) {
      console.log(book.title);
      var lc = book.title.toLowerCase()
      if (lc.indexOf(this.props.filterText.toLowerCase()) === -1) {
        return;
      }
      items.push(<Book title={book.title} author={book.author} />)
    }, this);
    return (
      <div>{items}</div>
    );
  }
}