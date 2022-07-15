/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.scss';

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

// DON'T save goods to the state
type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  Reverse = () => {
    this.setState((state) => {
      if (state.isReversed) {
        return { isReversed: false };
      }

      return { isReversed: true };
    });
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;
    // Use this function in the render method

    function getReorderedGoods(goods: string[]) {
      const visibleGoods = [...goods];

      switch (sortType) {
        case SortType.ALPABET:
          visibleGoods.sort((goodA, goodB) => goodA.localeCompare(goodB));
          break;

        case SortType.LENGTH:
          visibleGoods.sort((goodA, goodB) => goodA.length - goodB.length);
          break;

        default:
          break;
      }

      return isReversed ? visibleGoods.reverse() : visibleGoods;
    }

    return (
      <article className="App panel is-warning">
        {!isStarted && (
          <button
            className="button is-large is-info is-fullwidth"
            type="button"
            onClick={() => (this.setState({ isStarted: true }))}
          >
            Start
          </button>
        )}

        {isStarted && (
          <>
            <p className="App__title panel-heading">
              Shoping-list
            </p>

            <div className="panel-tabs">
              <button
                className="button is-white"
                type="button"
                onClick={() => (this
                  .setState({ sortType: SortType.ALPABET }))}
              >
                Sort alphabetically
              </button>

              <button
                className="button is-white"
                type="button"
                onClick={() => (this.setState({ sortType: SortType.LENGTH }))}
              >
                Sort by length
              </button>

              <button
                className="button is-white"
                type="button"
                onClick={() => this.Reverse()}
              >
                Reverse
              </button>

              <button
                className="button is-danger is-light"
                type="button"
                onClick={() => (this.setState({
                  isReversed: false,
                  sortType: SortType.NONE,
                }))}
              >
                Reset
              </button>
            </div>

            <div className="Goods">
              {getReorderedGoods(goodsFromServer).map(good => (
                <a
                  href="#test"
                  key={good}
                  className="Goods__item panel-block"
                >
                  {good}
                </a>
              ))}
            </div>
          </>
        )}
      </article>
    );
  }
}
