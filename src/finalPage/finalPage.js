import React, {PureComponent} from 'react'
import './finalPage.css'
import {connect} from "react-redux";
import {tryAgain} from "~/store";
import {withRouter} from "react-router";

export const FinalPage = connect(state => state, {
    tryAgain,
})(
    withRouter(
        class FinalPage extends PureComponent {
          onTryAgainClick = () => {
            const {tryAgain, history} = this.props;
            tryAgain();
            history.push('/birds/0');
          }
          render() {
            const {score,birdsData = [],audioIndex} = this.props;
            const perfectScore = ((birdsData[audioIndex] || []).length - 1) * birdsData.length;
            const isPerfectScore = score === perfectScore;
            return <div className='final-page jumbotron'>
              {isPerfectScore && (<h1 className='perfect'>ИДЕАЛЬНЫЙ SCORE!!!</h1>)}
              <h1 className='congrats'>Поздравляем!</h1>
              <h6>Вы прошли викторину и набрали <span className='score-span'>{score}</span> из {perfectScore} возможных баллов</h6>
              <button
                  onClick={this.onTryAgainClick}
                  className='btn btn-next try-again'>
                Попробовать еще раз
              </button>
            </div>
          }
        }
    )
)