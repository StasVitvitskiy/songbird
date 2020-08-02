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
              <li className="descr"><h4 className='title'>Дятел</h4></li>
              <li className="descr"><span>Dendrocopos major</span></li>
              <li className="player">
                <Player/>
              </li>
            </ul>
          </div>
          <div className='bird-info-cont'>
            <span className="bird-information">
              {birds.woodpecker}
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
  finch: 'В дикой природе насчитывается 450 видов зябликов.' +
      ' Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев.' +
      ' Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',
  crossbill: 'Клестов называют «рождественскими» птицами.' +
      ' В естественных условиях они дают потомство зимой – в январе.' +
      ' Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно.' +
      ' В поисках шишек клесты могут улетать за 3500 км от гнезда.',
  turtleDove: 'Горлица обитает в смешанных и широколиственных лесах,' +
      ' а также в городских парках и поселках. Птицы часто выбирают места жизни рядом' +
      ' с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению' +
      ' горлиц часто разводят в домашних условиях.',
  woodpecker: 'Дятел – заметная и шумная птица, часто живет рядом с человеком.' +
      ' С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток' +
      ' под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',
  hoopoe: 'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами.' +
      ' Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства' +
      ' рядом с человеком: пастбища, виноградники, фруктовые сады.',
  swift: 'Стрижа можно увидеть практически в каждом уголке планеты.' +
      ' Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями.' +
      ' Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
}
const birdsI18N = {
  finch: 'Зяблик',
  crossbill: 'Клест',
  turtleDove: 'Горлица',
  woodpecker: 'Дятел',
  hoopoe: 'Удод',
  swift: 'Стриж'
}

const setTitle = (birdsObj) => {
  const title = document.getElementsByClassName('title');


}
setTitle(birds)
/*
*
* */