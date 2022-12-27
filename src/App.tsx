import React from 'react';
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
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleSort = (sortBy: SortType) => {
    switch (sortBy) {
      case SortType.ALPHABET:
        this.setState({ sortType: sortBy });
        break;

      case SortType.LENGTH:
        this.setState({ sortType: SortType.LENGTH });
        break;

      default:
        break;
    }
  };

  handleReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  handleReset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const goodsToRender = getReorderedGoods(goodsFromServer, this.state);
    const isButtonVisible = isReversed || sortType !== SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn(
              'button is-info',
              { 'is-light': this.state.sortType !== SortType.ALPHABET },
            )}
            onClick={() => this.handleSort(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn(
              'button is-success',
              { 'is-light': this.state.sortType !== SortType.LENGTH },
            )}
            onClick={() => this.handleSort(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn(
              'button is-warning',
              { 'is-light': !this.state.isReversed },
            )}
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          {isButtonVisible && (
            <button
              type="button"
              onClick={this.handleReset}
              className="button is-danger is-light"
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {goodsToRender.map(good => (
              <li data-cy="Good" key={good}>{good}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
