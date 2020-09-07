import React, {PureComponent} from 'react'
import './startPage.css'
import {withRouter} from "react-router";

export const StartPage = withRouter(
    class StartPage extends PureComponent {
      state = {
        text: 'SONGBIRD',
      }

      render() {
        return (
            <div
                className="start txt"
                onAnimationEnd={() => {
                  this.setState({text: ''});
                  this.props.history.push('/birds/0')
                }}
            >{this.state.text}</div>
        )
      }
    }
)