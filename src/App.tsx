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

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: string,
};

export class App extends Component<{}, State> {
  state: State = {
    isStarted: false,
    isReversed: false,
    sortType: '',
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByABC = () => {
    this.setState({ sortType: 'ALPHABET' });
  };

  sortByLength = () => {
    this.setState({ sortType: 'LENGTH' });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: '',
    });
  };

  render() {
    const visibleGoods = [...goodsFromServer];

    visibleGoods.sort((g1, g2) => {
      switch (this.state.sortType) {
        case 'ALPHABET':
          return g1.localeCompare(g2);
        case 'LENGTH':
          return g1.length - g2.length;
        default:
          return 0;
      }
    });

    if (this.state.isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        {this.state.isStarted ? (
          <>
            <button
              type="button"
              onClick={this.sortByABC}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>

            <button
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>

            <ul className="Goods">
              {visibleGoods.map(good => (
                <li
                  className="Goods__item"
                  key={good}
                >
                  {good}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <button
            type="button"
            onClick={() => {
              this.setState({
                isStarted: true,
              });
            }}
          >
            Start
          </button>
        )}
      </div>
    );
  }
}
