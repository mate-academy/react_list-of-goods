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
  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((good1, good2) => good1.localeCompare(good2));
      break;
    case SortType.LENGTH:
      visibleGoods.sort((good1, good2) => good1.length - good2.length);
      break;
    default:
      break;
  }

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

  handleSortClick = (sortType: SortType) => () => {
    this.setState({ sortType });
  }

  handleReverseClick = () => {
    const { isReversed } = this.state;

    this.setState({ isReversed: !isReversed });
  }

  handleResetClick = () => {
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
            className={`button is-info ${sortType === SortType.ALPHABET ? '' : 'is-light'}`}
            onClick={this.handleSortClick(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${sortType === SortType.LENGTH ? '' : 'is-light'}`}
            onClick={this.handleSortClick(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning ${isReversed === true ? '' : 'is-light'}`}
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
                onClick={this.handleResetClick}
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
