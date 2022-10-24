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

  visibleGoods.sort((good1: string, good2: string) => {
    switch (sortType) {
      case SortType.LENGTH:
        return good1.length - good2.length;
      case SortType.ALPHABET:
        return good1.localeCompare(good2);
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

  handleSortClick = (sortType: SortType) => {
    this.setState({ sortType });
  };

  handleResetClick = (sortType: SortType) => {
    this.handleSortClick(sortType);
    this.setState({ isReversed: false });
  };

  handleReverseClick = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  render() {
    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button',
              'is-info',
              {
                'is-light': this.state.sortType !== SortType.ALPHABET,
              },
            )}
            onClick={() => this.handleSortClick(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-success',
              {
                'is-light': this.state.sortType !== SortType.LENGTH,
              },
            )}
            onClick={() => this.handleSortClick(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-warning',
              {
                'is-light': !this.state.isReversed,
              },
            )}
            onClick={this.handleReverseClick}
          >
            Reverse
          </button>

          {(this.state.sortType !== SortType.NONE || this.state.isReversed)
          && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => this.handleResetClick(SortType.NONE)}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {getReorderedGoods(goodsFromServer, this.state)
              .map(good => {
                return (
                  <li
                    data-cy="Good"
                    key={good}
                  >
                    {good}
                  </li>
                );
              })}
          </ul>
        </ul>
      </div>
    );
  }
}
