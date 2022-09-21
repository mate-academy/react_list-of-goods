/* eslint-disable default-case */
import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import { List } from './List';

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
    case SortType.LENGTH:
      visibleGoods.sort((good1, good2) => {
        return good1.length - good2.length;
      });
      break;

    case SortType.ALPABET:
      visibleGoods.sort((good1, good2) => {
        return good1.localeCompare(good2);
      });
      break;

    case SortType.NONE:
      visibleGoods = [...goodsFromServer];
  }

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

  alphabetSort() {
    this.setState({
      sortType: SortType.ALPABET,
    });
  }

  sortByLength() {
    this.setState({
      sortType: SortType.LENGTH,
    });
  }

  reverseArr() {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  resetArr() {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  }

  render() {
    const { isReversed, sortType } = this.state;

    const rightOrder: string[]
    = getReorderedGoods(goodsFromServer, { sortType, isReversed });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button', 'is-info',
              { 'is-light': sortType !== SortType.ALPABET })}
            onClick={() => this.alphabetSort()}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button', 'is-success',
              { 'is-light': sortType !== SortType.LENGTH })}
            onClick={() => this.sortByLength()}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button', 'is-warning',
              { 'is-light': isReversed === false })}
            onClick={() => this.reverseArr()}
          >
            Reverse
          </button>

          {JSON.stringify(goodsFromServer) !== JSON.stringify(rightOrder) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => this.resetArr()}
            >
              Reset
            </button>
          )}
        </div>

        <List list={rightOrder} />
      </div>
    );
  }
}
