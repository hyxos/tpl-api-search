import React from 'react';
import Book from './Book.jsx';
import FilterableBookList from './FilterableBookList.jsx';
import BookList from './BookList.jsx';
import SearchBox from './SearchBox.jsx';

export default class App extends React.Component {
  render() {
    return <FilterableBookList books={BOOKS} />;
  }
};

var BOOKS = [
{title: 'Harry Potter and the Chamber of Secrets', author: 'J.K. Rowling'},
{title: 'The Lord of the Rings: Fellowship of the Ring', author: 'J.R.R. Tolkien'},
{title: 'Dune', author: 'Frank Herbert'},
{title: 'Lord of the Flies', author: 'William Golding'},
{title: 'Snow Crash', author: 'Neal Stephenson'},
{title: 'Neuromancer', author: 'William Gibson'},
{title: 'The Black Swan', author: 'Nicholas Taleb'},
{title: 'The Crucible', author: 'Arthur Miller'},
{title: 'Essentialism', author: 'Greg McKeown'},
{title: 'Breakfast of Champions', author: 'Kurt Vonnegut'}
]