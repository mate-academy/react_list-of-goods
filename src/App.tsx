/* eslint-disable @typescript-eslint/no-unused-vars */
import classNames from 'classnames';
import React from 'react';
import './App.css';

const goodsFromServer: string[] = [
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

type State = {
  isStarted: boolean,
  goods: string[],
  isReversed: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    isStarted: false,
    goods: [...goodsFromServer],
    isReversed: false,
  };

  getStart = () => {
    this.setState(state => ({ isStarted: !state.isStarted }));
  };

  reverse = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  SortAlphabetically = () => {
    this.setState(state => ({
      isReversed: false,
      goods: [...state.goods].sort((g1, g2) => g1.localeCompare(g2)),
    }));
  };

  SortByLength = () => {
    this.setState(state => ({
      isReversed: false,
      goods: [...state.goods].sort((g1, g2) => g1.length - g2.length),
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      goods: [...goodsFromServer],
    });
  };

  render() {
    const {
      isStarted, goods, isReversed,
    } = this.state;

    const visibleGoods = [...goods];

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <button
          type="button"
          className={classNames(
            'start', { start__invisible: isStarted },
          )}
          onClick={this.getStart}
        >
          Start
        </button>

        {isStarted && (
          <div>
            <button
              type="button"
              className="button SortAlphabetically is-dark is-medium"
              onClick={this.SortAlphabetically}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className="button SortByLength is-success is-medium"
              onClick={this.SortByLength}
            >
              Sort by length
            </button>

            <button
              type="button"
              className="button reverse is-danger is-medium"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              type="button"
              className="button Reset is-medium"
              onClick={this.reset}
            >
              Reset
            </button>

            <ul className="Goods">
              {visibleGoods.map(good => (
                <li className="Goods__item" key={good}>{good}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
