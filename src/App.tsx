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
  ALPHABETICALLY,
  LENGTH,
  NONE,
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

  if (sortType === SortType.ALPHABETICALLY) {
    visibleGoods.sort((a, b) => a.localeCompare(b));
  } else if (sortType === SortType.LENGTH) {
    visibleGoods.sort((a, b) => a.length - b.length);
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleSortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABETICALLY });
  };

  handleSortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handleGoodsReverse = () => {
    this.setState(state => {
      return {
        isReversed: !state.isReversed,
      };
    });
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={sortType === SortType.ALPHABETICALLY
              ? 'button is-info'
              : 'button is-light'}
            onClick={this.handleSortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={sortType === SortType.LENGTH
              ? 'button is-info'
              : 'button is-light'}
            onClick={this.handleSortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={isReversed === true
              ? 'button is-success'
              : 'button is-success is-light'}
            onClick={this.handleGoodsReverse}
          >
            Reverse
          </button>
          {(sortType !== SortType.NONE || isReversed === true)
             && (
               <button
                 type="button"
                 className="button is-danger is-light"
                 onClick={this.reset}
               >
                 Reset
               </button>
             )}

        </div>

        <ul>
          <ul>
            {getReorderedGoods(goodsFromServer, { sortType, isReversed })
              .map(good => (
                <li key={good} data-cy="Good">{good}</li>
              ))}
          </ul>
        </ul>
      </div>
    );
  }
}
