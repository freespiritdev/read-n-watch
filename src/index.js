import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './css/style.css';


import App from './components/App'
import Home from './components/Home'
import SearchPage from './components/SearchPage'

// import Movie from './components/Movie'
// import Book from './components/Book'


render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      {/* <IndexRoute component={Home}/> */}
      <IndexRoute component={SearchPage}/>
    </Route>
  </Router>,
  document.getElementById('root')
);


{/* <Route path="Movie/:id" component={Movie}/> */}
{/* <Route path="book/:id" component={Book}/> */}
