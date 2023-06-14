import React from 'react';
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

  visibleGoods.sort((good1: string, good2: string) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return good1.localeCompare(good2);

      case SortType.LENGTH:
        return good1.length - good2.length;

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

export class App extends React.Component <{}, ReorderOptions> {
  state:ReorderOptions = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  sortAlphabetically = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  sortReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);

    const {
      sortType,
      isReversed,
    } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info 
            ${sortType === SortType.ALPHABET ? '' : 'is-light'}`}
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success  
            ${sortType === SortType.LENGTH ? '' : 'is-light'}`}
            onClick={this.sortByLength}

          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning 
            ${isReversed ? '' : 'is-light'}`}
            onClick={this.sortReverse}
          >
            Reverse
          </button>

          {sortType !== SortType.NONE || isReversed !== false
            ? (
              <button
                type="button"
                data-cy="button"
                className="button is-danger is-light "
                onClick={this.reset}
              >
                Reset
              </button>
            )
            : ''}
        </div>

        <ul>
          {visibleGoods.map((good: string) => (
            <li
              key={good}
              data-cy="Good"
            >
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
