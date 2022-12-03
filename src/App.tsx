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

  visibleGoods.sort((good1, good2) => {
    switch (sortType) {
      case SortType.LENGTH:
        return good1.length - good2.length;
      case SortType.ALPHABET:
        return good1.localeCompare(good2);
      case SortType.NONE:
        return 0;
      default:
        throw new Error('Data type error');
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

interface State {
  sortType: SortType,
  isReversed: boolean,
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  sortByAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  render() {
    const {
      sortType,
      isReversed,
    } = this.state;

    const isGoodsListChanged = (sortType !== SortType.NONE) || isReversed;
    const changedGoodsList = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={this.sortByAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {isGoodsListChanged && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.reset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {changedGoodsList.map(listItem => (
              <li data-cy="Good" key={listItem}>
                {listItem}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
