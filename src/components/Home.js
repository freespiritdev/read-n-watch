import React from 'react';

import SplashInput from './SplashInput';

const Home = React.createClass({
  render() {
    console.log('hello');
    return (
      <div>
        <div className='jumbotron' id='splashJumbo'>
        <h1>Read and Watch</h1>
        <SplashInput />
        </div>
      </div>
    );
  }
});

export default Home;
