import React from 'react';
import { ProductsList } from './ProductsList';
import './App.css';

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
  visible: boolean,
  reversed: boolean,
  sortedBy: string,
};

class App extends React.Component<{}, State> {
  state = {
    products: goodsFromServer,
    visible: false,
    reversed: false,
    sortedBy: '',
  };

  prepareProducts = () => {
    const { products, reversed, sortedBy } = this.state;
    const copyProducts = [...products];

    copyProducts.sort((productA, productB) => {
      switch (sortedBy) {
        case 'alphabet':
          return productA.localeCompare(productB);
        case 'length':
          return productA.length - productB.length;
        default:
          return 0;
      }
    });

    if (reversed) {
      copyProducts.reverse();
    }

    return copyProducts;
  };

  start = () => {
    this.setState({ visible: true });
  };

  revers = () => {
    this.setState(state => ({ reversed: !state.reversed }));
  };

  sortAlphabetically = () => {
    this.setState({
      sortedBy: 'alphabet',
    });
  };

  sortByLength = () => {
    this.setState({
      sortedBy: 'length',
    });
  };

  reset = () => {
    this.setState({
      reversed: false,
      sortedBy: '',
    });
  };

  render() {
    const { visible } = this.state;
    const preparedProducts = this.prepareProducts();

    return (
      <div className="App">
        <h1>Goods</h1>
        {!visible && (
          <button
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        )}
        {visible && (
          <>
            <ProductsList products={preparedProducts} />
            <button
              type="button"
              onClick={this.revers}
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
