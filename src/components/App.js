import React from 'react'
import { Link } from 'react-router'

const App = React.createClass({
  render() {
    return (
      <div className='container'>
        <Link to='/'><button className='btn btn-default'>Home</button></Link>
        <Link to='/swapi/1'><button className='btn btn-default'>Swapi</button></Link>
        {this.props.children}

      </div>
    );
  }
});

export default App;
