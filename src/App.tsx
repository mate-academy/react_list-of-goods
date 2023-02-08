import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import className from 'classnames';

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
  sortType: SortType;
  isReversed: boolean;
};

// Use this function in the render method to prepare goods

// DON'T save goods to the state
type State = {
  isReversed: boolean;
  sortType: SortType;
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  getReorderedGoods = (
    goods: string[],
    { sortType, isReversed }: ReorderOptions,
  ) => {
    const visibleGoods = [...goods];

    switch (sortType) {
      case SortType.ALPHABET:
        visibleGoods.sort((g1, g2) => g1.localeCompare(g2));
        break;

      case SortType.LENGTH:
        visibleGoods.sort((g1, g2) => g1.length - g2.length);
        break;

      default:
        break;
    }

    if (isReversed) {
      visibleGoods.reverse();
    }

    return visibleGoods;
  };

  render(): React.ReactNode {
    const { sortType, isReversed } = this.state;
    const preparedGoods = this.getReorderedGoods(goodsFromServer, {
      ...this.state,
    });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={className('button is-info', {
              'is-light': sortType !== SortType.ALPHABET,
            })}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={className('button is-success', {
              'is-light': sortType !== SortType.LENGTH,
            })}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={className('button is-warning', {
              'is-light': !isReversed,
            })}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed) && (
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
          <ul>
            {preparedGoods.map((good) => (
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
