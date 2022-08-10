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

// Use this function in the render method

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

    return isReversed
      ? visibleGoods.filter(good => (
        good.length >= minLength
      )).reverse()
      : visibleGoods.filter(good => (
        good.length >= minLength
      ));
  };

  clickOnStart = () => {
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

  // sortLength = (event) => {
  //   this.setState({
  //     minLength:
  //   })
  // }

  reset = () => {
    this.setState({
      sortType: 0,
      isReversed: false,
      minLength: 1,
    });
  };

  render() {
    const {
      isStarted,
      sortType,
      isReversed,
      minLength,
    } = this.state;

    return (
      <div className="App">
        {!isStarted && (
          <button
            type="button"
            className="button is-success"
            onClick={this.clickOnStart}
          >
            Start
          </button>
        )}

        {isStarted && (
          <>
            <button
              type="button"
              className="button is-info"
              onClick={this.sortAlphabetically}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className="button is-link"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>

            <button
              type="button"
              className="button is-warning"
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

            <GoodsList goods={
              this.getReorderedGoods(
                goodsFromServer, sortType, isReversed, minLength,
              )
            }
            />

            <p>Select min size of word to sort</p>

            <select
              name="minLength"
              id="minLength"
              className="select is-link"
              value={minLength}
              onChange={(event) => (
                this.setState({
                  minLength: +event.currentTarget.value,
                })
              )}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </>
        )}
      </div>
    );
  }
}
