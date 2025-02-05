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
  ALPHABET,
  LENGTH,
}

type ReorderOptions = {
  sortType: SortType;
  isReversed: boolean;
};

// Use this function in the render method to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  // Sort and reverse goods if needed
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort((a, b) => a.localeCompare(b));
  }

  if (sortType === SortType.LENGTH) {
    visibleGoods.sort((a, b) => a.length - b.length);
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

// DON'T save goods to the state
// type State = {
//   isReversed: boolean,
//   sortType: SortType,
// };

export class App extends React.Component {
  state: ReorderOptions = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  goodsList = [...goodsFromServer];

  reversList = () => {
    this.setState({ isReversed: !this.state.isReversed });
  };

  sortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLenght = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reset = () => {
    this.goodsList = [...goodsFromServer];
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;

    const usedList = sortType !== SortType.NONE || isReversed;
    const infoBtn = classNames({
      button: true,
      'is-info': true,
      'is-light': sortType !== SortType.ALPHABET,
    });

    const succesBtn = classNames({
      button: true,
      'is-success': true,
      'is-light': sortType !== SortType.LENGTH,
    });
    const warnBtn = classNames({
      button: true,
      'is-warning': true,
      'is-light': !isReversed,
    });

    const goods = getReorderedGoods(this.goodsList, { sortType, isReversed });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={infoBtn} //"button is-info is-light"
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={succesBtn}
            onClick={this.sortByLenght}
          >
            Sort by length
          </button>

          <button type="button" className={warnBtn} onClick={this.reversList}>
            Reverse
          </button>

          {usedList ? (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.reset}
            >
              Reset
            </button>
          ) : (
            <></>
          )}
        </div>

        <ul>
          <ul>
            {goods.map(good => (
              <li key={good} data-cy="Good">
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
