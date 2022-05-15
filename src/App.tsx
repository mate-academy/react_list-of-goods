import React from 'react';
import './App.css';
import { ProductsList } from './productsList';

const goodsFromServer: string[] = [
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

type State = {
  products: string[],
  isVisible: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    products: goodsFromServer,
    isVisible: false,
  };

  start = () => {
    this.setState({ isVisible: true });
  };

  reverse = () => {
    this.setState((state) => ({
      products: [...state.products].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState((state) => ({
      products: [...state.products].sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortByLength = () => {
    this.setState((state) => ({
      products: [...state.products].sort((a, b) => a.length - b.length),
    }));
  };

  reset = () => {
    this.setState({
      products: goodsFromServer,
    });
  };

  render() {
    const { isVisible, products } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {!isVisible && (
          <button
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        )}
        {isVisible && (
          <>
            <ProductsList products={products} />
            <button
              type="button"
              onClick={this.reverse}
            >
              Revers
            </button>

            <button
              type="button"
              onClick={this.sortAlphabetically}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>

            <button
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>
          </>
        )}
      </div>
    );
  }
}

export default App;
