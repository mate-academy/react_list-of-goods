import React from 'react';
import { GoodsList } from './components/GoodsList';
import './App.css';

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
  visible: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    visible: false,
  };

  reverse = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((prevGood, currentGood) => {
        return prevGood.localeCompare(currentGood);
      }),
    }));
  };

  reset = () => {
    this.setState({ goods: goodsFromServer });
  };

  sortByLength = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((prevGood, currentGood) => {
        return prevGood.length - currentGood.length;
      }),
    }));
  };

  start = () => {
    this.setState({
      visible: true,
    });
  };

  render() {
    const { goods, visible } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">Products</h1>

        {visible && (
          <>
            <GoodsList goods={goods} />

            <button
              type="button"
              className="btn"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              type="button"
              className="btn"
              onClick={this.sortAlphabetically}
            >
              Sort Alphabetically
            </button>

            <button
              type="button"
              className="btn"
              onClick={this.reset}
            >
              Reset
            </button>

            <button
              type="button"
              className="btn"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
          </>
        )}

        {!visible && (
          <>
            <button
              type="button"
              className="btn"
              onClick={this.start}
            >
              Start
            </button>
          </>
        )}
      </div>
    );
  }
}

export default App;
