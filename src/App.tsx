import React from 'react';

import './App.css';

import GoodsList from './components/GoodsList';

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
  isStartButton: boolean,
  isReversed: boolean,
  sortBy: string | null,
};

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    isStartButton: true,
    isReversed: false,
    sortBy: '',
  };

  startButton = () => {
    this.setState((state) => ({ isStartButton: !state.isStartButton }));
  };

  reverseButton = () => {
    this.setState((state) => ({ isReversed: !state.isReversed }));
  };

  sortByName = () => {
    this.setState({ sortBy: 'name' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({
      goods: goodsFromServer,
      isReversed: false,
      sortBy: null,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.isStartButton
          ? (
            <button
              type="button"
              className="App__start-btn"
              onClick={this.startButton}
            >
              Show list
            </button>
          )
          : (
            <>
              <button
                type="button"
                className="App__reverse-btn"
                onClick={this.reverseButton}
              >
                Reverse
              </button>
              <button
                type="button"
                className="App__reverse-btn"
                onClick={this.sortByName}
              >
                Sort by name
              </button>
              <button
                type="button"
                className="App__reverse-btn"
                onClick={this.sortByLength}
              >
                Sort by Length
              </button>
              <button
                type="button"
                className="App__reverse-btn"
                onClick={this.reset}
              >
                Reset
              </button>
              <GoodsList
                goods={this.state.goods}
                isReversed={this.state.isReversed}
                sortBy={this.state.sortBy}
              />
            </>
          )}
      </div>
    );
  }
}

export default App;
