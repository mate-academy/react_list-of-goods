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
  NONE = 'none',
  ALPHABET = 'alphabet',
  LENGTH = 'length',
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

  visibleGoods.sort((a, b) => {
    switch (sortType) {
      case 'none':
        return 0;

      case 'alphabet':
        return (a.localeCompare(b));

      case 'length':
        return (a.length - b.length);

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

export class App extends React.PureComponent<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState(() => ({
      isReversed: false,
      sortType: SortType.NONE,
    }));
  };

  render() {
    const isAlphabet = this.state.sortType !== SortType.ALPHABET;
    const isLength = this.state.sortType !== SortType.LENGTH;
    const hideReset = this.state.sortType === 'none' && !this.state.isReversed;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={isAlphabet
              ? 'button is-info is-light'
              : 'button is-info'}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={isLength
              ? 'button is-success is-light'
              : 'button is-success'}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={this.state.isReversed
              ? 'button is-warning'
              : 'button is-warning is-light'}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {hideReset
            ? ''
            : (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.reset}
              >
                Reset
              </button>
            )}
        </div>

        <ul>
          {getReorderedGoods(goodsFromServer, this.state).map((good) => {
            return <li data-cy="Good" key={good}>{good}</li>;
          })}
        </ul>
      </div>
    );
  }
}
