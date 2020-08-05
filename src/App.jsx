import './App.css'
import React, {PureComponent} from "react";
import {Header} from './header/header'
import {Main} from "~/main/main";
import {Birds} from "~/birds/birds";
import {Route} from 'react-router-dom';

export class App extends PureComponent {
  render() {
    return <div className="main">
          <Route path ='/'>
            <Header />
            <Main />
            <Birds />
          </Route>
    </div>
  }
}