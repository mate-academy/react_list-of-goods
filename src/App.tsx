import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

import GoodsList from './components/GoodsList/GoodsList';

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
  const visibleGoods = [...goods];

  visibleGoods.sort(
    (prevGood, nextGood) => {
      switch (sortType) {
        case SortType.LENGTH:
          return prevGood.length - nextGood.length;
        case SortType.ALPHABET:
          return prevGood.localeCompare(nextGood);
        default:
          return 0;
      }
    },
  );

  return !isReversed
    ? visibleGoods
    : visibleGoods.reverse();
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  readonly state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleSortAlphabetic = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  handleSortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  handleReverse = () => {
    this.setState((prevState) => ({
      isReversed: !prevState.isReversed,
    }));
  };

  handleReset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;

    const options = {
      sortType,
      isReversed,
    };

    const isReordered
      = isReversed || sortType !== SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={() => this.handleSortAlphabetic()}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={() => this.handleSortByLength()}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={() => this.handleReverse()}
          >
            Reverse
          </button>

          {isReordered && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => this.handleReset()}
            >
              Reset
            </button>
          )}
        </div>

        <GoodsList
          goods={getReorderedGoods(
            goodsFromServer,
            options,
          )}
        />

      </div>
    );
  }
}
