let React = require('react');
let ReactDOM = require('react-dom');
let Main = require('Main');
let Weather = require('Weather');
let About = require('About');
let Examples = require('Examples');
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
