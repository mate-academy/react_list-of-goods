import classNames from 'classnames';
import { Component } from 'react';
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
      case SortType.ALPABET:
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

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  handleAlphSort = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  handleLengthSort = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handleReset = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const goods = getReorderedGoods(goodsFromServer, { sortType, isReversed });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              classNames(
                'button is-info',
                {
                  'is-light': sortType !== SortType.ALPABET,
                },
              )
            }
            onClick={this.handleAlphSort}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              classNames(
                'button is-success',
                {
                  'is-light': sortType !== SortType.LENGTH,
                },
              )
            }
            onClick={this.handleLengthSort}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              classNames(
                'button is-warning',
                {
                  'is-light': !isReversed,
                },
              )
            }
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE
            || isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.handleReset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {goods.map((good) => (
              <li key={good} data-cy="Good">{good}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
