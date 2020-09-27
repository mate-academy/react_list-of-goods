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

export class App extends React.Component {
  state = {
    products: [...goodsFromServer],
    showGoodsList: false,
    minimumPermissibleLength: '1',
  };

  start = () => {
    this.setState({ showGoodsList: true });
  };

  reverse = () => {
    this.setState(state => ({
      products: [...state.products.reverse()],
    }));
  }

  sortAlphabetically = () => {
    this.setState(state => ({
      products: [...state.products.sort()],
    }));
  }

  reset = () => {
    this.setState(() => ({
      products: [...goodsFromServer],
      minimumPermissibleLength: '1',
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      products: [...state.products.sort((a, b) => b.length - a.length)],
    }));
  }

  createOptionsOfSelect = () => {
    const arr = [];

    for (let i = 1; i <= 10; i += 1) {
      arr.push(<option key={i} value={i}>{i}</option>);
    }

    return arr;
  }

  filterGoodsLength = () => {
    this.setState(state => ({
      products:
      goodsFromServer.filter(product => product.length >= state
        .minimumPermissibleLength),
    }));
  }

  findNeededLength = (event) => {
    this.setState({ minimumPermissibleLength: event.target.value });
    this.filterGoodsLength();
  }

  render() {
    const { products, showGoodsList, minimumPermissibleLength } = this.state;

    return (
      <div className="App">
        <h1>
          Goods
        </h1>
        {showGoodsList ? (
          <div>
            <p>
              The length of goods
              {' '}
              {'>='}
              {' '}
              {minimumPermissibleLength}
            </p>
            <form>
              <select onChange={this.findNeededLength}>
                {this.createOptionsOfSelect()}
              </select>
              <input
                type="reset"
                value="Click here to Reset!"
                onClick={this.reset}
              />
            </form>

            <GoodsList goods={products} />
            <button type="button" onClick={this.reverse}>
              Click here to Reserse!
            </button>
            <button type="button" onClick={this.sortAlphabetically}>
              Click here to Sort alphabetically!
            </button>

            <button type="button" onClick={this.sortByLength}>
              Click here to Sort by Length!
            </button>
          </div>
        ) : (
          <button type="button" onClick={this.start}>
            Click here to Start!
          </button>
        )}
      </div>
    );
  }
}

export default App;
