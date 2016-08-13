import React from 'react';
import { ajax } from 'jquery';

const API = React.createClass({
  getInitialState() {
    return {
      person: null,
      movieTitle: 'the-notebook'
    }
  },
  componentDidMount() {

    // fetch('http://swapi.co/api/people/1')
    //   .then(Response => {
    //     return Response.json()
    //   })
    //   .then(data => {
    //     console.log('data:', data)
    //   })
    //   .catch(err => {
    //     console.log('err:', err);
    //   })

    ajax(`http://www.omdbapi.com/?t=${this.state.movieTitle}`)
      .done(movie => {
        this.setState({movie})
      })
      .fail(err => {
        console.log('err:',err);
      })
  },
  // componentDidUpdate() {
  //   ajax(`http://swapi.co/api/people/${this.state.id}`)
  //     .done(person => {
  //       this.setState({person})
  //     })
  //     .fail(err => {
  //       console.log('err:',err);
  //     })
  // },
  // updatePerson(event) {
  //   this.setState({id: event.target.value});
  // },
  render() {
    if (this.state.movie){
      let {Title, Year, Rated, Released, Runtime, Genre, Writer} = this.state.movie;
      return (
        <div>
        <form>
          <div>
            <input type="number" min='1' onChange={this.updatePerson} />
          </div>
        </form>
        <h1>API API</h1>
        <h3>Title: {Title}</h3>
        <h3>Year: {Year}</h3>
        <h3>Writer: {Writer.split(', ')[0]}</h3>
        </div>
      );
    } else {
      return ( <h1>Loading...</h1>);
    }
  }
});

export default API;
