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
    if (sortType === SortType.ALPHABET && isReversed) {
      return b.localeCompare(a);
    }

    if (sortType === SortType.LENGTH && isReversed) {
      return b.length - a.length;
    }

    switch (sortType) {
      case SortType.ALPHABET:
        return a.localeCompare(b);

      case SortType.LENGTH:
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
    sortType: SortType.NONE,
  };

  sortAlphabetically = () => (
    this.setState({ sortType: SortType.ALPHABET })
  );

  sortLenght = () => (
    this.setState({ sortType: SortType.LENGTH })
  );

  sortRevers = () => (
    this.setState(state => ({
      isReversed: !state.isReversed,
    }))
  );

  sortReset = () => (
    this.setState({ sortType: SortType.NONE, isReversed: false })
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
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
          >
            Sort alphabetically
          </button>

          <button
            onClick={this.sortLenght}
            type="button"
            className={classNames(
              'button is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
          >
            Sort by length
          </button>

          <button
            onClick={this.sortRevers}
            type="button"
            className={classNames(
              'button is-warning',
              { 'is-light': !isReversed },
            )}
          >
            Reverse
          </button>

          {
            (isReversed || sortType !== SortType.NONE) && (
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
