import React from 'react';
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
  ALPHABET,
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
    case SortType.ALPHABET:
      visibleGoods.sort((a, b) => a.localeCompare(b));
      break;
    case SortType.LENGTH:
      visibleGoods.sort((a, b) => a.length - b.length);
      break;
    default:
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component {
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  setSortType = (sortType: SortType) => {
    this.setState({ sortType });
  };

  setReverse = () => {
    this.setState((Prev: State) => ({ isReversed: !Prev.isReversed }));
  };

  render() {
    const { sortType, isReversed }: ReorderOptions = this.state;
    const isResetVisible = (sortType !== SortType.NONE || isReversed);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button',
              'is-info',
              { 'is-light': sortType !== SortType.ALPHABET })}
            onClick={() => this.setSortType(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button',
              'is-info',
              { 'is-light': sortType !== SortType.LENGTH })}
            onClick={() => this.setSortType(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button',
              'is-info', { 'is-light': isReversed === false })}
            onClick={() => this.setReverse()}
          >
            Reverse
          </button>

          {isResetVisible && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => {
                this.setState({ isReversed: false });
                this.setSortType(SortType.NONE);
              }}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {getReorderedGoods(goodsFromServer,
              { sortType, isReversed }).map(good => (
              // eslint-disable-next-line @typescript-eslint/indent
                <li key={good} data-cy="Good">{good}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
