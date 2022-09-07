import React from 'react';
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
  NONE,
  ALPABET,
  LENGTH,
}

function getReorderedGoods(
  goods: string[],
  sortBy: SortType,
  isReversed: boolean,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((goodOne, goodTwo) => {
    switch (sortBy) {
      case SortType.ALPABET:
        return goodOne.localeCompare(goodTwo);

      case SortType.LENGTH:
        return goodOne.length - goodTwo.length;

      default:
        return 0;
    }
  });

  return isReversed
    ? visibleGoods.reverse()
    : visibleGoods;
}

 type State = {
   isStarted: boolean,
   isReversed: boolean,
   sortType: SortType,
 };

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  showElements = () => {
    this.setState(state => ({
      isStarted: !state.isStarted,
    }));
  };

  sortByABC = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.ALPABET,
    });
  };

  sortByLength = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.LENGTH,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;

    const visibleGoods = getReorderedGoods(
      goodsFromServer,
      sortType,
      isReversed,
    );

    return (
      <div className="App">
        <h1 className="App__title">
          List of goods
        </h1>
        {!isStarted ? (
          <button
            type="button"
            className="button"
            onClick={this.showElements}
          >
            Start
          </button>
        ) : (
          <>
            <div className="button__list">
              <button
                type="button"
                className="button"
                onClick={this.sortByABC}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                className="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                type="button"
                className="button"
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                type="button"
                className="button"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>

            <ul className="App__list">

              {visibleGoods.map(good => (
                <li className="App__item" key={good}>
                  {good}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}
