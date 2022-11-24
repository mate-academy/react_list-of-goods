import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import { GoodsList } from './Components/GoodsList';

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
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  // Sort and reverse goods if needed
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component< {}, State > {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleReverseOrder = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  handleOrderByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  handleOrderByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handleInitialOrder = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const visibleGoods = getReorderedGoods(
      goodsFromServer, { isReversed, sortType },
    );
    const resetButtonCondition = isReversed || sortType !== SortType.NONE;

    visibleGoods.sort((g1, g2) => {
      switch (sortType) {
        case SortType.ALPHABET:
          return g1.localeCompare(g2);

        case SortType.LENGTH:
          return g1.length - g2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              {
                'is-light': sortType !== SortType.ALPHABET,
              },
            )}
            onClick={this.handleOrderByAlphabet}
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
            onClick={this.handleOrderByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              {
                'is-light': isReversed === false,
              },
            )}
            onClick={this.handleReverseOrder}
          >
            Reverse
          </button>

          {resetButtonCondition && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.handleInitialOrder}
            >
              Reset
            </button>
          )}
        </div>

        <GoodsList goods={visibleGoods} />
      </div>
    );
  }
}
