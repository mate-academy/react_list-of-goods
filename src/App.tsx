/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent } from 'react';
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

const selectedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

enum SortType {
  NONE,
  ALPABET,
  LENGTH,
}

// Use this function in the render method
function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
  minLength: number,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((a, b) => {
    switch (sortType) {
      case 1:
        return a[sortType].localeCompare(b[sortType]);
      case 2:
        return a.length - b.length;
      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods.splice(0, minLength);
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
  minLength: number,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: 0,
    isStarted: false,
    minLength: 1,
  };

  start = () => {
    this.setState(state => ({
      isStarted: !state.isStarted,
    }));
  };

  maxLengthGoods = (e: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ minLength: +e.currentTarget.value });
  };

  sortAlphabetically = () => {
    this.setState({ sortType: 1 });
  };

  sortByLength = () => {
    this.setState({ sortType: 2 });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: 0,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  render() {
    const {
      isReversed,
      sortType,
      isStarted,
      minLength,
    } = this.state;

    return (
      <div className="App">
        <button
          type="button"
          className="button is-info"
          onClick={this.start}
        >
          {isStarted ? 'End' : 'Start'}
        </button>

        {isStarted && (
          <div className="Content">
            <button
              type="button"
              className="button is-info"
              onClick={this.sortAlphabetically}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className="button is-info"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>

            <button
              type="button"
              className="button is-info"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              type="button"
              className="button is-info"
              onClick={this.reset}
            >
              Reset
            </button>

            <div className="select is-info">
              <select onChange={(e) => this.maxLengthGoods(e)}>
                {selectedNumbers.map((number) => (
                  <option
                    key={`selectNumber${number}`}
                    value={number}
                  >
                    {number}
                  </option>
                ))}
              </select>
            </div>

            <ol className="Goods">
              {getReorderedGoods(
                goodsFromServer,
                sortType,
                isReversed,
                minLength,
              ).map(good => (
                <li
                  key={good}
                  className="Goods__item"
                >
                  {good}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    );
  }
}
