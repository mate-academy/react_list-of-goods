/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
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

enum SortType {
  NONE,
  ALPABET,
  LENGTH,
}

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  let visibleGoods = [...goods];

  if (sortType === SortType.ALPABET) {
    visibleGoods = visibleGoods.sort((a, b) => a.localeCompare(b));
  }

  if (sortType === SortType.LENGTH) {
    visibleGoods = visibleGoods.sort((a, b) => a.length - b.length);
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverse = () => {
    this.setState((state) => ({
      ...state,
      isReversed: !state.isReversed,
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      ...state,
      sortType: SortType.LENGTH,
    }));
  };

  sortAlphaBetically = () => {
    this.setState(state => ({
      ...state,
      sortType: SortType.ALPABET,
    }));
  };

  reset = () => {
    this.setState({
      isStarted: false,
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  visible = () => {
    this.setState((state) => ({
      ...state,
      isStarted: !state.isStarted,
    }));
  };

  render() {
    const { isStarted } = this.state;

    return (
      <div className="App">
        {!isStarted && (
          <button
            type="button"
            onClick={this.visible}
            className="button button__start"
          >
            Start
          </button>
        )}
        {isStarted && (
          <>
            <ul className="Goods">
              {getReorderedGoods(
                goodsFromServer,
                this.state.sortType,
                this.state.isReversed,
              ).map(good => {
                return (
                  <li key={good}>{good}</li>
                );
              })}
            </ul>

            <div className="Container">
              <button
                type="button"
                onClick={this.sortAlphaBetically}
                className="button button__sort"
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={this.sortByLength}
                className="button button__length"
              >
                Sort by length
              </button>

              <button
                type="button"
                onClick={this.reverse}
                className="button button__reverse"
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={this.reset}
                className="button button__reset"
              >
                Reset
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}
