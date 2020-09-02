import React, {PureComponent} from 'react'
import './startPage.css'

export class StartPage extends PureComponent {
  state = {
    text: 'SONGBIRD',
  }

  render() {
    return (
        <div
            className="start txt"
            onAnimationEnd={() => {
              this.setState({text:''});
              window.location = '/birds/0'
            }}
        >{this.state.text}</div>
    )
  }
}