import React from 'react';
import GoodsList from './GoodsList';
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
    products: goodsFromServer,
    isNotVisible: true,
  }

  visibility = () => {
    this.setState({ isNotVisible: false });
  }

  reverse = () => {
    this.setState(state => ({
      products: [...state.products].reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(state => ({
      products: [...state.products]
        .sort((productOne, productTwo) => productOne.localeCompare(productTwo)),
    }));
  }

  sortLength = () => {
    this.setState(state => ({
      products: [...state.products]
        .sort((productOne, productTwo) => (
          productOne.length - productTwo.length
        )),
    }));
  }

  reset = () => {
    this.setState({
      products: goodsFromServer,
    });
  }

  render() {
    const { products, isNotVisible } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {goodsFromServer.length}

        <p>
          <button
            type="button"
            onClick={this.visibility}
            hidden={!isNotVisible}
          >
            Start
          </button>
        </p>

        <GoodsList
          products={products}
          isNotVisible={isNotVisible}
        />

        <p>
          <button
            type="button"
            onClick={this.reverse}
            hidden={isNotVisible}
          >
            Reverse
          </button>

          <button
            type="button"
            onClick={this.sortAlphabetically}
            hidden={isNotVisible}
          >
            Sort Alphabetically
          </button>

          <button
            type="button"
            onClick={this.sortLength}
            hidden={isNotVisible}
          >
            Sort by length
          </button>

          <button
            type="button"
            onClick={this.reset}
            hidden={isNotVisible}
          >
            Reset
          </button>
        </p>
      </div>
    );
  }
}

export default App;
