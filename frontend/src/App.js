import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, ImplicitCallback } from '@okta/okta-react';
import Home from './Components/Home/Home';
import MessageList from './Components/MessageList/MessageList'
import './App.css';

const oktaConfig = {
  issuer: `${process.env.REACT_APP_OKTA_DOMAIN}/oauth2/default`,
  redirectUri: `${window.location.origin}/implicit/callback`,
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
  pkce: true
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security {...oktaConfig}>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/messageList' component={MessageList} />
          <Route path='/implicit/callback' component={ImplicitCallback}/>
        </Security>
      </Router>
    );
  }
}

export default App;
