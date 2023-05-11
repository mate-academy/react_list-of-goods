import React from 'react';
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

interface State {
  sortType: SortType,
  isReversed: boolean,
}

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: State,
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET: {
      visibleGoods.sort((firstGood, secondGood) => {
        return firstGood.localeCompare(secondGood);
      });
      break;
    }

    case SortType.LENGTH: {
      visibleGoods.sort((firstGood, secondGood) => {
        return firstGood.length - secondGood.length;
      });
      break;
    }

    case SortType.NONE: {
      break;
    }

    default: {
      throw new Error('invalid sortType key');
    }
  }

  return isReversed ? visibleGoods.reverse() : visibleGoods;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverseGoods = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  sortGoodsAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortGoodsByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  resetGoodsOrder = () => {
    this.setState({ isReversed: false });
    this.setState({ sortType: SortType.NONE });
  };

  render() {
    const { sortType, isReversed } = this.state;

    const isMutated = this.state.isReversed
      || this.state.sortType !== SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${sortType !== SortType.ALPHABET && 'is-light'}`}
            onClick={this.sortGoodsAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${sortType !== SortType.LENGTH && 'is-light'}`}
            onClick={this.sortGoodsByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning ${!isReversed && 'is-light'}`}
            onClick={this.reverseGoods}
          >
            Reverse
          </button>

          {
            isMutated
              && (
                <button
                  type="button"
                  className="button is-danger is-light"
                  onClick={this.resetGoodsOrder}
                >
                  Reset
                </button>
              )
          }
        </div>

        <ul>
          <ul>
            { getReorderedGoods(goodsFromServer, { sortType, isReversed })
              .map(good => (
                <li data-cy="Good" key={good}>{good}</li>
              ))}
          </ul>
        </ul>
      </div>
    );
  }
}
