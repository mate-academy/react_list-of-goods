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
    display: '',
    initialLength: 1,
  }

  start = () => {
    this.setState(prevState => ({
      display: `block`,
    }));
  };

  reverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => (a.length - b.length)),
    }));
  }

  sortByAlphabet = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  }

  reset = () => {
    this.setState(prevState => ({
      goods: [...goodsFromServer],
    }));
  }

  select = (event) => {
    const length = event.target.value;

    this.setState(state => ({
      goods: [...goodsFromServer].filter(good => good.length >= length),
      initialLength: length,
    }));
  }

  render() {
    if (this.state.display === '') {
      return (
        <div className="App">
          <button
            className="buttons"
            onClick={this.start}
            type="button"
          >
            Start
          </button>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {this.state.goods.map(item => (
          <li
            key={item}
            className="goodItem"
          >
            {item}
          </li>
        ))}
        <button
          className="buttons"
          onClick={this.reset}
          type="button"
        >
          reset
        </button>
        <button
          className="buttons"
          onClick={this.reverse}
          type="button"
        >
          reverse
        </button>
        <button
          className="buttons"
          onClick={this.sortByLength}
          type="button"
        >
          sort by length
        </button>
        <button
          className="buttons"
          onClick={this.sortByAlphabet}
          type="button"
        >
          sort by alhabet
        </button>
        <select
          className="custom-select"
          id="inputGroupSelect"
          onChange={this.select}
          value={String(this.state.initialLength)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
    );
  }
}

export default App;
