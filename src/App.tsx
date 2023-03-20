import { Component } from 'react';
import classNames from 'classnames';
import { GoodList } from './components/GoodList';
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

  visibleGoods.sort((curGood, nextGood) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return curGood.localeCompare(nextGood);

      case SortType.LENGTH:
        return curGood.length - nextGood.length;

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

  handleSort = (sortType: SortType) => {
    this.setState({ sortType });
  };

  reverseGoods = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  resetGoods = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const {
      isReversed,
      sortType,
    } = this.state;
    const checkReset = sortType !== SortType.NONE || isReversed;
    const reorderedGoods = getReorderedGoods(
      goodsFromServer,
      { isReversed, sortType },
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={() => {
              this.handleSort(SortType.ALPHABET);
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
              this.handleSort(SortType.LENGTH);
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
            onClick={this.reverseGoods}
          >
            Reverse
          </button>

          {checkReset && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.resetGoods}
            >
              Reset
            </button>
          )}
        </div>

        <GoodList goods={reorderedGoods} />
      </div>
    );
  }
}
