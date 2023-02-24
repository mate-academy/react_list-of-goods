import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import { GoodList } from './component/GoodsList';

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

  visibleGoods.sort((g1, g2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return g1.localeCompare(g2);
      case SortType.LENGTH:
        return g1.length - g2.length;
      default:
        return 0;
    }
  });

  if (isReversed) {
    return visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortByAbc = () => {
    this.setState(() => ({
      sortType: SortType.ALPHABET,
    }));
  };

  sortByLen = () => {
    this.setState(() => ({
      sortType: SortType.LENGTH,
    }));
  };

  reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState(() => ({
      isReversed: false,
      sortType: SortType.NONE,
    }));
  };

  render() {
    const visibleGoods = getReorderedGoods(
      goodsFromServer,
      this.state,
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button',
              'is-info',
              { 'is-light': this.state.sortType !== SortType.ALPHABET },
            )}
            onClick={this.sortByAbc}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-success',
              { 'is-light': this.state.sortType !== SortType.LENGTH },
            )}
            onClick={
              this.sortByLen
            }
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-warning',
              { 'is-light': !this.state.isReversed },
            )}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {(this.state.sortType !== SortType.NONE || this.state.isReversed)
          && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.reset}
            >
              Reset
            </button>
          )}
        </div>
        <GoodList goodsList={visibleGoods} />
      </div>
    );
  }
}
