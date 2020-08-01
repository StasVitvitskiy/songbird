import './App.css'
import React, {PureComponent} from "react";
import {Header} from './header/header'
import {Main} from "~/main/main";
import {Birds} from "~/birds/birds";

export class App extends PureComponent {
  render() {
    return <div className="main">
          <Header />
          <Main />
          <Birds />
    </div>
  }
}