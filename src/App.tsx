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

  visibleGoods.sort((good1, good2): number => {
    switch (sortType) {
      case SortType.ALPHABET:
        return good1.localeCompare(good2);
        break;
      case SortType.LENGTH:
        return good1.length - good2.length;
      default:
        return 0;
    }
  });

  if (isReversed) {
    return visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
  isChanged: boolean,
};

export class App extends React.PureComponent<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
    isChanged: false,
  };

  sortAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET, isChanged: true });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH, isChanged: true });
  };

  toReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
      isChanged: !state.isChanged,
    }));
  };

  toReset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
      isChanged: false,
    });
  };

  render() {
    const { isChanged, isReversed } = this.state;

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
            onClick={this.sortAlphabet}
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
            onClick={this.toReverse}
          >
            Reverse
          </button>

          {(isChanged || isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.toReset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {getReorderedGoods(goodsFromServer, this.state).map(good => (
              <li key={good} data-cy="Good">
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
