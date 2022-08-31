/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component } from 'react';
import { Goods } from './components/Goods/Goods';

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

  visibleGoods.sort((a, b) => {
    switch (sortType) {
      case SortType.ALPABET:
        return a.localeCompare(b);
      case SortType.LENGTH:
        return a.length - b.length;
      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
  minLength: number,
};

const initialState: State = {
  isStarted: false,
  isReversed: false,
  sortType: SortType.NONE,
  minLength: 1,
};

export class App extends Component {
  state: Readonly<State> = { ...initialState };

  start = () => this.setState({
    isStarted: true,
  });

  sort = (sortType: SortType) => this.setState({
    sortType,
  });

  reverse = () => this.setState((state: State) => ({
    isReversed: !state.isReversed,
  }));

  adjustLength = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.currentTarget.value;

    this.setState({
      minLength: +newValue,
    });
  };

  reset = () => this.setState({
    ...initialState,
    isStarted: true,
  });

  render() {
    const {
      isStarted,
      isReversed,
      sortType,
      minLength,
    } = this.state;

    const visibleGoods = getReorderedGoods(
      goodsFromServer,
      sortType,
      isReversed,
      minLength,
    );

    return (
      <div className="App">
        <div className="App__controls">
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
              <button
                type="button"
                onClick={() => this.sort(SortType.ALPABET)}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={() => this.sort(SortType.LENGTH)}
              >
                Sort by length
              </button>

              <button
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>

              <label>
                Minimal good length:
                <select
                  name="minLength"
                  id="minLength"
                  value={minLength}
                  onChange={this.adjustLength}
                >
                  {
                    Array
                      .from({ length: 10 }, (_, index) => index + 1)
                      .map(option => (
                        <option
                          value={option}
                          key={option}
                        >
                          {option}
                        </option>
                      ))
                  }
                </select>
              </label>
            </>
          )}
        </div>
        {isStarted && <Goods visibleGoods={visibleGoods} />}
      </div>
    );
  }
}
