// import React from 'react';
import classNames from 'classnames';
import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { ListOfGoods } from './components/ListOfGoods/ListOfgoods';

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
      visibleGoods.sort((prev, cur) => prev.localeCompare(cur));
      break;

    case SortType.LENGTH:
      visibleGoods.sort((prev, cur) => prev.length - cur.length);
      break;

    case SortType.NONE:
      break;

    default:
      throw new Error('Error! Check sortBy param');
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return isReversed
    ? visibleGoods.reverse()
    : visibleGoods;
}

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  state = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  sortByALPH = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const {
      sortType,
      isReversed,
    } = this.state;

    const isOrderChanged = this.state.isReversed === true
      || this.state.sortType !== SortType.NONE;

    const reorderedGoods = getReorderedGoods(
      goodsFromServer,
      this.state,
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button',
              'is-info',
              { 'is-light': sortType !== SortType.ALPABET },
            )}
            onClick={this.sortByALPH}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-warning',
              { 'is-light': isReversed !== true },
            )}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {isOrderChanged
            && (
              <button
                type="button"
                className={classNames(
                  'button',
                  'is-danger',
                )}
                onClick={this.reset}
              >
                Reset
              </button>
            )}
        </div>
        <ListOfGoods goods={reorderedGoods} />
      </div>
    );
  }
}
