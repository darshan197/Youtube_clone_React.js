import React , { Component } from 'react';

//this is functional component , takes something in and gives out JSX
// const searchBar = () => {
//   return <input />;
// }

//this is class based component which is required to do store information
//and introspect later
class SearchBar extends Component{
  constructor(props){
    super(props)

    this.state = { term: '' };
  }

  //methods should always return something
  render() {
    return (
      <div className="search-bar">

        <input
          value = { this.state.term }
          onChange={(event) => this.onInputChange(event.target.value)}/>
      </div>
    );
  }

  onInputChange(term){
    this.setState({term} );
    this.props.onSearchTermChange(term);
  }

  // onInputChange(event) {
  //   console.log(event.target.value);
  //   return
  // }
}


export default SearchBar;
