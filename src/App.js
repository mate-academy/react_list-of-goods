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
    isVisible: false,
    goodsState: [...goodsFromServer],
  }

  visibleList = () => {
    this.setState({ isVisible: true });
  };

  listReverse = () => {
    this.setState(state => ({
      goodsState: [
        ...state.goodsState.reverse(),
      ],
    }));
  };

  listSort = () => {
    this.setState(state => ({
      goodsState: [
        ...state.goodsState.sort((a, b) => a.localeCompare(b)),
      ],
    }));
  };

  listReset = () => {
    this.setState({
      goodsState: [...goodsFromServer],
    });
  };

  listSortByLength = () => {
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
        {this.state.isVisible || (
          <button
            onClick={this.visibleList}
            type="button"
          >
            Start
          </button>
        )}
        {this.state.isVisible && (
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
              onClick={this.listReverse}
            >
              Reverse
            </button>
            <button
              type="button"
              onClick={this.listSort}
            >
              Sort
            </button>
            <button
              type="button"
              onClick={this.listReset}
            >
              Reset
            </button>
            <button
              type="button"
              onClick={this.listSortByLength}
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
