import React from 'react';
import classNames from 'classnames';

import { GoodsList } from './components/GoodsList/GoodsList';
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

class App extends React.Component {
  state = {
    goods: [],
  }

  showGoodsList = () => {
    this.setState({ goods: [...goodsFromServer] });
  }

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  reset = () => {
    this.setState({ goods: [...goodsFromServer] });
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          className={classNames('button', 'button--start', {
            hover: goods.length !== 0,
          })}
          onClick={this.showGoodsList}
        >
          Select
        </button>
        <GoodsList goods={[...goods]} />
        <div className="button__wrapper">
          <button
            type="button"
            className={classNames('button', 'button--reverse', {
              hover: goods.length === 0,
            })}
            onClick={this.reverse}
          >
            Reverse
          </button>
          <button
            type="button"
            className={classNames('button', 'button--sort-alphabetically', {
              hover: goods.length === 0,
            })}
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            className={classNames('button', 'button--sort-bylength', {
              hover: goods.length === 0,
            })}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
          <button
            type="button"
            className={classNames('button', 'button--reset', {
              hover: goods.length === 0,
            })}
            onClick={this.reset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
