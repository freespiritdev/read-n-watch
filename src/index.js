import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './css/style.css';

import App from './components/App'

import Swapi from './components/Swapi'


render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path="swapi/:id" component={Swapi}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
