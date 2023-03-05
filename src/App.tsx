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

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  visibleGoods.sort((a, b) => {
    switch (sortType) {
      case 1:
        return a.localeCompare(b);
      case 2:
        return a.length - b.length;
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
    sortType: 0,
  };

  sortAlph = () => {
    this.setState({ sortType: 1 });
  };

  sortLength = () => {
    this.setState({ sortType: 2 });
  };

  reverse = () => {
    this.setState(state => {
      return { isReversed: !state.isReversed };
    });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: 0,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              sortType === 1
                ? 'button is-info'
                : 'button is-info is-light'
            }
            onClick={this.sortAlph}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={sortType === 2
              ? 'button is-success'
              : 'button is-success is-light'}
            onClick={this.sortLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={isReversed
              ? 'button is-warning'
              : 'button is-warning is-light'}
            onClick={this.reverse}
          >
            Reverse
          </button>

          { (isReversed || sortType !== 0) && (
            <button
              type="button"
              className={
                sortType === 0 && !isReversed
                  ? 'button is-info'
                  : 'button is-info is-light'
              }
              onClick={this.reset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {getReorderedGoods(goodsFromServer, this.state).map(item => (
              <li key={item}>
                {item}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
