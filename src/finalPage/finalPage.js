import React, {PureComponent} from 'react'
import './finalPage.css'

export class FinalPage extends PureComponent {
  render() {
    return <div className='final-page jumbotron'>
      <h1 className='congrats'>Поздравляем!</h1>
      <h6>Вы прошли викторину и набрали <span className='score-span'>0</span> из 30 возможных баллов</h6>
      <button className='btn btn-next try-again'>Попробовать еще раз</button>
    </div>
  }
}