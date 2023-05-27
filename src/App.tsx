import { Component } from 'react';
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

  visibleGoods.sort((a: string, b: string) => {
    if (sortType === 1 && isReversed) {
      return b.localeCompare(a);
    }

    if (sortType === 2 && isReversed) {
      return b.length - a.length;
    }

    switch (sortType) {
      case 1:
        return a.localeCompare(b);

      case 2:
        return a.length - b.length;

      default:
        return 0;
    }
  });

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: 0,
  };

  sortAlphabetically = () => (
    this.setState({ sortType: 1 })
  );

  sortLenght = () => (
    this.setState({ sortType: 2 })
  );

  sortRevers = () => (
    this.setState(state => ({
      isReversed: !state.isReversed,
    }))
  );

  sortReset = () => (
    this.setState({ sortType: 0, isReversed: false })
  );

  render() {
    const { isReversed, sortType } = this.state;

    return (
      <div className="section content">
        <div className="buttons">

          <button
            onClick={this.sortAlphabetically}
            type="button"
            className={classNames(
              'button is-info',
              { 'is-light': sortType !== 1 },
            )}
          >
            Sort alphabetically
          </button>

          <button
            onClick={this.sortLenght}
            type="button"
            className={classNames(
              'button is-success',
              { 'is-light': sortType !== 2 },
            )}
          >
            Sort by length
          </button>

          <button
            onClick={this.sortRevers}
            type="button"
            className={classNames(
              'button is-success',
              { 'is-light': !isReversed },
            )}
          >
            Reverse
          </button>

          {
            (isReversed || sortType !== 0) && (
              <button
                onClick={this.sortReset}
                type="button"
                className="button is-danger is-light"
              >
                Reset
              </button>
            )
          }

        </div>

        <ul>
          <ul>
            {getReorderedGoods(goodsFromServer, this.state).map((good) => (
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
