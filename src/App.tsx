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

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((currentGood, nextGood) => {
        return currentGood.localeCompare(nextGood);
      });
      break;

    case SortType.LENGTH:
      visibleGoods.sort((currentGood, nextGood) => {
        return currentGood.length - nextGood.length;
      });
      break;

    default:
      break;
  }

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

  sortByAlphabetis = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverseGoods = () => {
    this.setState((state) => {
      return {
        isReversed: !state.isReversed,
      };
    });
  };

  resetAllSorts = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button',
              'is-info',
              { 'is-light': this.state.sortType !== SortType.ALPHABET },
            )}
            onClick={this.sortByAlphabetis}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-success',
              { 'is-light': this.state.sortType !== SortType.LENGTH },
            )}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-warning',
              { 'is-light': !this.state.isReversed },
            )}
            onClick={this.reverseGoods}
          >
            Reverse
          </button>

          {(this.state.isReversed !== false
          || this.state.sortType !== SortType.NONE)
          && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.resetAllSorts}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {getReorderedGoods(goodsFromServer, this.state)
            .map(good => {
              return <li data-cy="Good" key={good}>{good}</li>;
            })}
        </ul>
      </div>
    );
  }
}
