import React from 'react';


class SearchBar extends React.Component {

  state = {
    term: '',
  };

  // React's onChange prop in <input> is similar to oninput in HTML
  // Better to avoid arrow functions inside class
  // onInputChange (event) {
  //   console.log(event.target.value);
  // }

  // onFormSubmit has to be either a bound function or an arrow function ...
  // ... as long as we use 'this' inside this function
  // if we dont use 'this' inside onFormSubmit, we might not need to bind/use arrow function
  onFormSubmit = (e) => {
    const { onSearchSubmit } = this.props;
    const { term } = this.state;
    e.preventDefault();
    onSearchSubmit(term);
  }

  render () {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input 
              type="text"
              // below value can be used to render default text or render formatted text from state's term's value
              value = {this.state.term}
              onChange={e => this.setState({ term: e.target.value })} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;