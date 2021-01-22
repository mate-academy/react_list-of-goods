import React from 'react';
import './App.css';
import { ProductList } from './ProductList';

const goodsFromServer = [
  'Juice',
  'Carrot',
  'Soy sauce',
  'Ice cream',
  'Apple',
  'Bread',
  'Tahini',
  'Maple syrup',
  'Jam',
  'Garlic',
  'Chewing gum',
  'Soda',
];

class App extends React.Component {
  state = {
    goodsList: goodsFromServer,
    isReversed: false,
    isStarted: false,
    sortBy: '',
  };

  reset = () => {
    this.setState({
      goodsList: goodsFromServer,
      isReversed: false,
      sortBy: '',
    });
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  }

  sortByName = () => {
    this.setState({
      sortBy: 'name',
    });
  }

  start = () => {
    this.setState({
      isStarted: true,
    });
  }

  render() {
    const { goodsList, isReversed, sortBy, isStarted } = this.state;

    const productList = [...goodsList].sort((p1, p2) => {
      switch (sortBy) {
        case 'name':
          return p1.localeCompare(p2);

        case 'length':
          return p1[sortBy] - p2[sortBy];

        default:
          return 0;
      }
    });

    if (isReversed) {
      productList.reverse();
    }

    return (
      <div className="App">
        {
          isStarted
            ? (
              <>
                <header className="header">
                  <h1 className="header__heading">Goods</h1>
                </header>
                <button
                  onClick={this.reverse}
                  type="button"
                  className="button"
                >
                  Reverse
                </button>
                <button
                  onClick={this.sortByName}
                  type="button"
                  className="button"
                >
                  Name
                </button>
                <button
                  onClick={this.sortByLength}
                  type="button"
                  className="button"
                >
                  Length
                </button>
                <button
                  onClick={this.reset}
                  type="button"
                  className="button"
                >
                  Reset
                </button>
                <ProductList goods={productList} />
              </>
            ) : (
              <button
                onClick={this.start}
                type="button"
                className="bigRedButton"
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
