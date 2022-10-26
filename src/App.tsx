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
  let visibleGoods = [...goods];

  switch (sortType) {
    case SortType.LENGTH:
      visibleGoods.sort((a, b) => (a.length - b.length));
      break;

    case SortType.ALPABET:
      visibleGoods.sort((a, b) => (a.localeCompare(b)));
      break;

    default:
      break;
  }

  if (isReversed) {
    visibleGoods = visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  setSortType = (type: SortType) => {
    this.setState({ sortType: type });
  };

  toggleReverse = (value: boolean) => {
    this.setState({ isReversed: value });
  };

  onReset = () => {
    this.toggleReverse(false);
    this.setSortType(SortType.NONE);
  };

  render() {
    const { isReversed, sortType } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames({ button: true },
              { 'is-info': true },
              { 'is-light': sortType !== SortType.ALPABET })}
            onClick={() => (this.setSortType(SortType.ALPABET))}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames({ button: true },
              { 'is-success': true },
              { 'is-light': sortType !== SortType.LENGTH })}
            onClick={() => (this.setSortType(SortType.LENGTH))}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames({ button: true },
              { 'is-warning': true },
              { 'is-light': !isReversed })}
            onClick={() => {
              if (isReversed) {
                this.toggleReverse(false);
              } else {
                this.toggleReverse(true);
              }
            }}
          >
            Reverse
          </button>

          {(isReversed || sortType !== SortType.NONE) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => (this.onReset())}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {getReorderedGoods(goodsFromServer, {
              sortType,
              isReversed,
            }).map(good => (<li data-cy="Good" key={good}>{good}</li>))}
          </ul>
        </ul>
      </div>
    );
  }
}
