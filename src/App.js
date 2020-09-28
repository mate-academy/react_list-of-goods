import React from 'react';
import './App.css';

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

const lengthOptions = new Array(10).fill(0).map((v, i) => i + 1);

class App extends React.Component {
  state = {
    listVisibility: true,
    goods: [...goodsFromServer],
    selectedValue: 1,
  };

  handleStart = () => {
    this.setState({
      listVisibility: false,
    });
  };

  handleReverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  handleSortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  handleReset = () => {
    this.setState({
      goods: goodsFromServer,
      selectedValue: 1,
    });
  };

  handleSortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  };

  handleChange = (e) => {
    this.setState({
      goods: [...goodsFromServer].filter(val => val.length >= e.target.value),
      selectedValue: e.target.value,
    });
  };

  render() {
    const { goods, listVisibility, selectedValue } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <p>{goodsFromServer.length}</p>
        <button
          type="button"
          onClick={this.handleStart}
          hidden={!listVisibility}
        >
          Start
        </button>
        <div hidden={listVisibility}>
          <ul>
            {goods.map(good => (
              <li key={good}>{good}</li>
            ))}
          </ul>
          <button type="button" onClick={this.handleReverse}>
            Reverse
          </button>
          <button type="button" onClick={this.handleSortAlphabetically}>
            Sort alphabetically
          </button>
          <button type="button" onClick={this.handleReset}>
            Reset
          </button>
          <button type="button" onClick={this.handleSortByLength}>
            Sort by length
          </button>
          <select value={selectedValue} onChange={this.handleChange}>
            {lengthOptions.map(item => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default App;
