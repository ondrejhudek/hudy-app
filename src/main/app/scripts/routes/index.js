import React from 'react'
import { Route, IndexRoute, Redirect, Link } from 'react-router'
import auth from '../auth/index'

import Layout from '../layouts/Layout'
import Sidebar from '../components/Siderbar'

import HomeView from '../views/Home'
import LostPasswordView from '../views/LostPassword'
import DashboardView from '../views/Dashboard'
import SampleView from '../views/Sample'
import NotFoundView from '../views/NotFound'
import LogoutComponent from '../views/Logout'

const App = React.createClass({
    getInitialState() {
        return {
            loggedIn: auth.loggedIn()
        }
    },

    updateAuth(loggedIn) {
        this.setState({
            loggedIn: loggedIn
        });
    },

    componentWillMount() {
        auth.onChange = this.updateAuth;
        auth.login();
    },

    render() {
        return (
            <div>
                <Sidebar/>
                {this.props.children || <p>You are {!this.state.loggedIn && 'not'} logged in.</p>}
            </div>
        )
    }
});

function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({
            pathname: '/signin',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}

function notRequireAuth(nextState, replace) {
    if (auth.loggedIn()) {
        replace({
            pathname: '/',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}

export default (
    <Route path='/' component={Layout}>
        <IndexRoute component={DashboardView} onEnter={requireAuth}/>
        <Route path='signin' component={HomeView} onEnter={notRequireAuth}/>
        <Route path="signout" component={LogoutComponent}/>
        <Route path='lost-password' component={LostPasswordView} onEnter={notRequireAuth}/>
        <Route path='dashboard' component={DashboardView} onEnter={requireAuth}/>
        <Route path='sample' component={SampleView} onEnter={requireAuth}/>
        <Route path='404' component={NotFoundView}/>
        <Redirect from='*' to='/404'/>
    </Route>
)
