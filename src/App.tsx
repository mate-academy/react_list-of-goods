import { Component } from 'react';
import classNames from 'classnames';
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
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.LENGTH:
      visibleGoods.sort((curr, next) => curr.length - next.length);
      break;
    case SortType.ALPABET:
      visibleGoods.sort((curr, next) => curr.localeCompare(next));
      break;
    case SortType.NONE:
      break;
    default:
      break;
  }

  // Sort and reverse goods if needed
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);
  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  render() {
    const {
      isReversed,
      sortType,
    } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button', 'is-info',
              { 'is-light': sortType !== SortType.ALPABET })}
            onClick={() => this.setState((state) => ({
              ...state,
              sortType: SortType.ALPABET,
            }))}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button', 'is-info',
              { 'is-light': sortType !== SortType.LENGTH })}
            onClick={() => this.setState((state) => ({
              ...state,
              sortType: SortType.LENGTH,
            }))}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button', 'is-info',
              { 'is-light': !isReversed })}
            onClick={() => this.setState((state) => ({
              ...state,
              isReversed: !state.isReversed,
            }))}
          >
            Reverse
          </button>

          {(isReversed || sortType !== SortType.NONE) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => this.setState(() => ({
                sortType: SortType.NONE,
                isReversed: false,
              }))}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {getReorderedGoods(goodsFromServer, this.state).map((good) => (
              <li key={good} data-cy="Good">{good}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
