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

// Use this function in the render method to prepare goods
function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  visibleGoods.sort((good1, good2) => {
    switch (sortType) {
      case (SortType.ALPHABET):
        return good1.localeCompare(good2);

      case (SortType.LENGTH):
        return good1.length - good2.length;

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  // Sort and reverse goods if needed
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

// DON'T save goods to the state
// type State = {
//   isReversed: boolean,
//   sortType: SortType,
// };

type State = {
  sortType:SortType;
  isReversed:boolean;
};

export class App extends React.Component<{}, State> {
  state:State = {
    sortType: 0,
    isReversed: false,
  };

  sortAlpabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  sortReverse = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  resetState = () => {
    this.setState({ sortType: 0, isReversed: false });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const goods = getReorderedGoods(goodsFromServer, { sortType, isReversed });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            onClick={this.sortAlpabet}
            className={classNames(
              'button',
              'is-info',
              { 'is-light': sortType !== SortType.NONE },
            )}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={this.sortLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-warning',
              { 'is-light': isReversed === false },
            )}
            onClick={this.sortReverse}
          >
            Reverse
          </button>

          {(sortType || isReversed) && (
            <button
              type="button"
              className={classNames(
                'button',
                'is-danger',
                'is-light',
              )}
              onClick={this.resetState}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {goods.map(good => (<li data-cy="Good" key={good}>{good}</li>))}
          </ul>
        </ul>
      </div>
    );
  }
}
