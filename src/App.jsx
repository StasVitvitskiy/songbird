import './App.css'
import React, {PureComponent} from "react";
import {Header} from './header/header'
import {Main} from "~/main/main";
import {Birds} from "~/birds/birds";
import {FinalPage} from './finalPage/finalPage'
import {connect} from "react-redux";
import {setAudioIndex} from "~/store";
import { createGlobalStyle } from 'styled-components'
import {withRouter} from "react-router";

const GlobalStyles = createGlobalStyle`
  body {
    background: #222
  }
`

export const App = connect(() => ({}), {
  setAudioIndex
})(
    withRouter(
        class App extends PureComponent {
          componentDidMount() {
            this.props.setAudioIndex(
                this.props.match.params.index
            )
          }

          render() {
            return(
                <>
                  <GlobalStyles />
                  <div className='main'>
                    <Header />
                    <FinalPage />
                    <Main />
                    <Birds />
                  </div>
                </>
            )
          }
        }
    )
)