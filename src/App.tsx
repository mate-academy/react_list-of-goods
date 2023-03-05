import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import { SortType } from './enums/sortType';
import Goods from './components/goods';
import { getReorderedGoods } from './getReorderedGoods';

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

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  alphSort = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  lengthSort = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  reversed = () => {
    this.setState(prevState => ({
      isReversed: !prevState.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;

    const reorderedGoods = getReorderedGoods(
      goodsFromServer,
      { sortType, isReversed },
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            onClick={this.alphSort}
            type="button"
            className={classNames(
              'button', 'is-info',
              {
                'is-light': sortType !== 'alphabet',
              },
            )}
          >
            Sort alphabetically
          </button>

          <button
            onClick={this.lengthSort}
            type="button"
            className={classNames(
              'button', 'is-success',
              {
                'is-light': sortType !== 'length',
              },
            )}
          >
            Sort by length
          </button>

          <button
            onClick={this.reversed}
            type="button"
            className={classNames(
              'button', 'is-warning',
              {
                'is-light': isReversed !== true,
              },
            )}
          >
            Reverse
          </button>

          { (sortType !== SortType.NONE || isReversed)
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

        <Goods goods={reorderedGoods} />

      </div>
    );
  }
}
