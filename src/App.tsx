import React, { Component } from 'react';
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

// Use this function in the render to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  // Sort and reverse goods if needed
  // eslint-disable-next-line no-console
  visibleGoods.sort((a: string, b: string) => {
    switch (sortType) {
      case SortType.ALPABET:
        return a.localeCompare(b);
      case SortType.LENGTH:
        return a.length - b.length;
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

export class App extends Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  render(): React.ReactNode {
    const { isReversed, sortType } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              { 'is-light': sortType !== SortType.ALPABET },
            )}
            onClick={() => {
              this.setState(
                { sortType: SortType.ALPABET },
              );
            }}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={() => {
              this.setState(
                { sortType: SortType.LENGTH },
              );
            }}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={() => {
              this.setState((prevState) => {
                return { isReversed: !prevState.isReversed };
              });
            }}
          >
            Reverse
          </button>

          {
            (isReversed || sortType !== SortType.NONE)
              && (
                <button
                  type="button"
                  className="button is-danger is-light"
                  onClick={() => {
                    this.setState({
                      isReversed: false,
                      sortType: SortType.NONE,
                    });
                  }}
                >
                  Reset
                </button>
              )
          }
        </div>

        <ul>
          {
            getReorderedGoods(goodsFromServer, {
              sortType,
              isReversed,
            })
              .map(product => (
                <li data-cy="Good">{product}</li>
              ))
          }
        </ul>
      </div>
    );
  }
}
