import React, {PureComponent} from 'react'
import './startPage.css'

export class StartPage extends PureComponent {
  componentDidMount() {
    document.querySelector('.start').addEventListener('animationstart', (e) => {
      document.querySelector('.start').innerText = 'SONGBIRD';
    })
    document.querySelector('.start').addEventListener("animationend", (e) => {
      document.querySelector('.start').innerText = '';
      window.location = '/birds'
    }, false);
  }

  render() {
    return <div className='start txt'/>
  }
}