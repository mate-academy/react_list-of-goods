import React from 'react';
import classNames from 'classnames';
import dataFromServer from './api/goods';
import 'bulma/css/bulma.css';
import './App.scss';

enum SortType {
  NONE,
  ALPHABET,
  LENGTH,
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  let visibleGoods = [...goods];

  switch (sortType) {
    case (SortType.ALPHABET):
      visibleGoods.sort((a, b) => a.localeCompare(b));
      break;

    case (SortType.LENGTH):
      visibleGoods.sort((a, b) => a.length - b.length);
      break;

    default:
      break;
  }

  if (isReversed) {
    visibleGoods = visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
  isOriginalOrder: boolean,
};

export class App extends React.Component<{}, State> {
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
    isOriginalOrder: true,
  };

  handleSortByAlphabet = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.ALPHABET,
      isOriginalOrder: false,
    });
  };

  handleSortByLength = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.LENGTH,
      isOriginalOrder: false,
    });
  };

  handleReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
      isOriginalOrder: false,
    }));
  };

  handleReset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
      isOriginalOrder: true,
    });
  };

  render() {
    const { isReversed, sortType, isOriginalOrder } = this.state;
    const reorderedGoods = getReorderedGoods(dataFromServer, {
      isReversed,
      sortType,
    });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={this.handleSortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={this.handleSortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={this.handleReverse}
          >
            Reverse
          </button>
          {!isOriginalOrder && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.handleReset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {reorderedGoods.map((good) => (
            <li
              key={good}
              data-cy="Good"
            >
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
