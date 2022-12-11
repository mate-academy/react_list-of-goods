import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classnames from 'classnames';
import { GoodsList } from './GoodsList';
import { goodsFromServer } from './Server';

enum SortType {
  NONE,
  ALPHABET,
  LENGTH,
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

const getReorderedGoods = function (
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  visibleGoods.sort((a:string, b: string): number => {
    switch (sortType) {
      case SortType.ALPABET:
        return a.localeCompare(b);
      case SortType.LENGTH:
        return a.length - b.length;
      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
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

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  handleSortByAlpabet = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  handleSortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  NONE = () => {
    this.setState({ sortType: SortType.NONE });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const condition = (sortType !== SortType.NONE || isReversed);

    const preparedGoods
    = getReorderedGoods(goodsFromServer, { sortType, isReversed });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classnames(
              'button is-info', {
                'is-light': sortType !== SortType.ALPABET,
              },
            )}
            onClick={this.handleSortByAlpabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classnames(
              'button is-success', {
                'is-light': sortType !== SortType.LENGTH,
              },
            )}
            onClick={this.handleSortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classnames(
              'button is-warning', {
                'is-light': sortType !== SortType.NONE,
              },
            )}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {condition
        && (
          <button
            type="button"
            className={classnames(
              'button is-danger', {
                'is-light': !isReversed,
              },
            )}
            onClick={this.NONE}
          >
            Reset
          </button>
        )}
        </div>

        <ul>
          <GoodsList goods={preparedGoods} />
        </ul>
      </div>
    );
  }
}
