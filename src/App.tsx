/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { GoodsList } from './components/GoodsList';

import './App.scss';

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

const options = [
  { id: 1, value: 1 },
  { id: 2, value: 2 },
  { id: 3, value: 3 },
  { id: 4, value: 4 },
  { id: 5, value: 5 },
  { id: 6, value: 6 },
  { id: 7, value: 7 },
  { id: 8, value: 8 },
  { id: 9, value: 9 },
  { id: 10, value: 10 },
];

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
  // Not to mutate the original array
  const visibleGoods = [...goods].filter(good => good.length >= minLength);

  visibleGoods.sort((g1: string, g2:string) => {
    switch (sortType) {
      case SortType.ALPABET:
        return g1.localeCompare(g2);
      case SortType.LENGTH:
        return g1.length - g2.length;
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
interface State {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
  minLength: number,
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    // eslint-disable-next-line react/no-unused-state
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
    minLength: 1,
  };

  start = () => {
    this.setState({ isStarted: true });
  };

  sortAlphabeth = () => {
    this.setState({ sortType: SortType.ALPABET, isReversed: false });
  };

  sortLength = () => {
    this.setState({ sortType: SortType.LENGTH, isReversed: false });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
      minLength: 1,
    });
  };

  render() {
    const {
      isReversed,
      sortType,
      isStarted,
      minLength,
    } = this.state;
    const reorderedGoods = getReorderedGoods(
      goodsFromServer, sortType, isReversed, minLength,
    );

    return (
      <div className="App">
        {isStarted ? (
          <>
            <div className="App__select-container select is-link">
              <label
                className="App__label"
                htmlFor="select"
              >
                Select minimum length
              </label>
              <select
                id="select"
                value={this.state.minLength}
                onChange={(event) => {
                  this.setState({ minLength: +event.currentTarget.value });
                }}
              >
                {options.map((option) => (
                  <option key={option.id}>{option.value}</option>
                ))}
              </select>
            </div>
            <GoodsList goods={reorderedGoods} />
            <div className="App__buttons">
              <button
                className="button is-info is-light"
                type="button"
                onClick={this.sortAlphabeth}
              >
                Sort alphabetically
              </button>

              <button
                className="button is-link is-light"
                type="button"
                onClick={this.sortLength}
              >
                Sort by length
              </button>

              <button
                className="button is-warning is-light"
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                className="button is-danger is-light"
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>
          </>
        ) : (
          <button
            className="App__button--start button is-success is-light is-large"
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        )}
      </div>
    );
  }
}
