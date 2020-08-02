import React, {PureComponent} from 'react'
import './birds.css'
import bird from '../media/bird.jpg'
import {Player} from "~/audioPlayer/audio";

export class Birds extends PureComponent {
  render() {
    return <div className='bird-container'>
      <div className='birds rounded'>
        <div className=''>
          <ul className='list-group'>
            <li className="list-group-item li"><span className='circle-red'/>Зяблик</li>
            <li className="list-group-item li"><span className='circle-gray'/>Клест</li>
            <li className="list-group-item li"><span className='circle-red'/>Горлица</li>
            <li className="list-group-item li"><span className='circle-green'/>Дятел</li>
            <li className="list-group-item li"><span className='circle-green'/>Удод</li>
            <li className="list-group-item li"><span className='circle-gray'/>Стриж</li>
          </ul>
        </div>
      </div>
      <div className='bird-pic-description'>
        <p>
          <span>Послушайте плеер.</span><span>Выберите птицу из списка</span>
        </p>
        <div className="cards">
          <div className='top-block'>
            <img src={bird} alt=""/>
            <ul className="group">
              <li className="descr"><h4>Дятел</h4></li>
              <li className="descr"><span>Dendrocopos major</span></li>
              <li className="player">
                <Player/>
              </li>
            </ul>
          </div>
          <div className='bird-info-cont'>
            <span className="bird-information">
                Дятел – заметная и шумная птица, часто живет рядом с человеком.
                С середины января до конца июня можно услышать «барабанную дробь»
                дятлов – трель от вибрации веток под быстрыми ударами клюва птицы.
                В хорошую погоду дробь слышна в радиусе 1,5 км.
              </span>
          </div>
        </div>
      </div>
    </div>
  }
}
/*
*
* */