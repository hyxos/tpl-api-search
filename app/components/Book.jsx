import React from 'react';

export default class Book extends React.Component {
  render() {
    var title = this.props.title
    var author = this.props.author
    return (
      <div className="card-panel white-text indigo">{title} by {author}</div>
    )
  }
}
