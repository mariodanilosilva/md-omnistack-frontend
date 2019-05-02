import React, { Component } from 'react';
import api from '../../services/api';
import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MdFolder} from 'react-icons/md';

import logo from '../../assets/logoR.svg';
import './styles.css';

export default class Boxes extends Component {
  state = { boxes: '' }
  
  async componentDidMount() {
    const response = await api.get('list/boxes');
    
    this.setState({ boxes: response.data });
    console.log(this.state.boxes);
  }

  render() {
    return (
      <div id='boxes-container'>
        <header>
          <img src={logo} alt="" />
        </header>

        <ul>
          {this.state.boxes &&
            this.state.boxes.map(box => (
              <li key={box._id}>
                <a className="fileInfo" href={"/box/"+box._id} target="_self">
                  <MdFolder size={150} color="#A5Cfff" />
                  <strong>{box.title}</strong>
                  <p>
                    Criada há{" "}
                    {distanceInWords(box.createdAt, new Date(), {
                      locale: pt
                    })}
                  </p>
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
