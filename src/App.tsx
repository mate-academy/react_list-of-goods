import React from 'react';
import classNames from 'classnames';

import 'bulma/css/bulma.css';
import './App.scss';

import { ListOfGoods } from './components/ListOfGoods';

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

  // Sort and reverse goods if needed
  switch (sortType) {
    case SortType.ALPABET:
      visibleGoods.sort((goodA, goodB) => goodA.localeCompare(goodB));
      break;
    case SortType.LENGTH:
      visibleGoods.sort((goodA, goodB) => goodA.length - goodB.length);
      break;
    default:
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

// DON'T save goods to the state
// type State = {
//   isReversed: boolean,
//   sortType: SortType,
// };

export class App extends React.Component<{}, ReorderOptions> {
  state: Readonly<ReorderOptions> = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  handleSortByAlpabet = () => this.setState({ sortType: SortType.ALPABET });

  handleSortByLength = () => this.setState({ sortType: SortType.LENGTH });

  handleReverse = () => (this.setState(state => ({
    isReversed: !state.isReversed,
  })));

  handleReset = () => (this.setState({
    sortType: SortType.NONE,
    isReversed: false,
  }));

  render() {
    const { sortType, isReversed } = this.state;
    const onReorder = (sortType !== SortType.NONE || isReversed);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              { 'is-light': sortType !== SortType.ALPABET },
            )}
            onClick={this.handleSortByAlpabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={this.handleSortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          {onReorder && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.handleReset}
            >
              Reset
            </button>
          )}
        </div>

        <ListOfGoods goods={getReorderedGoods(goodsFromServer, this.state)} />
      </div>
    );
  }
}
