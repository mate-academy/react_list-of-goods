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

  visibleGoods.sort((g1, g2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return g1.localeCompare(g2);
      case SortType.LENGTH:
        return g1.length - g2.length;

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

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reversedMethod = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  resetMethod = () => {
    this.setState({ isReversed: false, sortType: SortType.NONE });
  };

  render(): React.ReactNode {
    const { isReversed, sortType } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`
              button
              is-info
              ${sortType === SortType.ALPHABET ? '' : 'is-light'}`}
            onClick={this.sortAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`
              button
              is-info
              ${sortType === SortType.LENGTH ? '' : 'is-light'}`}
            onClick={this.sortLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`
              button
              is-info
              ${!isReversed && 'is-light'}`}
            onClick={this.reversedMethod}
          >
            Reverse
          </button>

          {isReversed || sortType !== SortType.NONE
            ? (
              <button
                type="button"
                className={`
                  button
                  is-danger
                  is-light
                  ${isReversed || sortType !== SortType.NONE ? '' : 'displayNone'}
                `}
                onClick={this.resetMethod}
              >
                Reset
              </button>
            ) : undefined}
        </div>

        <ul>
          {
            getReorderedGoods(
              goodsFromServer,
              { sortType, isReversed },
            ).map(good => (
              <li data-cy="Good" key={good}>
                {good}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
