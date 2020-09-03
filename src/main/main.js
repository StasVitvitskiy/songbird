import React, {PureComponent} from 'react'
import "./main.css"
import bird from '../media/bird.jpg'
import {Player} from "~/audioPlayer/audio";
import {connect} from "react-redux";

export const Main = connect((state => state))(
    class Main extends PureComponent {
      render() {
        const {selectedBird, isAnswerCorrect} = this.props
        return <div className='bird-block rounded jumbotron'>
          <div className='bird'>
            <img className='bird-img' src={bird} alt=""/>
          </div>
          <div className='margin-left-40px bird-info bird-block'>
            <ul className="list-group list-group-items">
              <li className="list-group-item"><h3>{isAnswerCorrect ? selectedBird.name: '******'}</h3></li>
              <li className="list-group-item">
                <Player setAudioSrcInStore />
              </li>
            </ul>
          </div>
        </div>
      }
    }
)