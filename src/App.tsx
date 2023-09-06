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
  sortType: SortType;
  isReversed: boolean;
};

// Use this function in the render method to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort((a, b) => a.localeCompare(b));
  } else if (sortType === SortType.LENGTH) {
    visibleGoods.sort((a, b) => a.length - b.length);
  }

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
  isReversed: boolean;
  sortType: SortType;
};

export class App extends React.Component<{}, State> {
  state = {
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
    this.setState((state) => {
      return {
        isReversed: !state.isReversed,
      };
    });
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;

    return (
      <>
        <div className="section content">
          <div className="buttons">
            <button
              type="button"
              className={
                sortType === SortType.ALPHABET
                  ? 'button is-info'
                  : 'button is-info is-light'
              }
              onClick={this.sortByAlphabet}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className={
                sortType === SortType.LENGTH
                  ? 'button is-info'
                  : 'button is-info is-light'
              }
              onClick={this.sortByLength}
            >
              Sort by length
            </button>

            <button
              type="button"
              className={
                isReversed === true
                  ? 'button is-info'
                  : 'button is-info is-light'
              }
              onClick={this.reverse}
            >
              Reverse
            </button>
            {(sortType !== SortType.NONE || isReversed === true) && (
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
            <ul>
              {getReorderedGoods(goodsFromServer, { sortType, isReversed }).map(
                (good) => {
                  return (
                    <li key={`${good}`} data-cy="Good">
                      {good}
                    </li>
                  );
                },
              )}
            </ul>
          </ul>
        </div>
      </>
    );
  }
}
