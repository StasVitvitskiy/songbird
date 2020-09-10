import React, {createRef, PureComponent} from 'react'
import './birds.css'
import {playAudio, Player} from "~/audioPlayer/audio";
import birdsData from "./birdsData";
import perfect from '../media/ultimateWin.mp3'
import {connect} from "react-redux";
import {goToNextLevel, setBirdsData, setSelectedBird} from "~/store";
import {withRouter} from "react-router";
import {Trans} from "react-i18next";

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
  listenNotificationRef = createRef()

  componentDidMount() {
    const {setBirdsData} = this.props
    setBirdsData(birdsData)
  }

  onBirdOptionClick = (entry) => {
    //1 -> immediately
    return () => {
      const {isAudioPlayed,setSelectedBird,isAnswerCorrect, isAudioPlaying} = this.props
      //2 -> when this function is called
      if(isAudioPlayed && !isAnswerCorrect) {
        setSelectedBird(entry);
      }
      if (!isAnswerCorrect) {
        if (!isAudioPlayed || !isAudioPlaying) {
          if (this.listenNotificationRef.current.classList.contains("play")) {
            this.listenNotificationRef.current.classList.remove("play")
            setTimeout(() => {
              this.listenNotificationRef.current.classList.add("play")
            })
          } else {
            this.listenNotificationRef.current.classList.add("play")
          }
        }
      }
    }
  }

  onListenNotificationAnimationEnd = () => {
    this.listenNotificationRef.current.classList.remove("play")
  }

  onNextLevelBtnClick = () => {
    if (this.listenNotificationRef.current.classList.contains("play")) {
      this.listenNotificationRef.current.classList.remove("play")
    }

    const {goToNextLevel, birdsData, history, audioIndex,score} = this.props
    if (audioIndex === birdsData.length - 1) {
      history.push('/results')
      if(score === birdsData.length * (birdsData[audioIndex].length - 1)) {
        playAudio(perfect);
      }
    } else {
      goToNextLevel();
    }
  }

  componentDidUpdate({ audioIndex}) {
    const {audioIndex: newAudioIndex, history} = this.props
    if (audioIndex !== newAudioIndex) {
      history.push(`/birds/${newAudioIndex}`);
    }
  }

  render() {
    const {
      isAudioPlayed,
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
                  <Trans i18nKey={`birds.${entry.name}`}/>
                </li>)
            )}
          </ul>
        </div>
      </div>
      <div className='bird-pic-description'>
        <p className={isAudioPlayed ? '' : 'initial'} style={{display: isAudioPlayed ? 'none' : 'flex'}}>
          <span
              className="listen"
              ref={this.listenNotificationRef}
              onAnimationEnd={this.onListenNotificationAnimationEnd}
          >
            <Trans i18nKey="instructions.listen_to_audio" />
          </span>
          <span>
            <Trans i18nKey="instructions.choose_bird" />
          </span>
        </p>
        <div style={{display: isAudioPlayed ? 'flex' : 'none'}} className="cards">
          {selectedBird && (
              <div className='top-block'>
                <img className='bird-img' src={selectedBird.image} alt=""/>
                <ul className="group">
                  <li className="descr"><h4 className='title'>
                    <Trans i18nKey={`birds.${selectedBird.name}`}/>
                  </h4></li>
                  <li className="descr"><span className='latin-bird-info'>{selectedBird.species}</span></li>
                  <li className="player">
                    <Player src={selectedBird.audio} />
                  </li>
                </ul>
              </div>
          )}
          <div className='bird-info-cont'>
            <span className="bird-information">
              {selectedBird && <Trans i18nKey={`descriptions.${selectedBird.name}`}/>}
              </span>
          </div>
        </div>
      </div>
      <div className='btn-next-level'>
        <button
            onClick={this.onNextLevelBtnClick}
            className={isAnswerCorrect ? 'btn next-level btn-next' : 'btn next-level'}
            disabled={!isAnswerCorrect}
        >
          {audioIndex === birdsData.length - 1 ? <Trans i18nKey="buttons.results"/> : <Trans i18nKey="buttons.next_level"/>}
        </button>
      </div>
    </div>
  }
}
export const Birds = connect(state => state,{
  setBirdsData,
  setSelectedBird,
  goToNextLevel,
})(
    withRouter(
        BirdsComponent
    )
)