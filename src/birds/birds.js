import React, {PureComponent} from 'react'
import './birds.css'
import bird from '../media/bird.jpg'
import {Player} from "~/audioPlayer/audio";
import birdsData from "~/birdsData/birdsData";
// import win from '../media/win.mp3';
// import lose from '../media/lose.mp3'

let playedAudio = '';

export class Birds extends PureComponent {
  componentDidMount() {
    let played = false;
    const audioPlayer = document.querySelector('audio');
    const playBtn = document.querySelector('.rhap_play-pause-button');
    const cards = document.querySelector('.cards');
    const p = document.querySelector('p');
    cards.style.display = 'none';
    p.style.display = 'flex';
    p.classList.add('initial');
    playBtn.addEventListener('click', () => {
      if(!played) {
        audioPlayer.src = playRandom(0);
        played = true;
        playedAudio = audioPlayer.src;
        console.log("PLAYED AUDIO: ", playedAudio)
      }
    })
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
                <Player/>
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
  birdsGroup.addEventListener('click', (e) => {
    const target = e.target;
    const titleEl = document.querySelector('.descr .title');
    const topTitleEl = document.querySelector('.list-group-item h3')
    titleEl.innerText = target.innerText;
    topTitleEl.innerText = target.innerText;
    const latinBirdInfo = document.querySelector('.latin-bird-info');
    const birdInfoBlock = document.querySelector('.bird-information');
    const birdImg = document.querySelector('.bird-img');
    const audioPlayer = document.querySelectorAll('audio')[1];
    const cards = document.querySelector('.cards');
    const p = document.querySelector('p');
    cards.style.display = 'flex';
    p.style.display = 'none';
    p.classList.remove('initial');
    audioPlayer.preload = false;
    index = 0;
    latinBirdInfo.innerText = birdsData[index].find((el) => el.name === target.innerText).species;
    birdInfoBlock.innerText = birdsData[index].find((el) => el.name === target.innerText).description;
    birdImg.src = birdsData[index].find((el) => el.name === target.innerText).image;
    audioPlayer.src = birdsData[index].find((el) => el.name === target.innerText).audio;
    const nextBtn = document.querySelector('.btn-next-level button')
    const score = document.querySelector('.score');
    console.log(score.innerText);
    let selectedAudio = audioPlayer.src;
      if(selectedAudio === playedAudio) {
        target.childNodes[0].classList.remove('circle-gray');
        target.childNodes[0].classList.add('circle-green');
        nextBtn.classList.add('btn-next');
        score.innerText = scoreFunction(count);

      } else {
        target.childNodes[0].classList.remove('circle-gray');
        target.childNodes[0].classList.add('circle-red');
        count+=1;
      }
  })
  index = 1;
  nextLevelBtn.addEventListener('click', (e) => {
    const active = document.querySelector('.page-item.active');
    const Menu = document.querySelectorAll('.pagination .page-item');
    active.classList.remove('active');
    Menu[index++].classList.add('active');
    if(index === 6) {
      index = 0;
    }
    const cards = document.querySelector('.cards');
    const p = document.querySelector('p');
    cards.style.display = 'none';
    p.style.display = 'flex';
    p.classList.add('initial');
  })
}
const playRandom = (index = 0) => {
  return birdsData[0].map((el) => {
    return el.audio
  })[getRandomArbitrary(0,6)]
}
const getRandomArbitrary = (min, max) =>  {
  return Math.floor(Math.random() * (max - min) + min);
}
const scoreFunction = (attempts) => {
  let score = 0;
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
/*
*
* */