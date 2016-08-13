import React from 'react';
import { ajax } from 'jquery';

const Movie = React.createClass({
  getInitialState() {
    return {
      movieTitle: 'the-notebook',
      movieObj: null
    }
  },
  componentDidMount() {
    ajax(`http://www.omdbapi.com/?t=${this.state.movieTitle}`)
      .done(movie => {
        this.setState({movie})
      })
      .fail(err => {
        console.log('err:',err);
      })
  },
  render() {
    //{Writer.split(', ')[0]}
    if (this.state.movie){
      let {Title, Year, Rated, Genre, Director, Writer, Plot, Poster, imdbRating, imdbID, Type } = this.state.movie;
      return (
        <div>
          <img src={Poster} />
          <h3>{Title} ({Year})</h3>
          <p>{Plot}</p>
          <h3>Director: {Director}</h3>
          <h3>Writer: {Writer}</h3>
          <h3>Rated: {Rated}</h3>
          <h3>Genre: {Genre}</h3>
          <h3>Rating: {imdbRating}/10</h3>
        </div>
      );
    } else {
      return ( <h1>Loading...</h1>);
    }
  }
});

export default Movie;
