/* eslint-disable @typescript-eslint/no-unused-vars */
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

enum SortType {
  NONE,
  ALPABET,
  LENGTH,
}

// Use this function in the render method

// DON'T save goods to the state
type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component <{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: 0,
  };

  start = () => {
    this.setState({ isStarted: true });
    this.forceUpdate();
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: 0,
    });
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;
    const goods = [...goodsFromServer];

    goods.sort((item1, item2) => {
      switch (sortType) {
        case SortType.ALPABET:
          return item1.localeCompare(item2);
        case SortType.LENGTH:
          return (item1.length - item2.length);
        default:
          return 0;
      }
    });

    if (isReversed) {
      goods.reverse();
    }

    return (
      <div className="App">
        {!isStarted && (
          <button
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        )}

        {isStarted && (
          <>
            <button type="button" onClick={this.sortByAlphabet}>
              Sort alphabetically
            </button>

            <button type="button" onClick={this.sortByLength}>
              Sort by length
            </button>

            <button type="button" onClick={this.reverse}>
              Reverse
            </button>

            <button type="button" onClick={this.reset}>
              Reset
            </button>

            <ul className="Goods">
              {goods.map(good => (
                <li className="Goods__item" key={good}>{good}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}
