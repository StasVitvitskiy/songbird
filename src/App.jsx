import './App.css'
import React, {PureComponent} from "react";
import {Header} from './header/header'
import {Main} from "~/main/main";
import {Birds} from "~/birds/birds";
import {FinalPage} from './finalPage/finalPage'

export class App extends PureComponent {
  componentDidMount() {
    if(String(window.location.href).endsWith('/birds')) {
      document.querySelector('body').style.background = '#222';
    }
  }

  render() {
    return(
        <div className='main'>
          <Header />
          <FinalPage />
          <Main />
          <Birds />
        </div>
    )
  }
}