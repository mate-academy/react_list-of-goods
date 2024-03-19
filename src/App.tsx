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

  // Sort and reverse goods if needed
  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort((a, b) => a.localeCompare(b));
  }

  if (sortType === SortType.LENGTH) {
    visibleGoods.sort((a, b) => a.length - b.length);
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isReversed: boolean;
  sortType: SortType;
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handelSortAplhabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  handelSortLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handelRevese = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  handelReset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            onClick={this.handelSortAplhabet}
            type="button"
            className={`button is-info ${sortType === SortType.ALPHABET ? '' : 'is-light'}`}
          >
            Sort alphabetically
          </button>

          <button
            onClick={this.handelSortLength}
            type="button"
            className={`button is-success ${sortType === SortType.LENGTH ? '' : 'is-light'}`}
          >
            Sort by length
          </button>

          <button
            onClick={this.handelRevese}
            type="button"
            className={`button is-warning ${isReversed ? '' : 'is-light'}`}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.handelReset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {getReorderedGoods(goodsFromServer, { sortType, isReversed }).map(
              good => (
                <li data-cy="Good" key={good}>
                  {good}
                </li>
              ),
            )}
          </ul>
        </ul>
      </div>
    );
  }
}
