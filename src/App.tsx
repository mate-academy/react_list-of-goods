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
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((a, b) => a.localeCompare(b));
      break;
    case SortType.LENGTH:
      visibleGoods.sort((a, b) => a.length - b.length);
      break;
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      visibleGoods;
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

interface State {
  isReversed: boolean,
  sortType: SortType,
}

// eslint-disable-next-line react/prefer-stateless-function
export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  hadleClickAlphabetical = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  hadleClickLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  hadleClickReverse = () => {
    const { isReversed } = this.state;

    if (isReversed) {
      this.setState({ isReversed: false });
    } else {
      this.setState({ isReversed: true });
    }
  };

  hadleReset = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const goodsForRender = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-success ${sortType !== SortType.ALPHABET && 'is-light'}`}
            onClick={this.hadleClickAlphabetical}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${sortType !== SortType.LENGTH && 'is-light'}`}
            onClick={this.hadleClickLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning ${!isReversed && 'is-light'}`}
            onClick={this.hadleClickReverse}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.hadleReset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {goodsForRender.map(good => (
              <li data-cy="Good" key={good}>
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
