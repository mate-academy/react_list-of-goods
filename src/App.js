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
  }

  handleStart = (event) => {
    event.target.hidden = true;
    this.setState(state => ({
      started: !state.started,
    }));
  }

  updateGoods = (value) => {
    this.setState({
      listGoods: value,
    });
  }

  render() {
    const {
      listGoods,
      started,
    } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          onClick={this.handleStart}
        >
          Start
        </button>
        <div className="container">
          <div>
            <h3>Initial order</h3>
            <GoodsList listGoods={goodsFromServer} />
          </div>
          {
            started
              ? (
                <div
                  style={
                    {
                      borderLeft: '2px solid black',
                    }}
                >
                  <h3>Updated order</h3>
                  <GoodsList listGoods={listGoods} />
                </div>
              ) : null
          }
        </div>
        {
          started
            ? (
              <GoodsPanel
                listGoods={listGoods}
                initialListGoods={goodsFromServer}
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
