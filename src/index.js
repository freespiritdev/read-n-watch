import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './css/style.css';

import App from './components/App'
import Home from './components/Home'
import SearchPage from './components/SearchPage'

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='/search(/:id)' component={SearchPage}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
