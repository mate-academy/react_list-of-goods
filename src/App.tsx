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

  sort = (arr: string[]) => {
    arr.sort((item1:string, item2:string) => {
      switch (this.state.sortType) {
        case 'ALPHABET':
          return item1.localeCompare(item2);
        case 'LENGTH':
          return item1.length - item2.length;
        default:
          return 0;
      }
    });
  };

  render() {
    const visibleGoods = [...goodsFromServer];

    this.sort(visibleGoods);

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
