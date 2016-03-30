import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import * as common from 'chain-reaction.common';

import Home from '../Home';
import Sample from '../Sample';
import Login from '../Login';
import Memes from '../Memes';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.requireAuth = this.requireAuth.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      unsubscribe: this.props.store.subscribe(this.handleChange)
    }
  }

  handleChange() {
    // Persist to localStorage
    var user = this.props.store.getState().user;
    if (user.status === 'authenticated') {
      localStorage['CR_PROFILE'] = JSON.stringify(user);
    } else {
      delete localStorage['CR_PROFILE'];
    }
  }

  componentWillMount() {
    if (localStorage['CR_PROFILE']) {
      var user = JSON.parse(localStorage['CR_PROFILE']);
      this.props.store.dispatch(common.actions.receiveLogin(user.email, {data: user.profile}));
      //browserHistory.replace('/sample');
    }
  }

  componentWillUnmount() {
    this.state.unsubscribe();
  }

  requireAuth(nextState, replace) {
    var store = this.props.store;
    if (store.getState().user.status !== 'authenticated') {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/sample" component={Sample} onEnter={this.requireAuth}></Route>
        <Route path="/memes" component={Memes} onEnter={this.requireAuth}></Route>
        <Route path="*" component={Home}></Route>
      </Router>
    );
  }
}