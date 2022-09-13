import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

import { GoodsList } from './components/GoodsList';

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

// Use this function in the render to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  if (sortType === SortType.ALPABET) {
    visibleGoods.sort((g1, g2) => g1.localeCompare(g2));
  }

  if (sortType === SortType.LENGTH) {
    visibleGoods.sort((g1, g2) => g1.length - g2.length);
  }

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
  isChanged: boolean,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
    isChanged: false,
  };

  sortByAlphabet = () => {
    this.setState({
      sortType: SortType.ALPABET,
      isChanged: true,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
      isChanged: true,
    });
  };

  reverseList = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  resetOptions = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
      isChanged: false,
    });
  };

  render() {
    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              { 'is-light': this.state.sortType !== SortType.ALPABET },
            )}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-success',
              { 'is-light': this.state.sortType !== SortType.LENGTH },
            )}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              { 'is-light': this.state.isReversed !== true },
            )}
            onClick={this.reverseList}
          >
            Reverse
          </button>

          <button
            type="button"
            className="button is-danger is-light"
            onClick={this.resetOptions}
            style={(this.state.isChanged || this.state.isReversed)
              ? { visibility: 'visible' }
              : { visibility: 'hidden' }}
          >
            Reset
          </button>
        </div>

        <ul>
          <ul>
            <GoodsList visibleGoods={visibleGoods} />
          </ul>
        </ul>
      </div>
    );
  }
}
