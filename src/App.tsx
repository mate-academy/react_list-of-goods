import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
};

type Props = {};

export class App extends React.Component<Props, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  handleSortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  handleSortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handleReset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const goods = getReorderedGoods(goodsFromServer, { sortType, isReversed });

    goods.sort((firstGood, secondGood) => {
      switch (sortType) {
        case SortType.ALPABET:
          return firstGood.localeCompare(secondGood);
        case SortType.LENGTH:
          return firstGood.length - secondGood.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      goods.reverse();
    }

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button is-info',
              { 'is-light': sortType !== SortType.ALPABET })}
            onClick={this.handleSortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button is-success',
              { 'is-light': sortType !== SortType.LENGTH })}
            onClick={this.handleSortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button is-warning',
              { 'is-light': isReversed === false })}
            onClick={this.handleReverse}
          >
            Reverse
          </button>
          {(isReversed === true || sortType !== SortType.NONE)
          && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.handleReset}
            >
              Reset
            </button>
          )}
        </div>
        <ul>
          {goods.map((good) => <li data-cy="Good" key={good}>{good}</li>)}
        </ul>
      </div>
    );
  }
}
