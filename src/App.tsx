import React from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';
import { Goods } from './components/Goods';

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

  visibleGoods.sort((good1, good2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return (good1.localeCompare(good2));

      case SortType.LENGTH:
        return (good1.length - good2.length);

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
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleGoodSort(sortBy: SortType) {
    this.setState({ sortType: sortBy });
  }

  handleGoodReverse() {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  }

  handleActionsReset() {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  }

  render() {
    const { sortType, isReversed } = this.state;
    const isNeedToReset = sortType !== SortType.NONE || isReversed;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={() => this.handleGoodSort(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={() => this.handleGoodSort(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={() => this.handleGoodReverse()}
          >
            Reverse
          </button>

          {isNeedToReset && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => this.handleActionsReset()}
            >
              Reset
            </button>
          )}
        </div>

        <Goods goods={getReorderedGoods(goodsFromServer, this.state)} />
      </div>
    );
  }
}
