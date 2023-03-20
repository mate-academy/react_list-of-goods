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
      visibleGoods.sort();
      break;
    case SortType.LENGTH:
      visibleGoods.sort((goodA, goodB) => goodA.length - goodB.length);
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
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  render() {
    const {
      sortType,
      isReversed,
    } = this.state;

    const reorderedGoods = getReorderedGoods(goodsFromServer, this.state);
    const isResetButtonVisible = isReversed || sortType !== SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button',
              'is-info',
              {
                'is-light': sortType !== SortType.ALPHABET,
              },
            )}
            onClick={() => (
              this.setState({ sortType: SortType.ALPHABET })
            )}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-success',
              {
                'is-light': sortType !== SortType.LENGTH,
              },
            )}
            onClick={() => (
              this.setState({ sortType: SortType.LENGTH })
            )}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-warning',
              {
                'is-light': !isReversed,
              },
            )}
            onClick={() => (
              this.setState((state) => (
                { isReversed: !state.isReversed }
              ))
            )}
          >
            Reverse
          </button>

          {isResetButtonVisible && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => (
                this.setState({
                  sortType: SortType.NONE,
                  isReversed: false,
                })
              )}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {reorderedGoods.map(good => (
              <li
                data-cy="Good"
                key={good}
              >
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
