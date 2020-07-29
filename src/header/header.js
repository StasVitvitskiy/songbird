import React, { PureComponent} from 'react';
import "./header.css";

export class Header extends PureComponent {
  render() {
    return (
        <div className="header d-flex">
          <div className="top-panel d-flex">
            <div className="logo"></div>
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