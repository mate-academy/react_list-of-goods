import React from 'react';
import classNames from 'classnames';
import { GoodsList } from './GoodsList';
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
  };

  showGoods = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
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

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  }


  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>List of goods</h1>

        <GoodsList goods={goods} />

        <button
          className={classNames('btn', { 'btn-hidden': goods.length !== 0 })}
          type="button"
          onClick={this.showGoods}
        >
          show
        </button>

        <button
          type="button"
          className={classNames(
            'list__reset-btn',
            { 'list__reset-btn-hidden': goods.length === 0 },
          )}
          onClick={this.showGoods}
        >
          RESET
        </button>

        <button
          type="button"
          className={classNames(
            'list__btn',
            { 'list__btn-hidden': goods.length === 0 },
          )}
          onClick={this.reverse}
        >
          Reverse
        </button>

        <button
          type="button"
          className={classNames(
            'list__btn',
            { 'list__btn-hidden': goods.length === 0 },
          )}
          onClick={this.sortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={classNames(
            'list__btn',
            { 'list__btn-hidden': goods.length === 0 },
          )}
          onClick={this.sortByLength}
        >
          Sort by length
        </button>
      </div>

    );
  }
}

export default App;
