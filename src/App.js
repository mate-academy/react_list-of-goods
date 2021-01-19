import React from 'react';
import './App.css';
import { GoodList } from './GoodList';

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

const classNames = require('classnames');

class App extends React.Component {
  state = {
    goods: goodsFromServer,
    isStart: false,
    isReversed: false,
    sortBy: '',
  }

  toReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  toSort = () => {
    this.setState({
      sortBy: 'alphabet',
    });
  }

  toSortLength = () => {
    this.setState({
      sortBy: 'length',
    });
  }

  toReset = () => {
    this.setState(state => ({
      isReversed: false,
      sortBy: '',
    }));
  }

  render() {
    const { isStart, goods, isReversed, sortBy } = this.state;
    const actualGoods = [...goods];

    actualGoods.sort((a, b) => {
      switch (sortBy) {
        case 'alphabet':
          return a.localeCompare(b);
        case 'length':
          return a.length - b.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      actualGoods.reverse();
    }

    return (
      <div className="App">
        <button
          className={classNames('btn', 'btn-success', { hidden: isStart })}
          type="button"
          onClick={
            () => this.setState(state => ({ isStart: !state.isStart }))
          }
        >
          Start
        </button>

        <div className={classNames('container', { hidden: !isStart })}>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={this.toReverse}
          >
            Reverse
          </button>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={this.toSort}
          >
            Sort A-Z
          </button>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={this.toSortLength}
          >
            Sort by length
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={this.toReset}
          >
            Reset
          </button>
          <GoodList isStart={isStart} goods={actualGoods} />
        </div>

      </div>
    );
  }
}

export default App;
