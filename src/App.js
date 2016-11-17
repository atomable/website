import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router'

import './App.css';
import Doc from './Doc';
import Home from './Home';

const App = (props) => props.children;

const AppRouter = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="docs" component={Doc}>
                <Route path=":id" component={Doc} />
            </Route>
        </Route>
    </Router>
);

export default AppRouter;
