import React, {PureComponent} from 'react'
import './birds.css'
import bird from '../media/bird.jpg'
import {Player} from "~/audioPlayer/audio";
import birdsData from "~/birdsData/birdsData";

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
      }
    })
    birdsFunc()
  }

  render() {
    return <div className='bird-container'>
      <div className='birds rounded'>
        <div className='birds-group'>
          <ul className='list-group'>
            <li className="list-group-item li"><span className='circle-red'/>Ворон</li>
            <li className="list-group-item li"><span className='circle-gray'/>Журавль</li>
            <li className="list-group-item li"><span className='circle-red'/>Ласточка</li>
            <li className="list-group-item li"><span className='circle-green'/>Козодой</li>
            <li className="list-group-item li"><span className='circle-green'/>Кукушка</li>
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
        <button className='btn-next btn next-level'>Next level</button>
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
  })
  const nextLevelBtn = document.querySelector('.btn-next-level');
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
/*
*
* */