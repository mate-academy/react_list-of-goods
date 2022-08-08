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

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
  minLength: number,
) {
  const visibleGoods = [...goods].filter(good => good.length >= minLength);

  visibleGoods.sort((item1, item2) => {
    switch (sortType) {
      case 1:
        return item1.localeCompare(item2);
      case 2:
        return item1.length - item2.length;
      case 0:
      default:
        return 0;
    }
  });

  return isReversed
    ? visibleGoods.reverse()
    : visibleGoods;
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
  minLength: number,
};

export class App extends React.Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: 0,
    minLength: 1,
  };

  keys = new Array(10).fill(0).map(_ => Math.random());

  getStart = () => {
    this.setState({ isStarted: true });
  };

  alphabetSort = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  lengthSort = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  reversArr = () => {
    this.setState(lastState => ({ isReversed: !lastState.isReversed }));
  };

  render() {
    const {
      isStarted, isReversed, sortType, minLength,
    } = this.state;
    const visibleGoods = getReorderedGoods(
      goodsFromServer,
      sortType,
      isReversed,
      minLength,
    );

    return (
      <div>
        {!isStarted && (
          <button
            type="button"
            onClick={this.getStart}
          >
            Start
          </button>
        )}

        {isStarted && (
          <>
            <label>
              Choose a length
              <select onChange={(event) => {
                this.setState({ minLength: +event.target.value });
              }}
              >
                {(new Array(10)).fill(0).map((_, index) => (
                  <option
                    value={index + 1}
                    key={this.keys[index]}
                  >
                    {index + 1}
                  </option>
                ))}
              </select>
            </label>
            <br />
            <button type="button" onClick={this.alphabetSort}>
              Sort alphabetically
            </button>

            <button type="button" onClick={this.lengthSort}>
              Sort by length
            </button>

            <button type="button" onClick={this.reversArr}>
              Reverse
            </button>

            <button type="button" onClick={this.reset}>
              Reset
            </button>

            <ul className="Goods">
              {visibleGoods.map(good => (
                <li className="Goods__item" key={good}>
                  {good}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}
