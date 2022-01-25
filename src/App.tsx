import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList/GoodsList';

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
  visibility: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    visibility: true,
  };

  start = () => {
    this.setState({
      visibility: false,
    });
  };

  sortAlphabet = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  };

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  reset = () => {
    this.setState({
      goods: goodsFromServer,
    });
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((g1, g2) => g1.length - g2.length),
    }));
  };

  render() {
    const {
      goods,
      visibility,
    } = this.state;

    return (
      <div className="App">
        <h1 className="title">Goods</h1>
        {visibility ? (
          <button
            type="button"
            onClick={this.start}
            className="button"
          >
            Start
          </button>
        ) : (
          <>
            <button
              type="button"
              onClick={this.reverse}
              className="button"
            >
              Reverse
            </button>

            <button
              type="button"
              className="button"
              onClick={this.sortAlphabet}
            >
              Sort Alphabetically
            </button>

            <button
              type="button"
              onClick={this.reset}
              className="button"
            >
              Reset
            </button>

            <button
              type="button"
              className="button"
              onClick={this.sortByLength}
            >
              Sort by Length
            </button>

            <GoodsList goodsList={goods} />
          </>
        )}
      </div>
    );
  }
}

export default App;
