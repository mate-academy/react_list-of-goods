import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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
    isGoodsLoaded: false,
    goods: goodsFromServer,
    initialGoods: goodsFromServer,
    length: 1,
  }

  loadGoods = () => {
    this.setState({
      isGoodsLoaded: true,
    });
  }

  reverseGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  resetGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.initialGoods],
      length: 1,
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((a, b) => (a.length < b.length ? -1 : 1)),
    }));
  }

  selectedLength = ({ target }) => {
    const { value } = target;

    this.setState(prevState => ({
      length: value,
      goods: [...prevState.initialGoods]
        .filter(good => good.length >= value),
    }));
  }

  render() {
    const { isGoodsLoaded } = this.state;
    const { goods } = this.state;
    const { length } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {
          isGoodsLoaded
            ? (
              <>
                <button
                  type="button"
                  onClick={this.reverseGoods}
                >
      Reverse
                </button>
                <button
                  type="button"
                  onClick={this.sortGoods}
                >
      Sort
                </button>
                <button
                  type="button"
                  onClick={this.resetGoods}
                >
      Reset
                </button>
                <button
                  type="button"
                  onClick={this.sortByLength}
                >
      Sort by length
                </button>
                <form>
                  <label>
                    Pick the length of goods
                    <select
                      value={length}
                      onChange={this.selectedLength}
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
                </form>
                <GoodsList goods={goods} />
              </>
            )
            : (
              <button
                type="button"
                onClick={this.loadGoods}
              >
      Start
              </button>
            )
        }
      </div>
    );
  }
}

export default App;
