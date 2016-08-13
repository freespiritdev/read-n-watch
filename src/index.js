import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './css/style.css';

import App from './components/App'
import Home from './components/Home'

// import API from './components/API'

// import Books from './components/books.js'


render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>,
  document.getElementById('root')
);

{/* <Route path="api/:id" component={API}/> */}
{/* <Route path="books/:id" component={Books}/> */}
