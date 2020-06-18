import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  state = {
    searchInput: "",
  }

  updateSearch = (e) => {
    this.setState(
      {searchInput: e.target.value},
      () => this.props.searchMatchingMovies(this.state.searchInput)
    );         
    //this.props.searchMatchingMovies(e.target.value);    
  }

  displayNumberOfResults = () => {
    if (this.state.searchInput.length > 0) {
      return `Found ${this.props.results} ${this.props.results == 1 ? 'movie' : 'movies'} with the query "${this.state.searchInput}"`
    }
  }
  
  render = () => {
    return (
      <header className="header">
        <Link to="/">
          <img
            src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
            alt="netflix-font"
            border="0"
          />
        </Link>
        <div id="navigation" className="navigation">
          <nav>
            <ul>
              <li><Link to="/my-list">My List</Link></li>
            </ul>
          </nav>
        </div>
        <form id="search" className="search">
          <input 
            type="search" 
            placeholder="Search for a title..." 
            value={this.state.searchInput}
            onChange={this.updateSearch} 
          />
          <div className="searchResults">{this.displayNumberOfResults()}</div>
        </form>
      </header>
    )
  }
}

export default Header;
