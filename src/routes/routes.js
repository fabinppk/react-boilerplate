import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '_routes/privateRoute';
import Index from '_pages/index';
import Login from '_pages/login';
import Users from '_pages/users';
import User from '_pages/users/user';
import Hotel from '_pages/hotel';
import Erro from '_pages/erro';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/dashboard" component={Index} />
                <Route exact path="/hotel/:city/:state/:uniqueId" component={Hotel} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute path="/users/:userId">
                    <User />
                </PrivateRoute>
                <PrivateRoute path="/users">
                    <Users />
                </PrivateRoute>
                <Route component={Erro} />
            </Switch>
        </Router>
    );
}
