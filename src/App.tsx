import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classnames from 'classnames';
import { List } from './goodsList';

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

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverseGoods = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortGoodsByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  sortGoodsAlpha = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    function getReorderedGoods(
      goods: string[],
      { sortType, isReversed }: ReorderOptions,
    ) {
      const visibleGoods = [...goods];

      visibleGoods.sort((a, b) => {
        switch (sortType) {
          case SortType.LENGTH:
            return a.length - b.length;

          case SortType.ALPABET:
            return a.localeCompare(b);

          default:
            return 0;
        }
      });

      if (isReversed) {
        visibleGoods.reverse();
      }

      return visibleGoods;
    }

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classnames({
              button: true,
              'is-info': true,
              'is-light': this.state.sortType !== SortType.ALPABET,
            })}
            onClick={this.sortGoodsAlpha}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.sortGoodsByLength}
            className={classnames({
              button: true,
              'is-success': true,
              'is-light': this.state.sortType !== SortType.LENGTH,
            })}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classnames({
              button: true,
              'is-warning': true,
              'is-light': !this.state.isReversed,
            })}
            onClick={this.reverseGoods}
          >
            Reverse
          </button>

          {(this.state.sortType !== SortType.NONE || this.state.isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.reset}
            >
              Reset
            </button>
          )}
        </div>
        <List goods={getReorderedGoods(goodsFromServer, this.state)} />
      </div>
    );
  }
}
