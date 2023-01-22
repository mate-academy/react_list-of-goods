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
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  // Sort and reverse goods if needed
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
    sortType: 0,
  };

  sortAlph = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  sortNone = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  render() {
    const { isReversed, sortType } = this.state;
    const visibleGoods = getReorderedGoods(
      goodsFromServer,
      { sortType, isReversed },
    );

    visibleGoods.sort((f1, f2) => {
      switch (sortType) {
        case SortType.ALPHABET:
          return f1.localeCompare(f2);
        case SortType.LENGTH:
          return f1.length - f2.length;
        case SortType.NONE:
        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={this.sortAlph}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.sortLength}
            className={classNames(
              'button is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
          >
            Sort by length
          </button>

          <button
            type="button"
            onClick={this.reverse}
            className={classNames(
              'button is-warning',
              { 'is-light': !isReversed },
            )}
          >
            Reverse
          </button>
          {
            (sortType !== SortType.NONE || isReversed) && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.sortNone}
              >
                Reset
              </button>
            )
          }
        </div>

        <ul>
          {visibleGoods.map(good => (
            <li
              data-cy="Good"
              key={good}
            >
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
