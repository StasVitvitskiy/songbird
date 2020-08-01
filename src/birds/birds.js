import React, {PureComponent} from 'react'
import './birds.css'

export class Birds extends PureComponent {
  render() {
    return <div className='bird-container'>
      <div className='birds rounded'>
        <div className=''>
          <ul className='list-group'>
            <li className="list-group-item"><span className='circle-red'/>Зяблик</li>
            <li className="list-group-item"><span className='circle-gray'/>Клест</li>
            <li className="list-group-item"><span className='circle-red'/>Горлица</li>
            <li className="list-group-item"><span className='circle-green'/>Дятел</li>
            <li className="list-group-item"><span className='circle-green'/>Удод</li>
            <li className="list-group-item"><span className='circle-gray'/>Стриж</li>
          </ul>
        </div>
      </div>
      <div>

      </div>
    </div>
  }
}