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
  NONE = 'NONE',
  ALPABET = 'ALPABET',
  LENGTH = 'LENGTH',
  REVERSE = 'REVERSE',
}

type State = {
  isStarted: boolean,
  visibleGoods: string[],
};

export class App extends React.Component<{}, State> {
  state: State = {
    isStarted: false,
    visibleGoods: goodsFromServer,
  };

  sortGoods = (sortBy: SortType) => {
    this.setState(state => {
      const newGoods = [...state.visibleGoods];

      switch (sortBy) {
        case SortType.ALPABET:
          newGoods.sort((good1, good2) => good1.localeCompare(good2));
          break;

        case SortType.LENGTH:
          newGoods.sort((good1, good2) => good1.length - good2.length);
          break;

        case SortType.REVERSE:
          newGoods.reverse();
          break;

        default:
          break;
      }

      return {
        visibleGoods: newGoods,
      };
    });
  };

  // sortByAlphabet = () => {
  //   this.setState(state => {
  //     const newGoods = [...state.visibleGoods];

  //     newGoods.sort((good1, good2) => good1.localeCompare(good2));

  //     return {
  //       visibleGoods: newGoods,
  //     };
  //   });
  // };

  // sortBylength = () => {
  //   this.setState(state => {
  //     const newGoods = [...state.visibleGoods];

  //     newGoods.sort((good1, good2) => good1.length - good2.length);

  //     return {
  //       visibleGoods: newGoods,
  //     };
  //   });
  // };

  // sortByReverse = () => {
  //   this.setState(state => {
  //     const newGoods = [...state.visibleGoods];

  //     newGoods.reverse();

  //     return {
  //       visibleGoods: newGoods,
  //     };
  //   });
  // };

  reset = () => {
    this.setState({ visibleGoods: goodsFromServer });
  };

  startListView = () => {
    const { isStarted } = this.state;

    if (!isStarted) {
      this.setState(() => ({ isStarted: !isStarted }));
    }
  };

  render() {
    const { isStarted, visibleGoods } = this.state;

    return (
      <div className="App">
        {isStarted
          ? (
            <>
              <div className="buttons">
                <button
                  type="button"
                  className="button button__sort--alph"
                  onClick={() => this.sortGoods(SortType.ALPABET)}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  className="button button__sort--leng"
                  onClick={() => this.sortGoods(SortType.LENGTH)}
                >
                  Sort by length
                </button>

                <button
                  type="button"
                  className="button button__sort--leng"
                  onClick={() => this.sortGoods(SortType.REVERSE)}
                >
                  Reverse
                </button>

                <button
                  type="button"
                  className="button button__sort--leng"
                  onClick={this.reset}
                >
                  Reset
                </button>
              </div>

              <ul className="Goods">
                {visibleGoods.map(good => (
                  <li className="Goods__item">
                    {good}
                  </li>
                ))}
              </ul>
            </>
          )
          : (
            <button
              type="button"
              className="button__start"
              onClick={this.startListView}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}
