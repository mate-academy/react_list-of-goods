import React from 'react';
import './App.css';
import GoodsList from './GoodsList';

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

class App extends React.Component<{}, Props> {
  state = {
    products: goodsFromServer,
    isClicked: false,
  };

  showGoodsList = () => {
    const { isClicked } = this.state;

    this.setState({ isClicked: !isClicked });
  };

  reverseGoodsList = () => {
    const { products } = this.state;

    this.setState({ products: [...products].reverse() });
  };

  sortGoodsAZ = () => {
    this.setState(state => ({
      products: [...state.products].sort(),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      products: [...state.products].sort((a, b) => {
        return a.length - b.length;
      }),
    }));
  };

  resetToInitial = () => {
    this.setState({ products: goodsFromServer });
  };

  render() {
    const { products, isClicked } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <div className="Button">
          {!isClicked && (
            <button
              type="button"
              className="Button__show"
              onClick={this.showGoodsList}
            >
              Start
            </button>
          )}

          <button
            type="button"
            className="Button__reverse"
            onClick={this.reverseGoodsList}
          >
            Reverse
          </button>

          <button
            type="button"
            className="Button__alpha"
            onClick={this.sortGoodsAZ}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className="Button__reset"
            onClick={this.resetToInitial}
          >
            Reset
          </button>

          <button
            type="button"
            className="Button__length"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
        </div>
        {isClicked && <GoodsList products={products} />}
      </div>
    );
  }
}

export default App;
