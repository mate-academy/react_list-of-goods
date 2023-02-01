import { Component, ReactNode } from 'react';
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

  visibleGoods.sort((a, b) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return a < b ? -1 : 1;
      case SortType.LENGTH:
        return a.length - b.length;
      default:
        return 0;
    }
  });

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  if (isReversed) {
    return visibleGoods.reverse();
  }

  return visibleGoods;
}

// DON'T save goods to the state
// type State = {
//   isReversed: boolean,
//   sortType: SortType,
// };

export class App extends Component<{}, ReorderOptions> {
  state = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  handleSortType = (order: SortType) => {
    this.setState({ sortType: order });
  };

  handleOrderChange = () => {
    this.setState((state) => ({
      ...state,
      isReversed: !state.isReversed,
    }));
  };

  handleReset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render(): ReactNode {
    const {
      state,
      handleSortType,
      handleOrderChange,
      handleReset,
    } = this;

    const {
      sortType,
      isReversed,
    } = state;

    const {
      ALPHABET,
      LENGTH,
    } = SortType;

    const goods = getReorderedGoods(goodsFromServer, state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button',
              'is-info',
              { 'is-light': sortType !== ALPHABET },
            )}
            onClick={() => handleSortType(ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-success',
              { 'is-light': sortType !== LENGTH },
            )}
            onClick={() => handleSortType(LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-warning ',
              { 'is-light': !isReversed },
            )}
            onClick={handleOrderChange}
          >
            Reverse
          </button>

          {
            (sortType !== SortType.NONE || isReversed) && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={handleReset}
              >
                Reset
              </button>
            )
          }
        </div>

        <ul>
          <ul>
            {goods.map(good => (
              <li key={good} data-cy="Good">{good}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
