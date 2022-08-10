/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from 'react';
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
  ALPHABET,
  LENGTH,
}

const getReorderedGoods = (
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) => {
  const visibleGoods = [...goods];

  if (sortType !== SortType.NONE) {
    visibleGoods.sort((f1, f2) => {
      switch (sortType) {
        case SortType.ALPHABET:
          return f1.localeCompare(f2);

        case SortType.LENGTH:
          return f1.length - f2.length;

        default:
          return 0;
      }
    });
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
};

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  startWork = () => this.setState({
    isStarted: true,
  });

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  sortByalphAbetically = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({ isReversed: false, sortType: SortType.NONE });
  };

  getElements = (goods: string[]) => {
    return goods.map(good => (
      <li className="Goods__item" key={good}>{good}</li>
    ));
  };

  render() {
    const { isStarted, sortType, isReversed } = this.state;

    const goods = getReorderedGoods(goodsFromServer, sortType, isReversed);

    return (
      <div className="App">
        {!isStarted
          ? (
            <button
              type="button"
              className="button is-link is-outlined is-large start"
              onClick={this.startWork}
            >
              Start
            </button>
          )
          : (
            <div className="box has-background-link-light contant">
              <div className="buttons">
                <button
                  type="button"
                  className="button is-link btn"
                  onClick={this.sortByalphAbetically}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  className="button is-link btn"
                  onClick={() => this.sortByLength()}
                >
                  Sort by length
                </button>

                <button
                  type="button"
                  onClick={this.reverse}
                  className="button is-warning btn"
                >
                  Reverse
                </button>

                <button
                  type="button"
                  onClick={this.reset}
                  className="button is-danger btn"
                >
                  Reset
                </button>
              </div>

              <ul className="Goods">
                {this.getElements(goods)}
              </ul>
            </div>
          )}
      </div>
    );
  }
}
