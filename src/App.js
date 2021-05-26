import React from 'react';
import './App.css';
import ProductList from './Components/ProductList/ProductList';

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
    showList: false,
    reverse: false,
    sort: '',
  }

  showProduct = () => {
    this.setState(state => ({
      showList: !state.showList,
    }));
  }

  reverseProduct = () => {
    this.setState(state => ({
      reverse: !state.reverse,
    }));
  }

  sortByAlphabetical = () => {
    this.setState({ sort: 'alph' });
  }

  sortByLength = () => {
    this.setState({
      sort: 'length',
    });
  }

  reset = () => {
    this.setState({
      reverse: false,
      sort: '',
    });
  }

  render() {
    const { products, showList, reverse, sort } = this.state;
    const visibleProduct = [...products];

    visibleProduct.sort((p1, p2) => {
      switch (sort) {
        case 'alph':
          return p1.localeCompare(p2);
        case 'length':
          return p1.length - p2.length;
        default:
          return 0;
      }
    });

    if (reverse) {
      visibleProduct.reverse();
    }

    return (
      <div className="App">

        {showList === false ? (
          <button
            type="button"
            onClick={this.showProduct}
          >
            Start
          </button>
        ) : (
          <>
            <ProductList products={visibleProduct} />
            <button
              type="button"
              onClick={this.reverseProduct}
            >
              Add Reverse
            </button>

            <button
              type="button"
              onClick={this.sortByAlphabetical}
            >
              Add Sort alphabetical
            </button>

            <button
              type="button"
              onClick={this.sortByLength}
            >
              Add Sort by length
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
