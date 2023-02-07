import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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

  if (sortType === 1) {
    visibleGoods.sort();
  }

  if (sortType === 2) {
    visibleGoods.sort((a, b) => a.length - b.length);
  }

  return isReversed ? visibleGoods.reverse() : visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  state = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  render() {
    const { sortType, isReversed } = this.state;
    const goods = getReorderedGoods(goodsFromServer, { sortType, isReversed });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button is-info',
              { 'is-light': sortType !== SortType.ALPHABET })}
            onClick={() => {
              this.setState({ sortType: SortType.ALPHABET });
              this.forceUpdate();
            }}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button is-info',
              { 'is-light': sortType !== SortType.LENGTH })}
            onClick={() => {
              this.setState({ sortType: SortType.LENGTH });
              this.forceUpdate();
            }}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button is-warning',
              { 'is-light': isReversed !== true })}
            onClick={() => {
              this.setState({ isReversed: !isReversed });
              this.forceUpdate();
            }}
          >
            Reverse
          </button>

          {(sortType !== 0 || isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => {
                this.setState({ sortType: SortType.NONE });
                this.setState({ isReversed: false });
                this.forceUpdate();
              }}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {goods.map(good => (<li data-cy="Good" key={good}>{good}</li>))}
        </ul>
      </div>
    );
  }
}
