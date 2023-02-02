import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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

  visibleGoods.sort((g1, g2) => {
    switch (sortType) {
      case (SortType.ALPHABET):
        return g1.localeCompare(g2);

      case (SortType.LENGTH):
        return g1.length - g2.length;

      case (SortType.NONE):
      default:
        return 0;
    }
  });

  // switch (sortType) {
  //   case (SortType.ALPHABET):
  //     visibleGoods.sort((g1, g2) => g1.localeCompare(g2));
  //     break;

  //   case (SortType.LENGTH):
  //     visibleGoods.sort((g1, g2) => g1.length - g2.length);
  //     break;

  //   case (SortType.NONE):
  //   default:
  //     break;
  // }

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
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleSortType = (type: SortType) => {
    this.setState({ sortType: type });
  };

  reverse = () => (
    this.setState((state) => ({ isReversed: !state.isReversed }))
  );

  reset = () => {
    this.setState({ isReversed: false, sortType: SortType.NONE });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const reorderedGoods = getReorderedGoods(goodsFromServer, this.state);
    const checkForReset = isReversed || sortType !== SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn('button is-info',
              { 'is-light': sortType !== SortType.ALPHABET })}
            onClick={() => {
              this.handleSortType(SortType.ALPHABET);
            }}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn('button is-success',
              { 'is-light': sortType !== SortType.LENGTH })}
            onClick={() => {
              this.handleSortType(SortType.LENGTH);
            }}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn('button is-warning', { 'is-light': !isReversed })}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {checkForReset && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.reset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {reorderedGoods.map((good) => (
            <li
              data-cy="Good"
              key={good}
            >
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
