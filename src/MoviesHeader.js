import React from 'react';
import Movie from './Movie';

class MoviesHeader extends React.Component {

  displayMovie = (title) => {
    if (title === "My List") { // displaying movies from My list
      return (this.props.movies.map(movie => (
        <Movie key={movie.id} movie={movie} updateList={this.props.updateList} />
      )))
    } else { //displaying movies by each category
        return (
          this.props.movies.filter(notClasifiedMovie => notClasifiedMovie.genre_ids.includes(this.props.genre.id)).map(movie => (
            <Movie key={movie.id} movie={movie} updateList={this.props.updateList} />
          ))
        )
    }    
  }

  render = () => {
    return (  
      <div className="titleList">
        <div className="title">
          <h1>{this.props.title}</h1>
          <div className="titles-wrapper">
            {this.props.movies.map(movie => (
              <Movie key={movie.id} movie={movie} updateList={this.props.updateList} />
            ))}
          </div>
        </div>
      </div>
    )
  }  
}

export default MoviesHeader;