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

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};
export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isStarted: false,
    sortType: SortType.NONE,
    isReversed: false,
  };

  start = () => {
    this.setState(state => ({
      isStarted: !state.isStarted,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlph = () => {
    this.setState(({
      sortType: SortType.ALPABET,
    }));
  };

  sortLen = () => {
    this.setState(({
      sortType: SortType.LENGTH,
    }));
  };

  reset = () => {
    this.setState(({
      sortType: SortType.NONE,
      isReversed: false,
    }));
  };

  render() {
    let goods = [...goodsFromServer];
    const { isReversed, sortType } = this.state;

    if (sortType === SortType.ALPABET) {
      goods = goods.sort((a, b) => a.localeCompare(b));
    }

    if (sortType === SortType.LENGTH) {
      goods = goods.sort((a, b) => a.length - b.length);
    }

    if (sortType === SortType.NONE) {
      goods = [...goodsFromServer];
    }

    if (isReversed) {
      goods.reverse();
    }

    return (
      <div className="App column">
        <div className="level">
          {!this.state.isStarted
            && (
              <button
                type="button"
                onClick={this.start}
                className="button is-light is-primary level-item"
              >
                Start
              </button>
            )}

          {this.state.isStarted
            && (
              <button
                type="button"
                onClick={this.sortAlph}
                className="button is-light is-link"
              >
                Sort alphabetically
              </button>
            )}

          {this.state.isStarted
            && (
              <button
                type="button"
                onClick={this.sortLen}
                className="button is-light is-link"
              >
                Sort by length
              </button>
            )}

          {this.state.isStarted
            && (
              <button
                type="button"
                onClick={this.reverse}
                className="button is-light is-link"
              >
                Reverse
              </button>
            )}

          {this.state.isStarted
            && (
              <button
                type="button"
                onClick={this.reset}
                className="button is-light is-danger"
              >
                Reset
              </button>
            )}

        </div>

        {this.state.isStarted
          && (
            <ul className="panel Goods">
              {this.state.isStarted
                && goods.map(good => (
                  <li className="Goods__item panel-block" key={good}>{good}</li>
                ))}
            </ul>
          )}

      </div>
    );
  }
}
