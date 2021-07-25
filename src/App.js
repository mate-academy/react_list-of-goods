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
    goods: [...goodsFromServer],
  }

  reverse = () => {
    this.setState(state => ({
      goods: state.goods.reverse(),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: state.goods.sort((good1, good2) => good1.length - good2.length),
    }));
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: state.goods.sort((good1, good2) => good1.localeCompare(good2)),
    }));
  };

  origin = () => {
    this.setState(state => ({
      goods: [...goodsFromServer],
    }));
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <ul>
          {goods.map(good => (
            <li key="good">
              {good}
            </li>
          ))}
        </ul>
        <button type="button" onClick={this.reverse}>
          Reverse
        </button>
        <button type="button" onClick={this.sortByLength}>
          Sort bu length
        </button>
        <button type="button" onClick={this.sortAlphabetically}>
          Sort alphabetically
        </button>
        <button type="button" onClick={this.origin}>
          Origin
        </button>
      </div>
    );
  }
}

export default App;
