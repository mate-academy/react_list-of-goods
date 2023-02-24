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
  const visibleGoods = [...goods];

  if (sortType === SortType.LENGTH) {
    visibleGoods.sort((g1, g2) => {
      return g1.length - g2.length;
    });
  }

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort((g1, g2) => {
      return g1.localeCompare(g2);
    });
  }

  if (isReversed) {
    return visibleGoods.reverse();
  }

  // Sort and reverse goods if needed
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortAbc = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  sortLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;

    const visibleGoods = getReorderedGoods(
      goodsFromServer,
      { sortType, isReversed },
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            onClick={this.sortAbc}
            type="button"
            className={
              classNames(
                'button',
                'is-info',
                { 'is-light': sortType !== SortType.ALPHABET },
              )
            }
          >
            Sort alphabetically
          </button>

          <button
            onClick={this.sortLength}
            type="button"
            className={
              classNames(
                'button',
                'is-success',
                { 'is-light': sortType !== SortType.LENGTH },
              )
            }
          >
            Sort by length
          </button>

          <button
            onClick={this.reverse}
            type="button"
            className={
              classNames(
                'button',
                'is-warning',
                { 'is-light': isReversed === false },
              )
            }
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed) && (
            <button
              type="button"
              onClick={this.reset}
              className={
                classNames(
                  'button',
                  'is-danger',
                  'is-light',
                )
              }
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {visibleGoods.map((good) => (
            <li key={good} data-cy="Good">
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
