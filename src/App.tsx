/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { v4 as uuid4 } from 'uuid';
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
  ALPHABET,
  LENGTH,
}

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
  wordsLength: number,
) {
  const visibleGoods = [...goods]
    .filter(goodItem => goodItem.length >= wordsLength);

  visibleGoods.sort((prev, curr) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return prev.localeCompare(curr);
      case SortType.LENGTH:
        return prev.length - curr.length;
      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
  wordsLength: number,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
    wordsLength: 1,
  };

  render() {
    const {
      isStarted,
      isReversed,
      sortType,
      wordsLength,
    } = this.state;
    const changedArray
      = getReorderedGoods(goodsFromServer, sortType, isReversed, wordsLength);

    return (
      <div className="App notification is-warning">
        {!isStarted && (
          <button
            type="button"
            className="button is-link"
            onClick={() => this.setState({ isStarted: true })}
          >
            Start
          </button>
        )}

        {isStarted && (
          <>
            <ul className="Goods">
              {changedArray.map(goodItem => (
                <li className="Goods__item" key={uuid4()}>
                  {goodItem}
                </li>
              ))}
            </ul>

            <div className="options">
              <button
                type="button"
                className="button is-primary"
                onClick={() => {
                  this.setState({ sortType: SortType.ALPHABET });
                }}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                className="button is-primary"
                onClick={() => {
                  this.setState({ sortType: SortType.LENGTH });
                }}
              >
                Sort by length
              </button>

              <button
                type="button"
                className="button is-info"
                onClick={() => {
                  this.setState((state) => ({ isReversed: !state.isReversed }));
                }}
              >
                Reverse
              </button>

              <button
                type="button"
                className="button is-danger"
                onClick={() => {
                  this.setState({
                    sortType: SortType.NONE,
                    isReversed: false,
                    wordsLength: 1,
                  });
                }}
              >
                Reset
              </button>
            </div>

            <div className="select is-success">
              <select
                onChange={
                  (event) => this
                    .setState({ wordsLength: +event.target.value })
                }
                value={wordsLength}
              >
                {[...Array(10)].map((_, index) => (
                  <option value={index + 1} key={uuid4()}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}
      </div>
    );
  }
}
