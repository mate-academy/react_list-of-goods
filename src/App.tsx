import { Component } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

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

  if (!SortType.NONE) {
    visibleGoods.sort((prev, curr) => {
      switch (sortType) {
        case SortType.ALPHABET:
          return prev.localeCompare(curr);

        case SortType.LENGTH:
          return prev.length - curr.length;

        default:
          return 0;
      }
    });
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

interface State {
  sortType: SortType;
  isReversed: boolean;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  render() {
    const { sortType, isReversed } = this.state;
    const goods = getReorderedGoods(goodsFromServer, {
      sortType,
      isReversed,
    });
    const isResetButtonVisible = sortType !== SortType.NONE || isReversed;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button',
              'is-info',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={() => this.setState({ sortType: SortType.ALPHABET })}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={() => this.setState({ sortType: SortType.LENGTH })}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={() => {
              this.setState(({ isReversed: prevIsReversed }) => (
                { isReversed: !prevIsReversed }
              ));
            }}
          >
            Reverse
          </button>

          {isResetButtonVisible && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => {
                this.setState({ sortType: SortType.NONE, isReversed: false });
              }}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {goods.map(good => (
              <li data-cy="Good" key={uuidv4()}>{good}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
