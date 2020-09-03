import React, {PureComponent} from 'react'
import './birds.css'
import bird from '../media/bird.jpg'
import {Player} from "~/audioPlayer/audio";
import birdsData from "./birdsData";
import win from '../media/win.mp3';
import lose from '../media/lose.mp3';
import perfect from '../media/ultimateWin.mp3'
import {connect} from "react-redux";
import {setBirdsData, setSelectedBird} from "~/store";

function getCorrectCircleClassName(
    entry,
    correctAnswer,
    incorrectAnswers,
    isAudioPlayed,
    isAnswerCorrect,
) {
  if(isAudioPlayed) {
    if (incorrectAnswers.includes(entry.id)) {
      return 'circle-red'
    }
    if (entry.id === correctAnswer.id && isAnswerCorrect) {
      return 'circle-green'
    }
  }
  return 'circle-gray'
}

class BirdsComponent extends PureComponent {
  componentDidMount() {
    this.props.setBirdsData(birdsData)
  }

  onBirdOptionClick = (entry) => {
    //1 -> immediately
    return () => {
      const {isAudioPlayed,setSelectedBird,isAnswerCorrect} = this.props
      //2 -> when this function is called
      if(isAudioPlayed && !isAnswerCorrect) {
        setSelectedBird(entry);
      }
    }
  }

  render() {
    const {
      isAudioPlayed,
      isAudioPlaying,
      birdsData,
      audioIndex,
      selectedBird,
      incorrectAnswers,
      audioSrc,
      isAnswerCorrect,
    } = this.props
    const birdsGroup = birdsData[audioIndex] || []
    // correctAnswer type == object (object containing bird data)
    // should be computed from the store data
    //find object(el) in birdsGroup array which audio field value === audioSrc
    const correctAnswer = birdsGroup.find(el => el.audio === audioSrc);
    correctAnswer && console.log('Correct Answer: ',correctAnswer);

    return <div className='bird-container'>
      <div className='birds rounded'>
        <div className='birds-group'>
          <ul className='list-group'>
            {birdsGroup.map(entry => (
                <li
                  key={entry.audio}
                  className="list-group-item li"
                  onClick={this.onBirdOptionClick(entry)}
                >
                  <span className={getCorrectCircleClassName(
                      entry,
                      correctAnswer,
                      incorrectAnswers,
                      isAudioPlayed,
                      isAnswerCorrect,
                  )}/>
                  {entry.name}
                </li>)
            )}
          </ul>
        </div>
      </div>
      <div className='bird-pic-description'>
        <p className={isAudioPlayed ? '' : 'initial'} style={{display: isAudioPlayed ? 'none' : 'flex'}}>
          <span className={(isAudioPlaying || isAudioPlayed) ? 'listen' : 'listen play'}>Послушайте плеер.</span>
          <span>Выберите птицу из списка</span>
        </p>
        <div style={{display: isAudioPlayed ? 'flex' : 'none'}} className="cards">
          {selectedBird && (
              <div className='top-block'>
                <img className='bird-img' src={selectedBird.image} alt=""/>
                <ul className="group">
                  <li className="descr"><h4 className='title'>{selectedBird.name}</h4></li>
                  <li className="descr"><span className='latin-bird-info'>{selectedBird.species}</span></li>
                  <li className="player">
                    <Player src={selectedBird.audio} />
                  </li>
                </ul>
              </div>
          )}
          <div className='bird-info-cont'>
            <span className="bird-information">
              {selectedBird && selectedBird.description}
              </span>
          </div>
        </div>
      </div>
      <div className='btn-next-level'>
        <button className={isAnswerCorrect ? 'btn next-level btn-next' : 'btn next-level'}>Next level</button>
      </div>
    </div>
  }
}
export const Birds = connect(state => state,{
  setBirdsData,
  setSelectedBird
})(BirdsComponent)

export const getRandomSong = (index = 0) => {
  return birdsData[index].map((el) => {
    return el.audio
  })[getRandomArbitrary(0,6)]
}
const getRandomArbitrary = (min, max) =>  {
  return Math.floor(Math.random() * (max - min) + min);
}

const finalPage = () => {
  const birdBlock = document.querySelector('.bird-block');
  const birdContainer = document.querySelector('.bird-container');
  birdBlock.style.display = 'none';
  birdContainer.style.display = 'none';
  const finalPage = document.querySelector('.final-page');
  finalPage.style.display = 'flex';
  const score = document.querySelector('.score');
  const resultEl = document.querySelector('.score-span');
  if(resultEl.innerText === '30') {
    document.querySelector('.congrats').style.display = 'none';
    document.querySelector('.perfect').style.display = 'block';
    let audio = new Audio(perfect);
    audio.play();
  } else {
    resultEl.innerText = score.innerText;
    document.querySelector('.perfect').style.display = 'none';
    document.querySelector('.congrats').style.display = 'block';
  }
  const tryAgainBtn = document.querySelector('.try-again');
  tryAgainBtn.addEventListener('click', () => {
    location.reload();
  })
}