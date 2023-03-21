import React from 'react';
import classNames from 'classnames';
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

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  handleSort = (sortType: SortType) => {
    this.setState(state => {
      const isReversed = sortType === SortType.NONE ? false : state.isReversed;

      return { isReversed, sortType };
    });
  };

  render() {
    const { isReversed, sortType } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            onClick={() => this.handleSort(SortType.ALPHABET)}
            className={classNames('button is-info', {
              'is-light': sortType !== SortType.ALPHABET,
            })}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button is-success', {
              'is-light': sortType !== SortType.LENGTH,
            })}
            onClick={() => this.handleSort(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button is-warning', {
              'is-light': isReversed,
            })}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {
            (sortType !== SortType.NONE || isReversed) && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={() => this.handleSort(SortType.NONE)}
              >
                Reset
              </button>
            )
          }
        </div>

        <ul>
          { getReorderedGoods(
            goodsFromServer,
            this.state,
          ).map(good => (
            <li data-cy="Good" key={good}>
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// sortByAlphabet = () => {
//   this.setState({ sortType: SortType.ALPHABET });
// };

// sortByLength = () => {
//   this.setState({ sortType: SortType.LENGTH });
// };

// noneSort = () => {
//   this.setState({ sortType: SortType.NONE, isReversed: false });
// };
