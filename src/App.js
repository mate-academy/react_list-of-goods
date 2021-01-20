import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';

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

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class App extends React.Component {
  state = {
    isVisible: false,
    isReversed: false,
    sortedByName: false,
    sortedByLength: false,
    minLength: 1,
  }

  start = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortByName = () => {
    this.setState({
      sortedByLength: false,
      sortedByName: true,
    });
  }

  sortByLength = () => {
    this.setState({
      sortedByLength: true,
      sortedByName: false,
    });
  }

  reset = () => {
    this.setState({
      isReversed: false,
      sortedByName: false,
      sortedByLength: false,
      minLength: 1,
    });
  }

  select = ({ target }) => {
    this.setState({
      minLength: +target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          onClick={this.start}
        >
          {this.state.isVisible ? 'Hide' : 'Start'}
        </button>

        <br />

        <button
          type="button"
          onClick={this.reverse}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.sortByName}
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
          onClick={this.reset}
        >
          Reset
        </button>

        <br />

        <select value={this.state.minLength} onChange={this.select}>
          {options.map(x => <option key={x}>{x}</option>)}
        </select>

        {this.state.isVisible
          && <GoodsList goodsList={goodsFromServer} {...this.state} />}
      </div>
    );
  }
}

export default App;
