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
  sortBy: string,
  isClickedAlph: boolean,
  isClickedLength: boolean,
  isClickedReverse: boolean,
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
    sortBy: 'id',
    isClickedAlph: true,
    isClickedLength: true,
    isClickedReverse: true,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
      isClickedReverse: !state.isClickedReverse,
    }));
  };

  sortByAlphabet = () => {
    this.setState({
      sortBy: 'alphabet',
      isClickedAlph: false,
      isClickedLength: true,
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
      isClickedLength: false,
      isClickedAlph: true,
    });
  };

  reset = () => {
    this.setState({
      sortBy: 'id',
      isClickedAlph: true,
      isClickedLength: true,
      isClickedReverse: true,
    });
  };

  render() {
    const {
      isReversed, sortBy,
      isClickedAlph,
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

          { (!isClickedReverse || sortBy !== 'id')
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
