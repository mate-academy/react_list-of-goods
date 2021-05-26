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
    shouldShowList: false,
    isReverse: false,
    sortBy: '',
  }

  showProduct = () => {
    this.setState(state => ({
      shouldShowList: !state.shouldShowList,
    }));
  }

  reverseProduct = () => {
    this.setState(state => ({
      isReverse: !state.isReverse,
    }));
  }

  sortByAlphabetical = () => {
    this.setState({ sortBy: 'alph' });
  }

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  }

  reset = () => {
    this.setState({
      isReverse: false,
      sortBy: '',
    });
  }

  render() {
    const { shouldShowList, isReverse, sortBy } = this.state;
    const visibleProduct = [...goodsFromServer];

    visibleProduct.sort((prev, next) => {
      switch (sortBy) {
        case 'alph':
          return prev.localeCompare(next);
        case 'length':
          return prev.length - next.length;
        default:
          return 0;
      }
    });

    if (isReverse) {
      visibleProduct.reverse();
    }

    return (
      <div className="App">

        {!shouldShowList ? (
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
