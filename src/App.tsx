import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { GoodsList } from './GoodsList';

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
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  resetGoods = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  reverseGoods = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  render(): React.ReactNode {
    const { isReversed, sortType } = this.state;

    const visibleGoods = [...goodsFromServer];

    visibleGoods.sort((good1, good2) => {
      switch (sortType) {
        case SortType.ALPABET:
          return good1.localeCompare(good2);

        case SortType.LENGTH:
          return good1.length - good2.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    const {
      sortAlphabetically,
      sortByLength,
      reverseGoods,
      resetGoods,
    } = this;

    return (

      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={sortType !== 1
              ? 'button is-info is-light'
              : 'button is-info'}
            onClick={sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={sortType !== 2
              ? 'button is-success is-light'
              : 'button is-success'}
            onClick={sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={isReversed !== true
              ? 'button is-warning is-light'
              : 'button is-warning'}
            onClick={reverseGoods}
          >
            Reverse
          </button>

          {(sortType === 1 || sortType === 2 || isReversed === true) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={resetGoods}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <GoodsList goods={visibleGoods} />
        </ul>
      </div>
    );
  }
}
