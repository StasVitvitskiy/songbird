import React, {PureComponent} from 'react'
import './birds.css'
import bird from '../media/bird.jpg'
import {Player} from "~/audioPlayer/audio";
import birdsData from "~/birdsData/birdsData";
import win from '../media/win.mp3';
import lose from '../media/lose.mp3'
import {Header} from "~/header/header";

let playedAudio = '';
let audioIndex = 0;
let score = 0;
export let finalScore = 0;
let result = false;
export class Birds extends PureComponent {
  componentDidMount() {
    const cards = document.querySelector('.cards');
    const p = document.querySelector('p');
    cards.style.display = 'none';
    p.style.display = 'flex';
    p.classList.add('initial');
    playFunc();
    birdsFunc();
  }

  render() {
    return <div className='bird-container'>
      <div className='birds rounded'>
        <div className='birds-group'>
          <ul className='list-group'>
            <li className="list-group-item li"><span className='circle-gray'/>Ворон</li>
            <li className="list-group-item li"><span className='circle-gray'/>Журавль</li>
            <li className="list-group-item li"><span className='circle-gray'/>Ласточка</li>
            <li className="list-group-item li"><span className='circle-gray'/>Козодой</li>
            <li className="list-group-item li"><span className='circle-gray'/>Кукушка</li>
            <li className="list-group-item li"><span className='circle-gray'/>Синица</li>
          </ul>
        </div>
      </div>
      <div className='bird-pic-description'>
        <p>
          <span>Послушайте плеер.</span><span>Выберите птицу из списка</span>
        </p>
        <div className="cards">
          <div className='top-block'>
            <img className='bird-img' src={bird} alt=""/>
            <ul className="group">
              <li className="descr"><h4 className='title'>Ворон</h4></li>
              <li className="descr"><span className='latin-bird-info'>Corvus corax</span></li>
              <li className="player">
                <Player />
              </li>
            </ul>
          </div>
          <div className='bird-info-cont'>
            <span className="bird-information">
              {birds.crow}
              </span>
          </div>
        </div>
      </div>
      <div className='btn-next-level'>
        <button className='btn next-level'>Next level</button>
      </div>
    </div>
  }
}
const birds = {
  crow: 'Ворон – крупная птица. Длина тела достигает 70 сантиметров,' +
      ' размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра.' +
      ' В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
}
const birdsFunc = (index = 0) => {
  const birdsGroup = document.querySelector('.birds-group ul');
  const nextLevelBtn = document.querySelector('.btn-next-level');
  let count = 0;
  const nextBtn = document.querySelector('.btn-next-level button')
  const titleEl = document.querySelector('.descr .title');
  const topTitleEl = document.querySelector('.list-group-item h3')
  const latinBirdInfo = document.querySelector('.latin-bird-info');
  const birdInfoBlock = document.querySelector('.bird-information');
  const birdImg = document.querySelectorAll('.bird-img');
  const audioPlayer = document.querySelectorAll('audio')[1];
  const cards = document.querySelector('.cards');
  const p = document.querySelector('p');
  let to = '';
  birdsGroup.addEventListener('click', (e) => {
    switch(to) {
      case 'Воробьиные':
        index = 1;
        break;
      case 'Лесные птицы':
        index = 2;
        break;
      case 'Певчие птицы':
        index = 3;
      break;
      case 'Хищные птицы':
        index = 4;
        break;
      case 'Морские птицы':
        index = 5;
        break;
      default:
        index = 0;
        break;
    }
    const target = e.target;
    titleEl.innerText = target.innerText;
    topTitleEl.innerText = target.innerText;
    cards.style.display = 'flex';
    p.style.display = 'none';
    p.classList.remove('initial');
    latinBirdInfo.innerText = birdsData[index].find((el) => el.name === target.innerText).species;
    birdInfoBlock.innerText = birdsData[index].find((el) => el.name === target.innerText).description;
    birdImg[1].src = birdsData[index].find((el) => el.name === target.innerText).image
    audioPlayer.src = birdsData[index].find((el) => el.name === target.innerText).audio;
    const score = document.querySelector('.score');
    let selectedAudio = audioPlayer.src;
      if(selectedAudio === playedAudio) {
        target.childNodes[0].classList.remove('circle-gray');
        target.childNodes[0].classList.add('circle-green');
        let audio = new Audio(win)
        audio.play()
        nextBtn.classList.add('btn-next');
        if(index === 5) {
          nextBtn.innerText = 'Results';
        }
        score.innerText = scoreFunction(count);
        birdImg[0].src = birdsData[index].find((el) => el.name === target.innerText).image
      } else {
        target.childNodes[0].classList.remove('circle-gray');
        target.childNodes[0].classList.add('circle-red');
        let audio = new Audio(lose);
        audio.play()
        count+=1;
      }
  })
  nextLevelBtn.addEventListener('click', (e) => {
    if(!nextBtn.classList.contains('btn-next')) {
      e.preventDefault();
    } else if(nextBtn.innerText === 'Results') {
      finalPage();
      result = true;
      const score = document.querySelector('.score');
      finalScore = score.innerText;
    } else {
      switch(to) {
        case 'Воробьиные':
          index = 1;
          break;
        case 'Лесные птицы':
          index = 2;
          break;
        case 'Певчие птицы':
          index = 3;
          break;
        case 'Хищные птицы':
          index = 4;
          break;
        case 'Морские птицы':
          index = 5;
          break;
        default:
          index = 0;
          break;
      }
      audioIndex+=1;
      topTitleEl.innerText = '******';
      birdImg[0].src = bird;
      const active = document.querySelector('.page-item.active');
      const Menu = document.querySelectorAll('.pagination .page-item');
      const cards = document.querySelector('.cards');
      const p = document.querySelector('p');
      cards.style.display = 'none';
      p.style.display = 'flex';
      p.classList.add('initial');
      const birdsElements = document.querySelectorAll('.birds-group ul li');
      index+=1;
      for(let i = 0; i < birdsGroup.childNodes.length; i++) {
        birdsElements[i].innerHTML =`<span class="circle-gray"></span>${birdsData[index][i].name}`;
      }
      active.classList.remove('active');
      const progressBar = document.querySelector('.rhap_progress-indicator');
      progressBar.style.left = '0';
      const progressFilled = document.querySelector('.rhap_progress-filled');
      progressFilled.style.width = '0';
      const curTime = document.getElementById('rhap_current-time');
      curTime.innerText = '00:00';
      Menu[index].classList.add('active');
      count = 0;
      let activeElement = document.querySelector('.page-item.active');
      to = activeElement.innerText;
      switch(to) {
        case 'Воробьиные':
          audioPlayer.src = playFunc()
          break;
        case 'Лесные птицы':
          audioPlayer.src = playFunc()
          break;
        case 'Певчие птицы':
          audioPlayer.src = playFunc()
          break;
        case 'Хищные птицы':
          audioPlayer.src = playFunc()
          break;
        case 'Морские птицы':
          audioPlayer.src = playFunc()
          break;
        default:
          index = 0;
          break;
      }
      nextBtn.classList.remove('btn-next');
      if (index === 6) {
        index = 0;
      }
    }
  })
}
const playRandom = (index = 0) => {
  return birdsData[index].map((el) => {
    return el.audio
  })[getRandomArbitrary(0,6)]
}
const getRandomArbitrary = (min, max) =>  {
  return Math.floor(Math.random() * (max - min) + min);
}
const scoreFunction = (attempts) => {
  switch(attempts) {
    case 0:
      score+=5;
      break;
    case 1:
      score+=4;
      break;
    case 2:
      score+=3;
      break;
    case 3:
      score+=2;
      break;
    case 4:
      score+=1;
      break;
    default:
      score+=0;
      break;
  }
  return score;
}
const playFunc = () => {
  let played = false;
  const audioPlayer = document.querySelector('audio');
  const playBtn = document.querySelector('.rhap_play-pause-button');
  playBtn.addEventListener('click', () => {
    if(!played) {
      audioPlayer.src = playRandom(audioIndex);
      played = true;
      playedAudio = audioPlayer.src;
    }
  })
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
  resultEl.innerText = score.innerText;
  const tryAgainBtn = document.querySelector('.try-again');
  tryAgainBtn.addEventListener('click', () => {
    location.reload();
  })
}
/*
*
* */