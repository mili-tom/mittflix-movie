import React from 'react';
import * as MovieAPI from './MovieAPI';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import MoviesHeader from './MoviesHeader';

class App extends React.Component {
  state = {
    movies: [],
    genres: [],
  }
  
  componentDidMount = () => {
    this.getDataFromAPI();
  }

  getDataFromAPI = () => {
    MovieAPI.genres()
    .then(genres => {        
      genres.sort((a,b) => a.name.localeCompare(b.name)); //source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
      MovieAPI.getAll()
        .then(movies => {
          this.setState({genres, movies})
        })      
    })
  }

  updateList = (movie) => {
    if (movie.my_list === false) {
      MovieAPI.addToList(movie)
        .then(() => {
          this.setState(prevState => {
            const movieIndex = prevState.movies.findIndex(movieInState => movieInState === movie);//find position of existing movie in state        
            const movieClone = {...prevState.movies[movieIndex]}; //make a clone of it          
            movieClone.my_list = true; //change the property (my_list) of the clone
            const stateMoviesClone = [...prevState.movies]; //clone the previous state          
            stateMoviesClone.splice(movieIndex, 1, movieClone); //replace the original movie with clone
            return {movies: stateMoviesClone} //return a new state
          })
        })
    } else if (movie.my_list === true) {
      MovieAPI.removeFromList(movie)
        .then(() => {
          this.setState(prevState => {
            const movieIndex = prevState.movies.findIndex(movieInState => movieInState === movie); //find position of existing movie in state
            const movieClone = {...prevState.movies[movieIndex]}; //make a clone of it
            movieClone.my_list = false; //change the property (my_list) of the clone
            const stateMoviesClone = [...prevState.movies]; //clone the previous state
            stateMoviesClone.splice(movieIndex, 1, movieClone); //replace the original movie with clone
            return {movies: stateMoviesClone} //return a new state
          })
        })
    }
  }

  searchMatchingMovies = (query) => {
    console.log(query);
    if (query === "") {
      this.getDataFromAPI();          
    } else {      
      this.setState(() => {
        const matchedMovies = this.state.movies.filter(movie => 
          movie.title.toLowerCase().includes(query.toLowerCase()) || movie.overview.toLowerCase().includes(query.toLowerCase())
        ) //filtering the state (creating new array)        
        return {movies: matchedMovies, results: matchedMovies.length} //return a new state composed of that filtered array and number of founded movies
      })
    }        
  }

  clasifyMovies = (genre) => {
    const moviesByGenre = this.state.movies.filter(movie => movie.genre_ids.includes(genre.id));//filtering the state, to get movies by each genre
    if (moviesByGenre.length > 0) { //display only genres and their movies, if they have movies
      return ( 
        <MoviesHeader key={genre.id} title={genre.name} movies={moviesByGenre} genre={genre} updateList={this.updateList} />
      )
    }
  }

  render = () => {
    return (
      <>
        <Header searchMatchingMovies={this.searchMatchingMovies} movies={this.state.movies} results={this.state.results}/>
        <Switch>
          <Route exact path="/">
            {this.state.genres.map(genre => this.clasifyMovies(genre))}        
          </Route>

          <Route path="/my-list">
            <MoviesHeader title="My List" key="my-list" movies={this.state.movies.filter(movie => movie.my_list === true)} updateList={this.updateList} />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
