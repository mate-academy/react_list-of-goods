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

  visibleGoods.sort((good1, good2) => {
    switch (sortType) {
      case SortType.LENGTH:
        return good1.length - good2.length;

      case SortType.ALPABET:
        return good1.localeCompare(good2);

      case SortType.NONE:
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
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortGoodsByAlphOnClick = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  sortGoodsByLengthOnClick = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverseGoodsOnClick = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  resetOnClick = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const orderedGoods = getReorderedGoods(goodsFromServer, this.state);
    const isOrderChenged = isReversed || sortType !== SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              {
                'is-light': sortType !== SortType.ALPABET,
              },
            )}
            onClick={this.sortGoodsByAlphOnClick}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-success',
              {
                'is-light': sortType !== SortType.LENGTH,
              },
            )}
            onClick={this.sortGoodsByLengthOnClick}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              {
                'is-light': !isReversed,
              },
            )}
            onClick={this.reverseGoodsOnClick}
          >
            Reverse
          </button>

          {isOrderChenged && (
            <button
              type="button"
              className={classNames(
                'button is-danger',
                {
                  'is-light': isReversed === true,
                },
              )}
              onClick={this.resetOnClick}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {orderedGoods.map((good) => (
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
