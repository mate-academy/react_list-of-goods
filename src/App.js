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
    goods: goodsFromServer,
    isActive: false,
  }

  startButton = () => {
    this.setState({
      isActive: true,
    });
  }

  reverseElement = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortAlph = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => (a < b ? -1 : 1)),
    }));
  }

  reset = () => {
    this.setState({ goods: goodsFromServer });
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => (a.length - b.length)),
    }));
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <div className="container">
          <button
            type="button"
            className="btn-start"
            onClick={this.startButton}
          >
            Start
          </button>

          {this.state.isActive
            ? (
              <div className="content">
                <h1>Goods:</h1>
                <ul>
                  {goods.map(good => (
                    <li key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
                <div className="buttons">
                  <button
                    type="button"
                    onClick={this.reverseElement}
                  >
                    Reverse
                  </button>
                  <button
                    type="button"
                    onClick={this.sortAlph}
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
              </div>
            )
            : null
          }
        </div>
      </div>
    );
  }
}

export default App;
