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
  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort((product1, product2) => (
      product1.localeCompare(product2)
    ));
  }

  if (sortType === SortType.LENGTH) {
    visibleGoods.sort((product1, product2) => (
      product1.length - product2.length
    ));
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

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

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabet = () => (
    this.setState({ sortType: SortType.ALPHABET })
  );

  sortByLength = () => (
    this.setState({ sortType: SortType.LENGTH })
  );

  resetSorting = () => (
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    })
  );

  render(): React.ReactNode {
    const { isReversed, sortType } = this.state;

    const reorderedGoods = getReorderedGoods(goodsFromServer, {
      sortType, isReversed,
    });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button is-info', {
              'is-light': sortType !== SortType.ALPHABET,
            })}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button is-success', {
              'is-light': sortType !== SortType.LENGTH,
            })}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button is-warning', {
              'is-light': isReversed !== true,
            })}
            onClick={this.reverse}
          >
            Reverse
          </button>
          {
            (sortType !== SortType.NONE || isReversed === true)
            && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.resetSorting}
              >
                Reset
              </button>
            )
          }
        </div>

        <ul>
          {reorderedGoods.map(good => (
            <li data-cy="Good">{good}</li>
          ))}
        </ul>
      </div>
    );
  }
}
