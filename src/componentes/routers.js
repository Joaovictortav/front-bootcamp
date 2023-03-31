import React from 'react';
import {Router, Route, Switch, BrowserRouter} from 'react-router-dom';

import Login from '../app/pages/login/login';
import Home from '../app/pages/home/home';
import { history } from '../history';
import PrivateRouter from './privateRouter';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login">
                <Login/>
            </Route>
            <Route exact path="/home">
                <Home/>
            </Route>
        </Switch>
    </BrowserRouter>
)

export default Routes