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

class App extends React.Component {
  state = {
    listIsVisible: false,
    goodsState: [...goodsFromServer],
  }

  handleList = () => {
    this.setState({ listIsVisible: true });
  };

  handleReverse = () => {
    this.setState(state => ({
      goodsState: [
        ...state.goodsState.reverse(),
      ],
    }));
  };

  handleSort = () => {
    this.setState(state => ({
      goodsState: [
        ...state.goodsState.sort((a, b) => a.localeCompare(b)),
      ],
    }));
  };

  handleReset = () => {
    this.setState({
      goodsState: [...goodsFromServer],
    });
  };

  handleSortByLength = () => {
    this.setState(state => ({
      goodsState: [
        ...state.goodsState.sort((a, b) => b.length - a.length),
      ],
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {!this.state.listIsVisible && (
          <button
            onClick={this.handleList}
            type="button"
          >
            Start
          </button>
        )}
        {this.state.listIsVisible && (
          <>
            <ul>
              {this.state.goodsState.map(good => (
                <li key={good}>
                  {good}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={this.handleReverse}
            >
              Reverse
            </button>
            <button
              type="button"
              onClick={this.handleSort}
            >
              Sort
            </button>
            <button
              type="button"
              onClick={this.handleReset}
            >
              Reset
            </button>
            <button
              type="button"
              onClick={this.handleSortByLength}
            >
              Sort by length
            </button>
          </>
        )}
      </div>
    );
  }
}

export default App;
