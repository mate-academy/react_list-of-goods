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
  ALPABET,
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
      case SortType.ALPABET:
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
    sortType: 0,
  };

  handleSortClick = (
    currentTarget: EventTarget & HTMLButtonElement,
  ) => {
    const { value } = currentTarget;

    this.setState({ sortType: +value });
  };

  handleResetClick = (
    currentTarget: EventTarget & HTMLButtonElement,
  ) => {
    this.handleSortClick(currentTarget);
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
            value="1"
            className={classNames(
              'button',
              'is-info',
              {
                'is-light': this.state.sortType !== SortType.ALPABET,
              },
            )}
            onClick={(event) => {
              this.handleSortClick(event.currentTarget);
            }}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            value="2"
            className={classNames(
              'button',
              'is-success',
              {
                'is-light': this.state.sortType !== SortType.LENGTH,
              },
            )}
            onClick={(event) => {
              this.handleSortClick(event.currentTarget);
            }}
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

          {(this.state.sortType !== 0 || this.state.isReversed)
          && (
            <button
              type="button"
              value="0"
              className="button is-danger is-light"
              onClick={(event) => {
                this.handleResetClick(event.currentTarget);
              }}
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
