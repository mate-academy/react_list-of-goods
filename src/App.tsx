import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

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
  NONE = 'NONE',
  ALPHABET = 'ALPHABET',
  LENGTH = 'LENGTH',
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

  type State = {
    sortType: SortType,
    isReversed: boolean,
  };

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((goodsA: string, goodsB: string) => {
    switch (sortType) {
      case SortType.LENGTH:
        return goodsA.length - goodsB.length;
      case SortType.ALPHABET:
        return goodsA.localeCompare(goodsB);
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

export class App extends Component<{}, State> {
  state = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  reset = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  sortyByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  render() {
    const { sortType, isReversed } = this.state;

    const reorderedGoods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            onClick={this.sortyByAlphabet}
            type="button"
            className={classNames(
              'button is-info',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            className={classNames(
              'button is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
          <button
            type="button"
            className={classNames(
              'button is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={this.reverse}
          >
            Reverse
          </button>
          {(sortType !== SortType.NONE || isReversed)
          && (
            <button
              onClick={this.reset}
              type="button"
              className="button is-danger is-light"
            >
              Reset
            </button>
          )}
        </div>
        <ul>
          <ul>
            {reorderedGoods.map(good => (
              <li key={uuidv4()} data-cy="Good">{good}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
