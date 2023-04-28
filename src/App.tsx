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

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort((a, b) => a.localeCompare(b));
  }

  if (sortType === SortType.LENGTH) {
    visibleGoods.sort((a, b) => a.length - b.length);
  }

  if (isReversed) {
    return visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: State = {
    isReversed: false,
    sortType: 0,
  };

  render() {
    const visiblegoods = getReorderedGoods(goodsFromServer, this.state);
    const { isReversed, sortType } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button', 'is-info', sortType === 1 ? '' : 'is-light',
            )}
            onClick={() => this.setState(
              { sortType: 1 },
            )}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button', 'is-success', sortType === 2 ? '' : 'is-light',
            )}
            onClick={() => this.setState(
              { sortType: 2 },
            )}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button', 'is-warning', isReversed ? '' : 'is-light',
            )}
            onClick={() => this.setState((prevState) => (
              ({ isReversed: !prevState.isReversed })
            ))}
          >
            Reverse
          </button>

          {(isReversed || sortType !== 0) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => {
                this.setState({ isReversed: false, sortType: 0 });
              }}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {visiblegoods.map((good) => (
            <li data-cy="Good" key={good}>
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
