import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
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

  console.log(sortType, isReversed);

  return visibleGoods;
}

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    // eslint-disable-next-line react/no-unused-state
    sortType: true,
    sortBy: 'id',
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  // reset = () => {
  //   this.setState({ sortBy: 'id', isReversed: false });
  // };

  sortByAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({ sortBy: 'id', isReversed: false });
  };

  render() {
    const { isReversed, sortBy } = this.state;
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
            className="button is-info is-light"
            onClick={this.sortByAlphabet}

          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className="button is-success is-light"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className="button is-warning is-light"
            onClick={this.reverse}
          >
            Reverse
          </button>

          <button
            type="button"
            className="button btn-reset is-danger is-light"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>

        <GoodList goods={visibleGoods} />
      </div>
    );
  }
}
