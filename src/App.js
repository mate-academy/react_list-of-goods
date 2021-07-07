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

const initState = {
  isVisible: false,
  goods: [...goodsFromServer],
  selectedOption: 1,
};

class App extends React.Component {
  state = initState;

  handleClick = () => {
    this.setState({ isVisible: true });
  }

  handleReverse = () => {
    this.setState(prev => ({
      goods: [...prev.goods].reverse(),
    }));
  }

  handleSort = () => {
    this.setState(prev => ({
      goods: [...prev.goods].sort(),
    }));
  }

  handleSortbyLength = () => {
    this.setState(prev => ({
      goods: [...prev.goods].sort((a, b) => (a.length - b.length)),
    }));
  }

  handleSelect = (e) => {
    this.setState({ selectedOption: e.target.value });
  }

  handleReset = () => {
    this.setState(initState);
  }

  render() {
    return (
      <div className="App">
        {!this.state.isVisible
        && <button type="button" onClick={this.handleClick}>Start</button>}
        <h1>Goods</h1>
        <button type="button" onClick={this.handleReverse}>Reverse</button>
        <button
          type="button"
          onClick={this.handleSort}
        >
          Sort Alphabetically
        </button>
        <button type="button" onClick={this.handleReset}>Reset</button>
        <button
          type="button"
          onClick={this.handleSortbyLength}
        >
          Sort by Length
        </button>
        <select
          value={this.state.selectedOption}
          onChange={e => this.handleSelect(e)}
        >
          {
            Array.from({ length: 10 }, (x, e) => e).map(option => (
              <option
                key={option}
                value={option}
              >
                {option}
              </option>
            ))}
        </select>

        <ul>
          {this.state.isVisible
          && this
            .state
            .goods
            .filter(good => good.length > this.state.selectedOption)
            .map(good => <li key={good}>{good}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
