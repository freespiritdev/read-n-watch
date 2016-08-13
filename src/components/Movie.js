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
          <h4>{Plot}</h4>
          <h4>Director: {Director}</h4>
          <h4>Writer: {Writer}</h4>
          <h4>Rated: {Rated}</h4>
          <h4>Genre: {Genre}</h4>
          <h4>Rating: {imdbRating}/10</h4>
        </div>
      );
    } else {
      return ( <h1>Loading...</h1>);
    }
  }
});

export default Movie;
