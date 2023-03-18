import { Component } from 'react';
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
  ALPHABET,
  LENGTH,
}

interface State {
  goods: string[],
  isReversed: boolean,
  sortType: SortType,
}

export class App extends Component <{}, State> {
  state: State = {
    goods: goodsFromServer,
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reset = () => {
    this.setState({ sortType: SortType.NONE });
  };

  render() {
    const { goods, isReversed, sortType } = this.state;

    const visibleGoods = [...goods];

    visibleGoods.sort((g1, g2) => {
      switch (sortType) {
        case SortType.ALPHABET:
          return g1.localeCompare(g2);

        case SortType.LENGTH:
          return g1.length - g2.length;

        case SortType.NONE:
          return 0;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    const isGoodsSorted
      = JSON.stringify(visibleGoods) === JSON.stringify(goods);
    const isResetButtonVisible = !isGoodsSorted;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button is-info', {
              'is-light': !this.state.goods || sortType === SortType.ALPHABET,
            })}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button is-success', {
              'is-light': !this.state.goods || sortType === SortType.LENGTH,
            })}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button is-warning', {
              'is-light': !isReversed,
            })}
            onClick={this.reverse}
          >
            {isReversed ? 'Show in direct order' : 'Reverse'}
          </button>

          {isResetButtonVisible && (
            <button
              type="button"
              className="button is-danger"
              onClick={this.reset}
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
