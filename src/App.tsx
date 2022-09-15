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
  { isReversed, sortType }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((productA, productB) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return productA.localeCompare(productB);

      case SortType.LENGTH:
        return productA.length - productB.length;

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
  state: State = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleReverse = () => {
    this.setState((state: State) => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  sortByAlphabet = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  handleReset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            onClick={this.sortByAlphabet}
            className={classNames(
              'button',
              'is-info',
              {
                'is-light':
                sortType !== SortType.ALPHABET,
              },
            )}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.sortByLength}
            className={classNames(
              'button',
              'is-success',
              {
                'is-light':
                sortType !== SortType.LENGTH,
              },
            )}
          >
            Sort by length
          </button>

          <button
            type="button"
            onClick={this.handleReverse}
            className={classNames(
              'button',
              'is-warning',
              { 'is-light': !isReversed },
            )}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed)
            && (
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
            {getReorderedGoods(goodsFromServer, { isReversed, sortType })
              .map((good) => (
                <li
                  key={good}
                  data-cy="Good"
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
