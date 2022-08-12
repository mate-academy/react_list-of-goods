/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import cn from 'classnames';

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

const getSortedList = (
  userGoods: string[],
  sortType: SortType,
  isReversed: boolean,
) => {
  const goods = [...userGoods];

  switch (sortType) {
    case SortType.ALPABET:
      goods.sort((a, b) => a.localeCompare(b));
      break;

    case SortType.LENGTH:
      goods.sort((a, b) => a.length - b.length);
      break;
    case SortType.NONE:
    default:
      break;
  }

  if (isReversed) {
    goods.reverse();
  }

  return goods;
};

export class App extends React.Component <{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: 0,
  };

  start = () => {
    this.setState({ isStarted: true });
    this.forceUpdate();
  };

  sortByAlphabet = () => {
    this.setState((currentState) => ({
      sortType: (currentState.sortType === SortType.ALPABET
        ? SortType.NONE
        : SortType.ALPABET
      ),
    }));
  };

  sortByLength = () => {
    this.setState((currentState) => ({
      sortType: (currentState.sortType === SortType.LENGTH
        ? SortType.NONE
        : SortType.LENGTH
      ),
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: 0,
    });
  };

  render() {
    const {
      isStarted,
      isReversed,
      sortType,
    } = this.state;

    const goods = getSortedList(goodsFromServer, sortType, isReversed);

    return (
      <div className="App">
        {!isStarted && (
          <button
            type="button"
            className="
              button
              is-success
              is-rounded
            "
            onClick={this.start}
          >
            Start
          </button>
        )}

        {isStarted && (
          <>
            <div className="container">
              <button
                type="button"
                className={cn(
                  'button',
                  'is-warning',
                  'is-rounded',
                  { 'btn-active': SortType.ALPABET === sortType },
                )}
                onClick={this.sortByAlphabet}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                className={cn(
                  'button',
                  'is-warning',
                  'is-rounded',
                  { 'btn-active': SortType.LENGTH === sortType },
                )}
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                type="button"
                className={cn(
                  'button',
                  'is-warning',
                  'is-rounded',
                  { 'btn-active': isReversed === true },
                )}
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                type="button"
                className="
                  button
                  is-danger
                  is-rounded
                "
                onClick={this.reset}
              >
                Reset
              </button>
            </div>

            <ul className="Goods">
              {goods.map(good => (
                <li className="Goods__item" key={good}>{good}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}
