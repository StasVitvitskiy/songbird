import React, { PureComponent} from 'react';
import "./header.css";
import logo from '../media/logo.svg'
import {connect} from "react-redux";
import {Trans} from "react-i18next";


export const Header = connect(state => state,)(
    class Header extends PureComponent {
      render() {
        const {audioIndex, score} = this.props
        return (
            <div className="header d-flex">
              <div className="top-panel d-flex">
                <div className="logo"><img src={logo} alt=""/></div>
                <h5>
                  <Trans i18nKey="header.score"/>:
                  <span className="score"> {score} </span></h5>
              </div>
              <ul className="pagination">
                <li className={`page-item ${audioIndex === 0 ? "active" : ""}`}><span className="page-link">
                  <Trans i18nKey="header.warmup" />
                </span></li>
                <li className={`page-item ${audioIndex === 1 ? "active" : ""}`}><span className="page-link">
                  <Trans i18nKey="header.passerines" />
                </span></li>
                <li className={`page-item ${audioIndex === 2 ? "active" : ""}`}><span className="page-link">
                  <Trans i18nKey="header.forest_birds"/>
                </span></li>
                <li className={`page-item ${audioIndex === 3 ? "active" : ""}`}><span className="page-link">
                  <Trans i18nKey="header.songbirds"/>
                </span></li>
                <li className={`page-item ${audioIndex === 4 ? "active" : ""}`}><span className="page-link">
                  <Trans i18nKey="header.predator_birds"/>
                </span></li>
                <li className={`page-item ${audioIndex === 5 ? "active" : ""}`}><span className="page-link">
                  <Trans i18nKey="header.seabirds"/>
                </span></li>
              </ul>
            </div>
        );
      }
    }
)