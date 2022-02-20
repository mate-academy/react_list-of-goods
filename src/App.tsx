import React from 'react';
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
  start: boolean
  goods: string[]
};

class App extends React.Component<{}, State> {
  state: State = {
    start: false,
    goods: [...goodsFromServer],
  };

  getStart = () => {
    this.setState(state => (
      { start: !state.start }
    ));
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

  Reset = () => {
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
    const { start, goods } = this.state;

    return (
      <div className="App">
        <button type="button" onClick={this.getStart} hidden={start}>Start</button>
        <div hidden={!start}>
          <ul>
            {goods.map(good => (
              <li>{good}</li>
            ))}
          </ul>
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
            onClick={this.Reset}
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
      </div>
    );
  }
}

export default App;
