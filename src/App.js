import React from 'react';
// import { render } from 'react-dom';

import './App.css';
import GoodsList from './components/GoodsList';

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
    start: false,
    goods: goodsFromServer,
  };

  show = () => {
    this.setState({
      start: true,
    });
  };

  reverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  };

  reset = () => {
    this.setState(() => ({
      goods: goodsFromServer,
    }));
  };

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((a, b) => a.length - b.length),
    }));
  };

  render() {
    const { start, goods } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>

        {start && (
          <div>
            <button
              className="btn"
              onClick={this.reset}
              type="button"
            >
              Reset
            </button>

            <button
              className="btn"
              onClick={this.reverse}
              type="button"
            >
              Reverse
            </button>

            <button
              className="btn"
              onClick={this.sortAlphabetically}
              type="button"
            >
              Sort alphabetically
            </button>

            <button
              className="btn"
              onClick={this.sortByLength}
              type="button"
            >
              Sort by length
            </button>
          </div>
        )}

        {!start ? (
          <button
            onClick={this.show}
            type="button"
          >
            Start
          </button>
        ) : (
          <GoodsList goods={goods} />
        )}
      </div>
    );
  }
}

export default App;
