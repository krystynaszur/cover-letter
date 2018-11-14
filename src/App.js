import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import Navigation from './presentational/navigation';
import Creativity from './presentational/creativity';
import Thinking from './presentational/thinking';
import Fun from './presentational/fun';
import Humor from './presentational/humor';
import Passion from './presentational/passion';
import Home from './presentational/home';
import Contact from './presentational/contact';

class App extends Component {
 render() {
   return (
     <Router history={hashHistory}>
      <Route path='/' component={Navigation}>
        <IndexRoute component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/creativity' component={Creativity} />
        <Route path='/thinking' component={Thinking} />
        <Route path='/fun' component={Fun} />
        <Route path='/humor' component={Humor} />
        <Route path='/passion' component={Passion} />
        <Route path='*' component={PageNotFound} />
    </Route>
     </Router>
   )
 }
}

const PageNotFound = () => <h1>404 Not Found</h1>;

export default App