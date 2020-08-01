import React, { PureComponent} from 'react';
import "./header.css";
import logo from '../media/logo.svg'

export class Header extends PureComponent {
  componentDidMount() {
    const MENU = document.querySelector('.pagination');
    MENU.addEventListener('click', (event) => {

      MENU.querySelectorAll('li').forEach(el => {
        if(activeEl) {
          console.log(activeEl)
          activeEl.classList.remove('active');
        }
      });
      event.target.classList.add('active')
    });
    }

  render() {
    return (
        <div className="header d-flex">
          <div className="top-panel d-flex">
            <div className="logo"><img src={logo} alt=""/></div>
            <h5>Score: <span className="score"> this.props.score </span></h5>
          </div>
          <ul className="pagination">
            <li className="page-item active"><a className="page-link" href="/#">Разминка</a></li>
            <li className="page-item"><a className="page-link" href="/#">Воробьиные</a></li>
            <li className="page-item"><a className="page-link" href="/#">Лесные птицы</a></li>
            <li className="page-item"><a className="page-link" href="/#">Певчие птицы</a></li>
            <li className="page-item"><a className="page-link" href="/#">Хищные птицы</a></li>
            <li className="page-item"><a className="page-link" href="/#">Морские птицы</a></li>
          </ul>
        </div>
    );
  }
};