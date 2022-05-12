import React from 'react';
import './App.scss';
import { GoodsList } from './Component/GoodsList/GoodsList';

const goodsFromServer: string[] = [
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
  goods: string[],
  appLoad: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    appLoad: false,
  };

  start = () => {
    this.setState({ appLoad: true });
  };

  reset = () => {
    this.setState({ goods: [...goodsFromServer] });
  };

  sortByLength = () => {
    this.setState((state) => {
      return {
        goods: [...state.goods].sort((g1, g2) => (g1.length - g2.length)),
      };
    });
  };

  sortByAlphabet = () => {
    this.setState((state) => {
      return {
        goods: [...state.goods].sort((g1, g2) => (g1.localeCompare(g2))),
      };
    });
  };

  reverse = () => {
    this.setState((state => ({ goods: [...state.goods].reverse() })));
  };

  render() {
    const {
      goods,
      appLoad,
    } = this.state;

    return appLoad ? (
      <div className="App">
        <h1>Goods</h1>
        <GoodsList goods={goods} />

        <button
          className="sort__button"
          type="button"
          onClick={this.sortByLength}
        >
          Sort by Length
        </button>

        <button className="sort__button" type="button" onClick={this.reverse}>
          Reverse
        </button>

        <button
          className="sort__button"
          type="button"
          onClick={this.sortByAlphabet}
        >
          Sort alphabetically
        </button>

        <button className="sort__button" type="button" onClick={this.reset}>
          Reset
        </button>
      </div>

    ) : (
      <div className="wrapper">
        <button className="start" type="button" onClick={this.start}>
          Start
        </button>
      </div>
    );
  }
}

export default App;
