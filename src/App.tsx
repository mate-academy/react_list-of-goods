import React from 'react';
import './App.css';
import { List } from './List';

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
  isVisible: boolean
  goods: string[]
};

class App extends React.Component<{}, State> {
  state: State = {
    isVisible: false,
    goods: [...goodsFromServer],
  };

  getIsVisible = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  };

  reverse = () => {
    this.setState(state => (
      { goods: [...state.goods].reverse() }
    ));
  };

  sortAlphabetically = () => {
    this.setState(state => (
      { goods: [...state.goods].sort((a, b) => a.localeCompare(b)) }
    ));
  };

  reset = () => {
    this.setState((
      { goods: [...goodsFromServer] }
    ));
  };

  sortByLength = () => {
    this.setState(state => (
      { goods: [...state.goods].sort((a, b) => a.length - b.length) }
    ));
  };

  render(): React.ReactNode {
    const { isVisible, goods } = this.state;

    return (
      <div className="App">
        {!isVisible
          && <button type="button" onClick={this.getIsVisible}>Start</button>}
        {isVisible
          && (
            <div>
              <List goods={goods} />
              <button
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sortAlphabetically}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
              <button
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
            </div>
          )}
      </div>
    );
  }
}

export default App;
