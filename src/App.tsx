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
  ALPABET,
  LENGTH,
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

// Use this function in the render to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  // Sort and reverse goods if needed
  visibleGoods.sort((x, y) => {
    switch (sortType) {
      case SortType.ALPABET:
        return x[sortType].localeCompare(y[sortType]);

      case SortType.LENGTH:
        return x.length - y.length;
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

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  render() {
    const { isReversed } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            onClick={() => {
              this.setState({ sortType: SortType.ALPABET });
            }}
            type="button"
            className={this.state.sortType === SortType.ALPABET
              ? ('button is-info')
              : ('button is-info is-light')}
          >
            Sort alphabetically
          </button>

          <button
            onClick={() => {
              this.setState({ sortType: SortType.LENGTH });
            }}
            type="button"
            className={this.state.sortType === SortType.LENGTH
              ? ('button is-success')
              : ('button is-success is-light')}
          >
            Sort by length
          </button>

          <button
            onClick={() => {
              this.setState({ isReversed: !isReversed });
            }}
            type="button"
            className={this.state.isReversed
              ? ('button is-warning')
              : ('button is-warning is-light')}
          >
            Reverse
          </button>

          <button
            onClick={() => {
              this.setState({ isReversed: false, sortType: SortType.NONE });
            }}
            type="button"
            className="button is-danger is-light"
          >
            Reset
          </button>
        </div>

        <ul>
          {getReorderedGoods(goodsFromServer, this.state).map(good => (
            <li data-cy="Good" key={good}>
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
