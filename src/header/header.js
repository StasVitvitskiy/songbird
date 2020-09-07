import React, { PureComponent} from 'react';
import "./header.css";
import logo from '../media/logo.svg'
import {connect} from "react-redux";


export const Header = connect(state => state,)(
    class Header extends PureComponent {
      render() {
        const {audioIndex, score} = this.props
        return (
            <div className="header d-flex">
              <div className="top-panel d-flex">
                <div className="logo"><img src={logo} alt=""/></div>
                <h5>Score: <span className="score"> {score} </span></h5>
              </div>
              <ul className="pagination">
                <li className={`page-item ${audioIndex === 0 ? "active" : ""}`}><span className="page-link">Разминка</span></li>
                <li className={`page-item ${audioIndex === 1 ? "active" : ""}`}><span className="page-link">Воробьиные</span></li>
                <li className={`page-item ${audioIndex === 2 ? "active" : ""}`}><span className="page-link">Лесные птицы</span></li>
                <li className={`page-item ${audioIndex === 3 ? "active" : ""}`}><span className="page-link">Певчие птицы</span></li>
                <li className={`page-item ${audioIndex === 4 ? "active" : ""}`}><span className="page-link">Хищные птицы</span></li>
                <li className={`page-item ${audioIndex === 5 ? "active" : ""}`}><span className="page-link">Морские птицы</span></li>
              </ul>
            </div>
        );
      }
    }
)