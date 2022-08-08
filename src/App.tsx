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

// DON'T save goods to the state
type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  const visibleGoods = [...goods];

  if (sortType === SortType.ALPABET) {
    visibleGoods.sort((a, b) => a.localeCompare(b));
  } else if (sortType === SortType.LENGTH) {
    visibleGoods.sort((a, b) => a.length - b.length);
  }

  return isReversed
    ? visibleGoods.reverse()
    : visibleGoods;
}

export class App extends React.Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  startWorking = () => {
    this.setState({ isStarted: true });
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverseList = () => {
    this.setState(state => {
      return {
        isReversed: !state.isReversed,
      };
    });
  };

  resetList = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;
    const goods = getReorderedGoods(goodsFromServer, sortType, isReversed);

    return (
      <div className="App block notification is-light">
        {isStarted
          ? (
            <>
              <button
                type="button"
                onClick={this.sortByAlphabet}
                className="button is-primary mr-3"
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={this.sortByLength}
                className="button is-primary mr-3"
              >
                Sort by length
              </button>

              <button
                type="button"
                onClick={this.reverseList}
                className="button is-primary mr-3"
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={this.resetList}
                className="button is-danger"
              >
                Reset
              </button>

              <ul className="Goods">
                {goods.map(good => {
                  return (
                    <li key={good} className="Goods__item">{good}</li>
                  );
                })}
              </ul>
            </>
          )
          : (
            <button
              type="button"
              onClick={this.startWorking}
              className="button is-success"
            >
              Start
            </button>
          )}
      </div>
    );
  }
}
