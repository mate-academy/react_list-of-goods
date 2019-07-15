import React, { Component } from 'react';
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
const getReverse = ({ goods }) => {
  return [...goods].reverse();
};
const getSortAlphabetically = ({ goods, direction }) => {
  return [...goods].sort((a, b) => direction * (a.length - b.length));
};
const getSortByLength = ({ goods, direction }) => {
  return [...goods]
    .sort((a, b) => direction * (a.length - b.length));
};

class App extends Component {
  state = {
    goods: [...goodsFromServer],
    loadGoods: false,
    isLoading: false,
    wordLength: 1,
    direction: 1,
  };

  loadGoods = async() => {
    this.setState({
      isLoading: true,
    });
    this.setState(prevState => ({
      loadGoods: true,
      isLoading: false,
    }));
  };

  handleClickReverse = () => {
    this.setState(prevState => {
      return {
        goods: getReverse(prevState),
      };
    });
  };

  handleClickAlphabetically = () => {
    this.setState(prevState => {
      return {
        goods: getSortAlphabetically(prevState),
        direction: prevState.direction === 1 ? -1 : 1,
      };
    });
  };

  handleReset = () => {
    this.setState({ goods: [...goodsFromServer], wordLength: 1 });
  };

  handleSortByLength = () => {
    this.setState(prevState => {
      return {
        goods: getSortByLength(prevState),
        direction: prevState.direction === 1 ? -1 : 1,
      };
    });
  };

  handleChange = (event) => {
    this.setState({
      wordLength: event.target.value,
    });
  };

  render() {
    const { goods, wordLength } = this.state;
    const result = goods
      .filter(good => good.length >= wordLength)
      .map(good => {
        return <li key={good.toString()}>{good}</li>;
      });
    if (!this.state.loadGoods) {
      return (
        <button
          type="submit"
          className="btn btn-success mt-5"
          onClick={this.loadGoods}
          disabled={this.state.isLoading}
        >
          {this.state.isLoading ? 'Loading...' : 'Load' }
        </button>
      );
    }
    return (
      <div className="goods">
        <button
          type="submit"
          className="btn btn-primary mt-5 mb-5 mr-3"
          onClick={this.handleClickReverse}
        >
          Reverse
        </button>
        <button
          type="submit"
          className="btn btn-primary mt-5 mb-5 mr-3"
          onClick={this.handleClickAlphabetically}
        >
          Alphabetically
        </button>
        <button
          type="submit"
          className="btn btn-primary mt-5 mb-5 mr-3"
          onClick={this.handleReset}
        >
          Resset
        </button>
        <button
          type="submit"
          className="btn btn-primary mt-5 mb-5 mr-3"
          onClick={this.handleSortByLength}
        >
          SortByLength
        </button>
        <label className="btn btn-warning">length
          <select
            value={this.state.wordLength}
            onChange={this.handleChange}
            name="length"
            className="form-control form-control-sm"
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
        </label>
        <h1>Goods 1</h1>
        <ul className="goods__list">
          {result}
        </ul>
      </div>
    );
  }
}

export default App;
