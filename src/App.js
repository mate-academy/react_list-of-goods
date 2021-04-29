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
    isReversed: false,
    sortBy: '',
    isNotVisible: true,
  }

  visibility = () => {
    this.setState({ isNotVisible: false });
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortAlphabetically = () => {
    this.setState({ sortBy: 'name' });
  }

  sortLength = () => {
    this.setState({ sortBy: 'length' });
  }

  reset = () => {
    this.setState({
      products: goodsFromServer,
      isReversed: false,
      sortBy: '',
    });
  }

  render() {
    const { products, isReversed, sortBy, isNotVisible } = this.state;

    const productsCopy = [...products];

    productsCopy.sort((productOne, productTwo) => {
      switch (sortBy) {
        case 'name':
          return productOne.localeCompare(productTwo);
        case 'length':
          return productOne.length - productTwo.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      productsCopy.reverse();
    }

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
          products={productsCopy}
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
