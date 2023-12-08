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

// Use this function in the render method to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  // Sort and reverse goods if needed
  visibleGoods.sort((good1, good2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return good1.localeCompare(good2);
      case SortType.LENGTH:
        return good1.length - good2.length;
      case SortType.NONE:
        return goodsFromServer.indexOf(good1)
                  - goodsFromServer.indexOf(good2);
      default:
        return 0;
    }
  });
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

// DON'T save goods to the state

export class App extends React.Component {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleSortClick = (sortType: SortType) => {
    this.setState({ sortType });
  }

  handleReverseClick = () => {
    const { isReversed } = this.state;

    this.setState({ isReversed: !isReversed });
  }

  handlerResetClick = () => {
    this.setState({ isReversed: false, sortType: SortType.NONE });
  }

  render() {
    const { sortType, isReversed } = this.state;
    const goods = getReorderedGoods(goodsFromServer, { sortType, isReversed });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={sortType === SortType.ALPHABET
              ? 'button is-info' : 'button is-info is-light'}
            onClick={() => this.handleSortClick(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={sortType === SortType.LENGTH
              ? 'button is-success' : 'button is-success is-light'}
            onClick={() => this.handleSortClick(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={isReversed === true
              ? 'button is-warning' : 'button is-warning is-light'}
            onClick={this.handleReverseClick}
          >
            Reverse
          </button>

          {!(sortType === SortType.NONE
              && isReversed === false)
            && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.handlerResetClick}
              >
                Reset
              </button>
            )}
        </div>

        <ul>
          <ul>
            {
              goods.map((good) => (
                <li data-cy="Good">{good}</li>
              ))
            }
          </ul>
        </ul>
      </div>
    );
  }
}
