import React from 'react';
import cn from 'classnames';
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

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export function getReorderedGoods(
  goods: string[],
  { sortType }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((good1, good2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return good1.localeCompare(good2);

      case SortType.LENGTH:
        return good1.length - good2.length;

      default:
        return 0;
    }
  });

  return visibleGoods;
}

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reset = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const goods = getReorderedGoods(goodsFromServer, this.state);

    const isButtonVisible = isReversed || (sortType !== SortType.NONE);

    if (isReversed) {
      goods.reverse();
    }

    return (
      <div className="wrapper">
        <div className="section content box">
          <div className="buttons">
            <button
              type="button"
              className={cn(
                'button is-info',
                { 'is-light': sortType !== SortType.ALPHABET },
              )}
              onClick={this.sortByAlphabet}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className={cn(
                'button is-success',
                { 'is-light': sortType !== SortType.LENGTH },
              )}
              onClick={this.sortByLength}
            >
              Sort by length
            </button>

            <button
              type="button"
              className={cn(
                'button is-warning',
                { 'is-light': !isReversed },
              )}
              onClick={this.reverse}
            >
              Reverse
            </button>

            {isButtonVisible && (
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
            {goods.map(good => (
              <li data-cy="Good" key={good}>{good}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
