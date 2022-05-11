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
  isReversed: boolean,
  sortBy: string,
  appLoad: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isReversed: false,
    sortBy: '',
    appLoad: false,
  };

  start = () => {
    this.setState({ appLoad: true });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  sortByLength = () => {
    this.reset();
    this.setState({ sortBy: 'length' });
  };

  sortByAlphabet = () => {
    this.reset();
    this.setState({ sortBy: 'alphabet' });
  };

  reverse = () => {
    this.setState((state => (
      {
        isReversed: !state.isReversed,
      }
    )));
  };

  render() {
    const {
      goods,
      sortBy,
      isReversed,
      appLoad,
    } = this.state;

    const visibleGoods = [...goods];

    visibleGoods.sort((g1, g2) => {
      switch (sortBy) {
        case 'length':
          return g1.length - g2.length;

        case 'alphabet':
          return g1.localeCompare(g2);

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return appLoad ? (
      <div className="App">
        <h1>Goods</h1>
        <GoodsList goods={visibleGoods} />

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
