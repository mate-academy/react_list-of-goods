import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import { GoodList } from './components/goods';

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

type State = {
  isReversed: boolean,
  sortType: boolean,
  sortBy: string,
  isShowm: boolean,
  isClickedAlph: boolean,
  isClickedLength: boolean,
  isClickedReverse: boolean,
  // toggleClass: boolean,
};

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

  // eslint-disable-next-line
  console.log(sortType, isReversed);

  return visibleGoods;
}

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    // eslint-disable-next-line react/no-unused-state
    sortType: true,
    sortBy: 'id',
    isShowm: false,
    isClickedAlph: true,
    isClickedLength: true,
    isClickedReverse: true,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
      isShowm: true,
      isClickedReverse: false,

    }));
  };

  sortByAlphabet = () => {
    this.setState({
      sortBy: 'alphabet',
      isShowm: true,
      isClickedAlph: false,
      isClickedLength: true,
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
      isShowm: true,
      isClickedLength: false,
      isClickedAlph: true,
    });
  };

  reset = () => {
    this.setState({
      sortBy: 'id',
      isReversed: false,
      isShowm: false,
      isClickedAlph: true,
      isClickedLength: true,
      isClickedReverse: true,

    });
  };

  render() {
    const {
      isReversed, sortBy, isShowm, isClickedAlph,
      isClickedLength, isClickedReverse,
    } = this.state;
    const visibleGoods = [...goodsFromServer];

    visibleGoods.sort((a, b) => {
      switch (sortBy) {
        case 'length':
          return a.length - b.length;

        case 'alphabet':
          return a.localeCompare(b);

        default: return 0;
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
            className={classNames('button is-info',
              { 'is-light': isClickedAlph })}
            onClick={this.sortByAlphabet}

          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button is-success',
              { 'is-light': isClickedLength })}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button is-warning',
              {
                'is-light': isClickedReverse,
              })}
            onClick={this.reverse}
          >
            Reverse
          </button>

          { isShowm
          && (
            <button
              type="button"
              className="button btn-reset is-danger is-light"
              onClick={this.reset}
            >
              Reset
            </button>
          )}
        </div>

        <GoodList goods={visibleGoods} />
      </div>
    );
  }
}
