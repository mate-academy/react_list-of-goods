import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList/GoodsList';

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

class App extends React.Component {
  state = {
    started: false,
    goods: goodsFromServer,
    visibleGoods: goodsFromServer,
  }

  toStart = () => {
    this.setState(state => ({
      started: !state.started,
    }));
  }

  reverseGoods = () => {
    this.setState(state => ({
      visibleGoods: [...state.visibleGoods].reverse(),
    }));
  }

  sortGoodsByAlpha = () => {
    this.setState(state => ({
      visibleGoods: [...state.visibleGoods].sort(),
    }));
  }

  sortGoodsBylength = () => {
    this.setState(state => (
      {
        visibleGoods: [...state.visibleGoods].sort(
          (w1, w2) => w1.length - w2.length,
        ),
      }
    ));
  }

  resetGoods = () => {
    this.setState(state => ({
      visibleGoods: [...state.goods],
    }));
  }

  render() {
    const { started, visibleGoods } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {!started ? (
          <button type="button" onClick={this.toStart}>
            Start
          </button>
        )
          : (
            <>
              <GoodsList goods={visibleGoods} />
              <br />
              <button type="button" onClick={this.reverseGoods}>
                Reverse
              </button>
              {' '}
              <button type="button" onClick={this.sortGoodsByAlpha}>
                Sort alphabetically
              </button>
              {' '}
              <button type="button" onClick={this.resetGoods}>
                Reset
              </button>
              {' '}
              <button type="button" onClick={this.sortGoodsBylength}>
                Sort by length
              </button>
            </>
          )
        }
      </div>
    );
  }
}

export default App;
