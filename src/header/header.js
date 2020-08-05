import React, { PureComponent} from 'react';
import "./header.css";
import logo from '../media/logo.svg'
import {Route, NavLink} from "react-router-dom";

export class Header extends PureComponent {
  componentDidMount() {
    const MENU = document.querySelector('.pagination');
    MENU.addEventListener('click', (e) => {
      e.preventDefault();

    })
    }

  render() {
    return (
        <div className="header d-flex">
          <div className="top-panel d-flex">
            <div className="logo"><img className='logo-img' src={logo} alt=""/></div>
            <h5>Score: <span className="score"> 0 </span></h5>
          </div>
          <ul className="pagination">
            <li className="page-item active"><NavLink className="page-link" to="/#">Разминка</NavLink></li>
            <li className="page-item"><NavLink className="page-link" to="/passerine-birds">Воробьиные</NavLink></li>
            <li className="page-item"><NavLink className="page-link" to="/forest-birds">Лесные птицы</NavLink></li>
            <li className="page-item"><NavLink className="page-link" to="/songbirds">Певчие птицы</NavLink></li>
            <li className="page-item"><NavLink className="page-link" to="/predator-birds">Хищные птицы</NavLink></li>
            <li className="page-item"><NavLink className="page-link" to="/sea-birds">Морские птицы</NavLink></li>
          </ul>
        </div>
    );
  }
};