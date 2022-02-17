import React from 'react';
import GoodsList from './components/GoodsList';
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
  started: boolean,
  isReversed: boolean,
  sortedAlphabet: boolean,
  sortedByLength: boolean,
  goodsLength: number
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    started: false,
    isReversed: false,
    sortedAlphabet: false,
    sortedByLength: false,
    goodsLength: 1,
  };

  start = () => {
    this.setState({ started: true });
  };

  finest = () => {
    this.setState({ started: false });
  };

  reverse = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  sortAlphabet = () => {
    this.setState(state => ({
      sortedAlphabet: !state.sortedAlphabet,
      sortedByLength: false,
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      sortedByLength: !state.sortedByLength,
      sortedAlphabet: false,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortedAlphabet: false,
      sortedByLength: false,
      goodsLength: 1,
    });
  };

  render() {
    const {
      goods,
      started,
      isReversed,
      sortedAlphabet,
      sortedByLength,
      goodsLength,
    } = this.state;

    return (
      <div className="App">
        <h1>Goods list</h1>
        {!started && (
          <button
            className="startButton"
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        )}
        {started && (
          <>
            <GoodsList
              goods={goods}
              isReversed={isReversed}
              sortedAlphabet={sortedAlphabet}
              sortedByLength={sortedByLength}
              goodsLength={goodsLength}
            />
            <button
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>
            <button
              type="button"
              onClick={this.sortAlphabet}
            >
              Sort by alphabet
            </button>
            <button
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
            <button
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>
            <button
              className="finButton"
              type="button"
              onClick={this.finest}
            >
              FIN
            </button>
          </>
        )}
      </div>
    );
  }
}

export default App;
