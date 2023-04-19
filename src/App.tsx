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
      case SortType.ALPHABET: return good1.localeCompare(good2);

      case SortType.LENGTH: return good1.length - good2.length;

      default: return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export class App extends Component<{}, ReorderOptions> {
  state: ReorderOptions = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  sortByAlphabet = () => this.setState({ sortType: SortType.ALPHABET });

  sortByLength = () => this.setState({ sortType: SortType.LENGTH });

  reversed = () => this.setState(state => ({ isReversed: !state.isReversed }));

  resetSort = () => this.setState({
    sortType: SortType.NONE,
    isReversed: false,
  });

  render() {
    const { sortType, isReversed } = this.state;
    const visibleGoods = getReorderedGoods(
      goodsFromServer,
      { sortType, isReversed },
    );

    // eslint-disable-next-line no-console
    console.log(sortType);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button is-info',
              { 'is-light': sortType !== 1 })}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button is-success',
              { 'is-light': sortType !== 2 })}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button is-warning',
              { 'is-light': !isReversed })}
            onClick={this.reversed}
          >
            Reverse
          </button>

          {(sortType !== 0 || isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.resetSort}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {visibleGoods.map(good => (
            <li data-cy="Good" key={good}>
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
