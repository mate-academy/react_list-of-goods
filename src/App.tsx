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
  sortType: SortType;
  isReversed: boolean;
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions
) {
  const visibleGoods = [...goods];

  const isAlphabeticSort = sortType === SortType.ALPHABET;
  const isLengthSort = sortType === SortType.LENGTH;

  if (isAlphabeticSort) {
    visibleGoods.sort((g1, g2) => g1.localeCompare(g2));
  }

  if (isLengthSort) {
    visibleGoods.sort((g1, g2) => g1.length - g2.length);
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

interface State {
  isReversed: boolean;
  sortType: SortType;
}

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverse = () => {
    this.setState((state) => ({
      ...state,
      isReversed: !state.isReversed,
    }));
  };

  sort = (type: SortType) => {
    this.setState((state) => ({
      ...state,
      sortType: type,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;

    const goods = getReorderedGoods(goodsFromServer, {
      sortType,
      isReversed,
    });

    const isResetButtonShown = sortType !== SortType.NONE || isReversed;
    const isAlphabeticSort = sortType === SortType.ALPHABET;
    const isLengthSort = sortType === SortType.LENGTH;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button', 'is-info', {
              'is-light': !isAlphabeticSort,
            })}
            onClick={() => this.sort(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button', 'is-success', {
              'is-light': !isLengthSort,
            })}
            onClick={() => this.sort(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button', 'is-warning', {
              'is-light': !isReversed,
            })}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {isResetButtonShown && (
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
          {goods.map((good) => (
            <li data-cy="Good" key={good}>
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
