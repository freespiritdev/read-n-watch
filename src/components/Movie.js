import React from 'react';
import { ajax } from 'jquery';

const Movie = React.createClass({
  getInitialState() {
    return {
      movieTitle: this.props.title,
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
  // // updateTitle() {
  // //   console.log('this.state.movieTitle',this.state.movieTitle);
  // //   this.setState({movieTitle: this.props.title});
  // // },
  // ShouldComponentUpdate() {
  //   console.log('shouldcomponentupdate',this.state.movieTitle);
  //   this.setState({movieTitle: this.props.title});
  //   // if (this.state.movieTitle !== this.props.title){
  //   //   console.log('updating title soon');
  //   //   this.updateTitle();
  //   // }
  // },
  render() {
    //{Writer.split(', ')[0]}
    if (this.state.movie){
      let {Title, Year, Rated, Genre, Director, Writer, Plot, Poster, imdbRating, imdbID, Type } = this.state.movie;
      return (
        <div className='templateDiv well'>
          <div className='templatePic'>
            <img src={Poster}  className='picture'/>
          </div>
          <h3>{Title} ({Year})</h3>
          <p>{Plot}</p>
          <h3>Director: {Director}</h3>
          <h3>Writer(s): {Writer}</h3>
          <h3>Rated: {Rated}</h3>
          <h3>Genre: {Genre}</h3>
          <h3>Rating: {imdbRating}/10</h3>
          <div className='linkButton'>
            <a href={`http://www.imdb.com/title/${imdbID}`}><img src='http://cdn.bleedingcool.net/wp-content/uploads/2014/05/IMDb.png' id='imdbBtn'/></a>
          </div>
        </div>
      );
    } else {
      return ( <h1>Loading...</h1>);
    }
  }
});

export default Movie;
