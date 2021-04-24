import React from 'react';
import './practise/practise.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './home';
import About from './about';
import ContextApi from './practise/practise10';
import Error from './error';
import Person from './person';

import Navbar from './navbar';

const ReactRouterSetup = () => {
    return <Router>

    <Navbar />

    <Switch>

    <Route exact path="/">
    <Home />
    </Route>

    <Route path="/about">
    <About />
    </Route>

    <Route path="/people">
    <ContextApi />
    </Route>

    <Route path="/person/:id" children={<Person />}></Route>

    <Route path="*">
    <Error />
    </Route>
    
    </Switch>

    </Router>
};

export default ReactRouterSetup;
