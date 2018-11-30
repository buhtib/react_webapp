import React, { Component } from 'react';

import './App.scss';

import AppHeader from './common/header/App-header';
import AppNav  from './common/nav/App-nav';
import AppFooter from './common/footer/App-footer'

  class App extends Component {
    render(){
        return (
            <div id="app">
                <AppHeader />
                <AppNav />


                <AppFooter />
            </div>
        )
    }
  }

export default App;
