import './App.css'
import React, {PureComponent} from "react";
import {Header} from './header/header'

export class App extends PureComponent {
  render() {
    return <div className="main">
          <Header />
    </div>
  }
}