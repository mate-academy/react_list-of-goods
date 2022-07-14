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

// enum SortType {
//   NONE,
//   ALPABET,
//   LENGTH,
// }

// DON'T save goods to the state
type State = {
  isStarted: boolean,
  visibleGoods: string[]
};

export class App extends React.Component<{}, State> {
  state: State = {
    isStarted: false,
    visibleGoods: [...goodsFromServer],
  };

  sortByAlphabet = () => {
    this.setState((state) => ({
      visibleGoods: state.visibleGoods
        .sort((good1, good2) => good1.localeCompare(good2)),
    }));
  };

  sortBylength = () => {
    this.setState((state) => ({
      visibleGoods: state.visibleGoods
        .sort((good1, good2) => good1.length - good2.length),
    }));
  };

  sortByReverse = () => {
    this.setState((state) => ({
      visibleGoods: state.visibleGoods.reverse(),
    }));
  };

  reset = () => {
    this.setState({ visibleGoods: [...goodsFromServer] });
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
                  onClick={this.sortByAlphabet}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  className="button button__sort--leng"
                  onClick={this.sortBylength}
                >
                  Sort by length
                </button>

                <button
                  type="button"
                  className="button button__sort--leng"
                  onClick={this.sortByReverse}
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
