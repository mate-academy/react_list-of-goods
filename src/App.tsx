import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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
    case SortType.ALPHABET:
      visibleGoods.sort((name1, name2) => (
        name1.localeCompare(name2)
      ));
      break;

    case SortType.LENGTH:
      visibleGoods.sort((product1, product2) => (
        product1.length - product2.length
      ));
      break;

    case SortType.NONE:
      break;

    default: break;
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export class App extends Component<{}, ReorderOptions> {
  state = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  handleReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  handleSortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  handleSortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handleReset = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const visibleGoods = (
      getReorderedGoods(goodsFromServer, { sortType, isReversed })
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn('button is-info', {
              'is-light': sortType !== SortType.ALPHABET,
              pulse: sortType === SortType.ALPHABET,
            })}
            onClick={this.handleSortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn('button is-success', {
              'is-light': sortType !== SortType.LENGTH,
              pulse: sortType === SortType.LENGTH,
            })}
            onClick={this.handleSortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn('button is-warning', {
              'is-light': !isReversed,
              pulse: isReversed,
            })}
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          {sortType !== SortType.NONE || isReversed
            ? (
              <button
                type="button"
                onClick={this.handleReset}
                className="button is-danger"
              >
                Reset
              </button>
            )
            : ''}
        </div>

        <div>
          <ul>
            {visibleGoods.map(product => (
              <li
                data-cy="Good"
                key={product}
              >
                {product}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
