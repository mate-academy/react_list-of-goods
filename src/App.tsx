import React from 'react';
import 'bulma/css/bulma.css';
import classNames from 'classnames';
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

  visibleGoods.sort((first, second) => {
    switch (sortType) {
      case SortType.LENGTH:
        return first.length - second.length;

      case SortType.ALPHABET:
        return first.localeCompare(second);

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  setLengthSort = () => this.setState({ sortType: SortType.LENGTH });

  setAlphabetSort = () => this.setState({ sortType: SortType.ALPHABET });

  revers = () => this.setState(state => ({
    isReversed: !state.isReversed,
  }));

  reset = () => {
    this.setState({ isReversed: false });
    this.setState({ sortType: SortType.NONE });
  };

  setClass = (condition: boolean) => {
    return classNames('button', { 'is-light': condition });
  };

  render() {
    const { isReversed, sortType } = this.state;

    const reorderedGoods = getReorderedGoods(goodsFromServer, this.state);

    const hasOrderChanged = this.state.isReversed || sortType !== SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`
              is-info
              ${this.setClass(sortType !== SortType.ALPHABET)}
            `}
            onClick={this.setAlphabetSort}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`
              is-success
              ${this.setClass(sortType !== SortType.LENGTH)}
            `}
            onClick={this.setLengthSort}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`
              is-warning
              ${this.setClass(!isReversed)}
            `}
            onClick={this.revers}
          >
            Reverse
          </button>

          {hasOrderChanged && (
            <button
              type="button"
              className="button is-danger"
              onClick={this.reset}
            >
              Reset
            </button>
          )}

        </div>

        <ul>
          <ul>
            {reorderedGoods.map(item => (
              <li
                data-cy="Good"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
