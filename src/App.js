import { element } from 'prop-types';
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
    sortByAlphabet: false,
    sortByLength: false,
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

  sortByAlphabet = () => {
    this.setState(state => ({
      sortByAlphabet: !state.sortByAlphabet,
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      sortByLength: !state.sortByLength,
    }));
  }

  reset = () => {
    const element = document.getElementById('selectLength');
    element.value = 1;

    this.setState({
      reverse: false,
      sortByAlphabet: false,
      sortByLength: false,
      filterByLength: 1,
    });
  }

  filterByLength = (event) => {
    this.setState({ filterByLength: +event.target.value })
  }

  render() {
    const optionValues = Array(10).fill(0).map((element, index) => (
      element = index + 1
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

              <button type="button" onClick={this.sortByAlphabet}>
                Sort alphabetically
              </button>

              <button type="button" onClick={this.sortByLength}>
                Sort by length
              </button>

              <button type="button" onClick={this.reset}>
                Reset
              </button>
            </div>

              <label htmlFor="selectLength">
                {'Filter good by length '}
              </label>

              <select id="selectLength" onChange={this.filterByLength}>
                {optionValues.map(element => (
                  <option key={element}>
                    {element}
                  </option>
                ))}
              </select>
            
            <GoodsList
              goodsList={goodsFromServer}
              sorting={{...this.state}}
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
