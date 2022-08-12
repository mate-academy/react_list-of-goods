/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { GoodsList } from './GoodsList';
import './App.css';

export const goodsFromServer = [
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
  minLength: number,
};

export class App extends React.Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: 0,
    minLength: 1,
  };

  getReorderedGoods = (
    goods: string[],
    sortType: SortType,
    isReversed: boolean,
    minLength: number,
  ) => {
    const visibleGoods = [...goods];

    visibleGoods.sort((a, b) => {
      switch (sortType) {
        case 1:
          return a.localeCompare(b);

        case 2:
          return a.length - b.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return visibleGoods.filter(good => (
      good.length >= minLength
    ));
  };

  onStart = () => {
    this.setState(state => ({
      isStarted: !state.isStarted,
    }));
  };

  sortAlphabetically = () => {
    this.setState({
      sortType: 1,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: 2,
    });
  };

  reverseSort = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      sortType: 0,
      isReversed: false,
      minLength: 1,
    });
  };

  minLengthSort = (numLengthToSort: number) => {
    this.setState({
      minLength: numLengthToSort,
    });
  };

  render() {
    const {
      isStarted,
      sortType,
      isReversed,
      minLength,
    } = this.state;

    const goodsToShow = this.getReorderedGoods(
      goodsFromServer, sortType, isReversed, minLength,
    );

    return (
      <div className="App">
        {!isStarted && (
          <button
            type="button"
            className="button is-success"
            onClick={this.onStart}
          >
            Start
          </button>
        )}

        {isStarted && (
          <>
            <button
              type="button"
              className={`button ${sortType === 1 ? 'is-info' : ''}`}
              onClick={this.sortAlphabetically}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className={`button ${sortType === 2 ? 'is-link' : ''}`}
              onClick={this.sortByLength}
            >
              Sort by length
            </button>

            <button
              type="button"
              className={`button ${isReversed ? 'is-warning' : ''}`}
              onClick={this.reverseSort}
            >
              Reverse
            </button>

            <button
              type="button"
              className="button is-danger"
              onClick={this.reset}
            >
              Reset
            </button>

            <GoodsList goods={goodsToShow} />

            <p>Select min size of word to sort</p>

            <select
              name="minLength"
              id="minLength"
              className="select is-link"
              value={minLength}
              onChange={(event) => (
                this.minLengthSort(+event.currentTarget.value)
              )}
            >
              {Array(10).fill(1).map((option, i) => {
                const val = option + i;

                return (
                  <option
                    value={val}
                    key={val}
                  >
                    {val}
                  </option>
                );
              })}
            </select>
          </>
        )}
      </div>
    );
  }
}
