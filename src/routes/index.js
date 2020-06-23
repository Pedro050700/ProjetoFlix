import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Registration from '../pages/Registration';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import SignUp from '../pages/SignUp';

function Routes() { 
    return (
        <Switch>                                                                                                    
            <Route path="/signup" component={SignUp} />
            <Route path="/registration" component={Registration} />
            <Route path="/" exact component={SignIn} />
            <Route path="/dashboard" component={Dashboard} isPrivate />
            <Route path="/profile" component={Profile} isPrivate />
        </Switch>
    );
}
export default Routes;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
