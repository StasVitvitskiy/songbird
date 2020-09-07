import './App.css'
import React, {PureComponent} from "react";
import {Header} from './header/header'
import {connect} from "react-redux";
import {setAudioIndex} from "~/store";
import { createGlobalStyle } from 'styled-components'
import {withRouter} from "react-router";

const GlobalStyles = createGlobalStyle`
  body {
    background: #222;
    overflow: auto;
  }
`

export const App = connect(state => state, {
  setAudioIndex
})(
    withRouter(
        class App extends PureComponent {
          componentDidMount() {
            const {match: {params}, levelsCompleted, setAudioIndex, history} = this.props
            const audioIndex = +params.index

            if (audioIndex === levelsCompleted) {
              setAudioIndex(audioIndex)
            } else {
              history.push("/birds/0")
            }
          }

          render() {
            const {audioIndex, children} = this.props
            return(
                <>
                  <GlobalStyles />
                  <div className='main'>
                    <Header />
                    {isNaN(audioIndex) ? null : children}
                  </div>
                </>
            )
          }
        }
    )
)