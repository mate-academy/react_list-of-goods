import React from 'react';
import classNames from 'classnames';
import './App.css';

const goodsFromServer = [
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

// Use this function in the render method
function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
  minLength: number,
) {
  // Not to mutate the original array
  const visibleGoods = [...goods].filter(good => good.length > minLength);

  visibleGoods.sort((good1, good2) => {
    switch (sortType) {
      case SortType.NONE:
        return 0;

      case SortType.ALPABET:
        return good1.localeCompare(good2);

      case SortType.LENGTH:
        return good1.length - good2.length;

      default:
        throw new Error('invalid sorting type');
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
  minLength: number,
};

export class App extends React.Component<{}, State> {
  state: State = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
    minLength: 0,
  };

  startList = () => {
    this.setState({ isStarted: true });
  };

  sortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverseSorting = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  resetSorting = () => {
    this.setState({ isReversed: false, sortType: SortType.NONE, minLength: 0 });
  };

  changeMinLength = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ minLength: +event.target.value });
  };

  render() {
    const {
      isReversed,
      isStarted,
      sortType,
      minLength,
    } = this.state;

    const reorderedGoods = getReorderedGoods(
      goodsFromServer,
      sortType,
      isReversed,
      minLength,
    );

    const lengthValues = new Array(Math.max(...reorderedGoods
      .map(good => good.length))).fill('0').map((_, i) => i + 1);

    return (
      <div className="App">

        {isStarted
          ? (
            <>
              <div className="buttons">
                <button
                  type="button"
                  className={classNames('button',
                    { 'is-active': sortType === SortType.ALPABET })}
                  onClick={this.sortAlphabetically}
                >
                  Sort alphabetically
                </button>
                <button
                  type="button"
                  className={classNames('button',
                    { 'is-active': sortType === SortType.LENGTH })}
                  onClick={this.sortByLength}
                >
                  Sort by length
                </button>
                <button
                  type="button"
                  className={classNames('button', { 'is-active': isReversed })}
                  onClick={this.reverseSorting}
                >
                  Reverse
                </button>
                <button
                  type="button"
                  className="button"
                  onClick={this.resetSorting}
                >
                  Reset
                </button>
              </div>

              <div>
                <select
                  name="select"
                  className="select"
                  value={minLength}
                  onChange={value => this.changeMinLength(value)}
                >
                  <option value="0" hidden selected>select</option>
                  {lengthValues.map((length) => {
                    return (
                      <option value={length} key={length}>
                        {length}
                      </option>
                    );
                  })}
                </select>
              </div>

              <ul className="Goods">
                {reorderedGoods.map(good => {
                  return (
                    <li className="Goods__item">{good}</li>
                  );
                })}
              </ul>
            </>
          ) : (
            <div className="buttons">
              <button
                type="button"
                className="button"
                onClick={this.startList}
              >
                Start
              </button>
            </div>
          )}
      </div>
    );
  }
}
