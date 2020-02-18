import React from 'react';
import './App.css';

import { GoodsList } from './components/GoodsList/GoodsList';

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
    goods: [],
    isLoaded: false,
    value: '1',
  }

  componentDidMount() {
    this.setState({ goods: goodsFromServer });
  }

  showGoods = () => {
    this.setState({ isLoaded: true });
  }

  reverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortByAlphabet = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  }

  reset = () => {
    this.setState({
      goods: goodsFromServer,
      value: '1',
    });
  }

  changeHandler = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    const { goods, isLoaded, value } = this.state;
    const filteredGoods = goods.filter(good => good.length >= value);

    return (
      <div className="App">
        <h1>Goods</h1>
        {isLoaded
          ? (
            <>
              <button
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
              <button
                type="button"
                onClick={this.sortByAlphabet}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
              <select value={value} onChange={this.changeHandler}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </select>
              <GoodsList goods={filteredGoods} />
            </>
          )
          : (
            <button
              type="button"
              onClick={this.showGoods}
            >
              Show Goods
            </button>
          )}
      </div>
    );
  }
}

export default App;
