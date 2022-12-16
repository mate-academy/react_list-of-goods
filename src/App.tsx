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

// Use this function in the render to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((a, b) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return a.localeCompare(b);
      case SortType.LENGTH:
        return a.length - b.length;
      default:
        return SortType.NONE;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export class App extends React.Component<{}, ReorderOptions> {
  state = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  clickReverse = () => {
    this.setState(state => (
      { isReversed: !state.isReversed }
    ));
  };

  clickReset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            onClick={this.sortByAlphabet}
            type="button"
            className={classNames(
              'button',
              'is-info',
              {
                'is-light': sortType !== SortType.ALPHABET,
              },
            )}
          >
            Sort alphabetically
          </button>

          <button
            onClick={this.sortByLength}
            type="button"
            className={classNames(
              'button',
              'is-success',
              {
                'is-light': sortType !== SortType.LENGTH,
              },
            )}
          >
            Sort by length
          </button>

          <button
            onClick={this.clickReverse}
            type="button"
            className={classNames(
              'button',
              'is-warning',
              {
                'is-light': !isReversed,
              },
            )}
          >
            Reverse
          </button>
          {(isReversed || sortType !== SortType.NONE)
            && (
              <button
                onClick={this.clickReset}
                type="button"
                className="button is-danger is-light"
              >
                Reset
              </button>
            )}
        </div>

        <ul>
          <ul>
            {getReorderedGoods(goodsFromServer, this.state)
              .map(good => (
                <li key={good} data-cy="Good">
                  {good}
                </li>
              ))}
          </ul>
        </ul>
      </div>
    );
  }
}
