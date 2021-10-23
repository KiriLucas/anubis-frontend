import React, { useEffect } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import { useHistory } from 'react-router-dom'

import LandingPage from "./LandingPage";

const ProtectedRoute = ({ children }) => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) history.push('/')
    }, [])

    return children
}

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/dashboard" component={() => <ProtectedRoute><Dashboard /></ProtectedRoute>} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;