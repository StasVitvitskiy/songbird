import React, {PureComponent} from 'react'
import './finalPage.css'
import {connect} from "react-redux";
import {tryAgain} from "~/store";
import {withRouter} from "react-router";
import {Trans} from "react-i18next";

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
              {isPerfectScore && (<h1 className='perfect'>
                <Trans i18nKey="final_page.perfect_score"/>
                !!!</h1>)}
              <h1 className='congrats'>
                <Trans i18nKey="final_page.congrats"/>!
              </h1>
              <h6>
                <Trans i18nKey="final_page.quiz"/>
                <span className='score-span'>{score}</span>
                <Trans i18nKey="final_page.out_of"/> {perfectScore}
                <Trans i18nKey="final_page.possible_pts"/>
              </h6>
              <button
                  onClick={this.onTryAgainClick}
                  className='btn btn-next try-again'>
                <Trans i18nKey="buttons.try_again"/>
              </button>
            </div>
          }
        }
    )
)