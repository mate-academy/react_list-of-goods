import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

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

  // Why when I write an arrow function everything works,
  // but when I add a method it destroys everything. It's make me cry, dude..

  doReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  doSortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  doSortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  doReset = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const useGoods = (
      getReorderedGoods(goodsFromServer, { sortType, isReversed })
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={sortType === SortType.ALPHABET
              ? 'button is-info pulse'
              : 'button is-info is-light'}
            onClick={this.doSortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={sortType === SortType.LENGTH
              ? 'button is-success pulse'
              : 'button is-success is-light'}
            onClick={this.doSortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={isReversed
              ? 'button is-warning pulse'
              : 'button is-warning is-light'}
            onClick={this.doReverse}
          >
            Reverse
          </button>

          {sortType !== SortType.NONE || isReversed
            ? (
              <button
                type="button"
                onClick={this.doReset}
                className="button pulse is-danger"
              >
                Reset
              </button>
            )
            : ''}
        </div>

        <div>
          <ul>
            {useGoods.map(product => (
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
