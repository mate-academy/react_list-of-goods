import { Component } from 'react';
import cn from 'classnames';
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

  visibleGoods.sort((goods1, goods2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return goods1.localeCompare(goods2);
      case SortType.LENGTH:
        return goods1.length - goods2.length;
      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

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

  setSortType = (sortType: SortType) => {
    this.setState({ sortType });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;

    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn(
              'button is-info',
              {
                'is-light': sortType !== SortType.ALPHABET,
              },
            )}
            onClick={() => this.setSortType(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn(
              'button is-success',
              {
                'is-light': sortType !== SortType.LENGTH,
              },
            )}
            onClick={() => this.setSortType(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn(
              'button is-warning',
              {
                'is-light': !isReversed,
              },
            )}
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

        <ul className="goods-list">
          <ul>
            {visibleGoods.map(good => (
              <li
                data-cy="Good"
                className="goods-list__item"
                key={good}
              >
                { good }
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
