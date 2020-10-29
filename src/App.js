import React from 'react';
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

const selectOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class App extends React.Component {
  state = {
    shouldShowGoods: false,
    goods: goodsFromServer,
    goodLength: 1,
  }

  showGoods = () => {
    this.setState({
      shouldShowGoods: true,
    });
  }

  filterMinLengthGoods = (event) => {
    const { value } = event.target;

    this.setState({
      goodLength: value,
      goods: goodsFromServer.filter(good => good.length >= value),
    });
  }

  reverseGoods = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortGoods = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  resetGoods = () => {
    this.setState({
      goods: goodsFromServer,
      goodLength: 1,
    });
  }

  sortGoodsByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  }

  render() {
    const { shouldShowGoods, goods, goodLength } = this.state;

    return (
      <div className="app">
        {shouldShowGoods
          || (
            <button
              type="button"
              className="app__start-button"
              onClick={this.showGoods}
            >
              start
            </button>
          )
        }

        {shouldShowGoods
          && (
            <div className="goods">
              <h1 className="goods__title">Goods</h1>
              <div className="goods__sort-buttons">
                <button
                  type="button"
                  className="goods__buttons-item"
                  onClick={this.reverseGoods}
                >
                  reverse
                </button>
                <button
                  type="button"
                  className="goods__buttons-item"
                  onClick={this.sortGoods}
                >
                  sort
                </button>
                <button
                  type="button"
                  className="goods__buttons-item"
                  onClick={this.resetGoods}
                >
                  reset
                </button>
                <button
                  type="button"
                  className="goods__buttons-item"
                  onClick={this.sortGoodsByLength}
                >
                  sort by length
                </button>

                <select
                  value={goodLength}
                  className="goods__select"
                  onChange={this.filterMinLengthGoods}
                >
                  {selectOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <ul className="goods__list">
                {goods.map(good => (
                  <li key={good} className="goods__item">
                    {good}
                  </li>
                ))}
              </ul>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
