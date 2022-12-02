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

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case 0:
      break;

    case 1:
      visibleGoods.sort(
        (good1, good2) => good1.localeCompare(good2),
      );
      break;

    case 2:
      visibleGoods.sort(
        (good1, good2) => (good1.length - good2.length),
      );
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
  isReset: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: 0,
    isReset: false,
  };

  sortByAlphabet = () => {
    this.setState({
      sortType: 1,
      isReset: true,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: 2,
      isReset: true,
    });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: 0,
      isReset: false,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
      isReset: true,
    }));

    if (this.state.isReversed && this.state.sortType === 0) {
      this.setState({ isReset: false });
    }
  };

  render() {
    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);
    const { isReversed, sortType, isReset } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${(sortType === 1) ? '' : 'is-light'}`}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              `button is-success ${(sortType === 2) ? '' : 'is-light'}`
            }
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              `button is-warning ${(isReversed) ? '' : 'is-light'}`
            }
            onClick={this.reverse}
          >
            Reverse
          </button>

          {isReset && (
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
          {visibleGoods.map(good => (
            <li data-cy="Good" key={good}>{good}</li>
          ))}
        </ul>
      </div>
    );
  }
}
