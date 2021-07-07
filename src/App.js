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

class App extends React.PureComponent {
  state = {
    goods: goodsFromServer,
    started: false,
  }

  start = () => {
    this.setState({
      started: true,
    });
  }

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  }

  reset = () => {
    this.setState({
      goods: goodsFromServer,
    });
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  }

  render() {
    const { goods, started } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {goods.length}
        <br />
        <button
          type="button"
          className={started ? 'hidden' : ''}
          onClick={this.start}
        >
          Start
        </button>
        {started
          && (
            <>
              <ul>
                {goods.map(good => <li key={good}>{good}</li>)}
              </ul>
              <button onClick={this.reverse} type="button">
                Reverse
              </button>
              <button onClick={this.sortAlphabetically} type="button">
                Sort alphabetically
              </button>
              <button onClick={this.reset} type="button">
                Reset
              </button>
              <button onClick={this.sortByLength} type="button">
                Sort by length
              </button>
            </>
          )
        }
      </div>
    );
  }
}

export default App;
