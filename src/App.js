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
    goodsVisability: false,
    reverse: false,
    sortBy: '',
    filterByLength: 1,
  }

  switchGoodsVisability = () => {
    this.setState(state => ({
      goodsVisability: !state.goodsVisability,
    }));
  }

  reverse = () => {
    this.setState(state => ({
      reverse: !state.reverse,
    }));
  }

  sortBy = (event) => {
    this.setState({
      sortBy: event.target.name,
    });
  }

  reset = () => {
    this.setState({
      reverse: false,
      sortByAlphabet: false,
      sortByLength: false,
      filterByLength: 1,
    });
  }

  filterByLength = (event) => {
    this.setState({ filterByLength: +event.target.value });
  }

  render() {
    const optionValues = Array(10).fill(0).map((_, index) => (
      index + 1
    ));

    return (
      <div className="App">
        {this.state.goodsVisability ? (
          <>
            <h1>Goods</h1>

            <div className="buttons">
              <button type="button" onClick={this.reverse}>
                Reverse
              </button>

              <button
                type="button"
                name="alphabet"
                onClick={this.sortBy}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                name="length"
                onClick={this.sortBy}
              >
                Sort by length
              </button>

              <button type="button" onClick={this.reset}>
                Reset
              </button>
            </div>

            <label htmlFor="selectLength">
              {'Filter goods by length '}
            </label>

            <select
              id="selectLength"
              name="selectLength"
              value={this.state.filterByLength}
              onChange={this.filterByLength}
            >
              {optionValues.map(value => (
                <option key={value}>
                  {value}
                </option>
              ))}
            </select>

            <GoodsList
              goodsList={goodsFromServer}
              sorting={{ ...this.state }}
            />
          </>
        ) : (
          <button type="button" onClick={this.switchGoodsVisability}>
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
