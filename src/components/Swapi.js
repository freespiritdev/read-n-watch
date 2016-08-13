import React from 'react';
import { ajax } from 'jquery';

const Swapi = React.createClass({
  getInitialState() {
    return {
      person: null,
      id: this.props.params.id
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

    ajax(`http://swapi.co/api/people/${this.state.id}`)
      .done(person => {
        this.setState({person})
      })
      .fail(err => {
        console.log('err:',err);
      })
  },
  componentDidUpdate() {
    ajax(`http://swapi.co/api/people/${this.state.id}`)
      .done(person => {
        this.setState({person})
      })
      .fail(err => {
        console.log('err:',err);
      })
  },
  updatePerson(event) {
    this.setState({id: event.target.value});
  },
  render() {
    if (this.state.person){
      let {name, height, mass, id} = this.state.person;
      return (
        <div>
        <form>
          <div>
            <input type="number" min='1' onChange={this.updatePerson} />
          </div>
        </form>
        <h1>Swapi Swapi</h1>
        <h3>Name: {name}</h3>
        <h3>Height: {height}</h3>
        <h3>Mass: {mass}</h3>
        </div>
      );
    } else {
      return ( <h1>Loading...</h1>);
    }
  }
});

export default Swapi;
