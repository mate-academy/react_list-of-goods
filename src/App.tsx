import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GoodsList from './Components/GoodsList/GoodsList';

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
  goodsIsVisible: boolean,
  goods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    goodsIsVisible: false,
    goods: [...goodsFromServer],
  };

  showGoods = () => {
    this.setState((state) => ({ goodsIsVisible: !state.goodsIsVisible }));
  };

  reverse = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortByAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  };

  reset = () => {
    this.setState({ goods: [...goodsFromServer] });
  };

  render() {
    const { goodsIsVisible, goods } = this.state;

    return (
      <div className="App position-absolute top-50 start-50 translate-middle">
        {!goodsIsVisible && (
          <button type="button" onClick={this.showGoods}>Start</button>
        )}
        {goodsIsVisible && (
          <>
            <h1 className="text-center">Goods</h1>
            <GoodsList goods={goods} />
            <button
              type="button"
              onClick={this.reverse}
              className="me-2 rounded"
            >
              Reverse
            </button>
            <button
              type="button"
              onClick={this.sortByAlphabetically}
              className="me-2 rounded"
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              onClick={this.sortByLength}
              className="me-2 rounded"
            >
              Sort by length
            </button>
            <button
              type="button"
              onClick={this.reset}
              className="me-2 rounded"
            >
              Reset
            </button>
          </>
        )}
      </div>
    );
  }
}

export default App;
