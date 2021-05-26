import React from 'react';
import { GoodsList } from './components/GoodsList';

import './App.css';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export class App extends React.Component {
  state = {
    goods: [...goodsFromServer],
    isListHiden: true,
  }

  renderList = () => {
    this.setState(prevState => ({
      isListHiden: !prevState.isListHiden,
    }));
  };

  render() {
    const { goods } = this.state;
    const { isListHiden } = this.state;

    return (
      <div className="App">
        {!isListHiden
          ? <GoodsList goods={goods} />
          : (
            <button
              className="start-btn"
              type="button"
              onClick={this.renderList}
            >
              Start
            </button>
          )
        }
      </div>
    );
  }
}
