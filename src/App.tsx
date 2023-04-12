import React from 'react';
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

  switch (sortType) {
    case 1:
      visibleGoods.sort((g1, g2) => {
        return g1.localeCompare(g2);
      });

      break;

    case 2:
      visibleGoods.sort((g1, g2) => {
        return g1.length - g2.length;
      });

      break;

    default:
      break;
  }

  if (isReversed) {
    return [...visibleGoods].reverse();
  }

  return visibleGoods;
}

export class App extends React.Component {
  state: ReorderOptions = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  sortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  sortInReverse = () => {
    this.setState((state: ReorderOptions) => ({
      isReversed: !state.isReversed,
    }));
  };

  resetSorting = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;

    const goods = getReorderedGoods(
      goodsFromServer,
      { sortType, isReversed },
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            onClick={this.sortAlphabetically}
            type="button"
            className={classNames(
              'button',
              'is-info',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
          >
            Sort alphabetically
          </button>

          <button
            onClick={this.sortByLength}
            type="button"
            className={classNames(
              'button',
              'is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
          >
            Sort by length
          </button>

          <button
            onClick={this.sortInReverse}
            type="button"
            className={classNames(
              'button',
              'is-warning',
              { 'is-light': !isReversed },
            )}
          >
            Reverse
          </button>

          <button
            onClick={this.resetSorting}
            type="button"
            className={classNames(
              'button',
              'is-danger',
              'is-light',
              { 'is-hidden': sortType === SortType.NONE && !isReversed },
            )}
          >
            Reset
          </button>
        </div>

        <ul>
          <ul>
            {goods.map(good => (
              <li
                key={good}
                data-cy="Good"
              >
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
