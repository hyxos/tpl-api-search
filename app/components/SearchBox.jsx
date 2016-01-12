import React from 'react';

export default class SearchBox extends React.Component {
  
  handleChange = () => {
    this.props.onUserInput(
      this.refs.filterTextInput.value
      )
  }

  render() {
    return (
      <form>
        <label htmlFor="search"></label>
        <input className="input-block" 
                type="text" 
                id="search"
                placeholder="search books" 
                ref="filterTextInput"
                value={this.props.filterText}
                onChange={this.handleChange}
                />
      </form>
    );
  }
}
