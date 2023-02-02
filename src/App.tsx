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

  if (isReversed) {
    visibleGoods.reverse();
  }

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort();
      break;

    case SortType.LENGTH:
      visibleGoods.sort((a, b) => a.length - b.length);
      break;

    default:
      break;
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

  toReverse() {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortAlphabet() {
    this.setState({ sortType: SortType.ALPHABET });
  }

  sortLength() {
    this.setState({ sortType: SortType.LENGTH });
  }

  toReset() {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  }

  render() {
    const { sortType, isReversed } = this.state;
    const sorted = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            onClick={this.sortAlphabet}
            className={classNames(
              'button is-info',
              { 'is-light': SortType.ALPHABET !== sortType },
            )}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.sortLength}
            className={classNames(
              'button is-success',
              { 'is-light': SortType.LENGTH !== sortType },
            )}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={this.toReverse}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed)
          && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.toReset}
            >
              Reset
            </button>
          )}

        </div>

        <ul>
          <ul>
            {sorted.map((good) => (
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
