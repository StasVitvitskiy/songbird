import React, {PureComponent} from 'react'
import "./main.css"
import bird from '../media/bird.jpg'
import {Player, PlayerApp} from "~/audioPlayer/audio";

export class Main extends PureComponent {
  render() {
    return <div className='bird-block rounded jumbotron'>
      <div className='bird'>
        <img src={bird} alt=""/>
      </div>
      <div className='margin-left-40px bird-info bird-block'>
        <ul className="list-group list-group-items">
          <li className="list-group-item"><h3>Дятел</h3></li>
          <li className="list-group-item">
            <Player />
          </li>
        </ul>
      </div>
    </div>
  }
}