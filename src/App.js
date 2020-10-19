/* eslint-disable no-param-reassign */
import React from 'react';
import './App.css';

import { GoodsList } from './components/GoodsList';
import { GoodsPanel } from './components/GoodsPanel';

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

class App extends React.PureComponent {
  state = {
    listGoods: goodsFromServer,
    started: false,
    reseted: false,
    defaultValueSelect: 0,
    valueSelect: 0,
  }

  updateGoods = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  render() {
    const {
      listGoods,
      started,
      reseted,
      defaultValueSelect,
      valueSelect,
    } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          onClick={() => this.updateGoods('started', !started)}
          hidden={started ? 'hidden' : ''}
        >
          Start
        </button>
        <div className="container">
          {started
            ? <GoodsList listGoods={listGoods} />
            : null
          }
        </div>
        {
          started
            ? (
              <GoodsPanel
                listGoods={listGoods}
                initialListGoods={goodsFromServer}
                reseteed={reseted}
                defaultValueSelect={defaultValueSelect}
                valueSelect={valueSelect}
                updateGoods={this.updateGoods}
              />
            )
            : null
        }
      </div>
    );
  }
}

export default App;
