import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';
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
    listVisibility: false,
    products: [...goodsFromServer],
  }

  showList = () => {
    const { listVisibility, buttonVisibility } = this.state;

    this.setState({
      listVisibility: !listVisibility,
      buttonVisibility: !buttonVisibility,
    });
  }

  reverse = () => {
    this.setState(state => ({
      products: state.products.reverse(),
    }));
  }

  alphabeticSort = () => {
    this.setState(state => ({
      products: state.products
        .sort((productA, productB) => productA.localeCompare(productB)),
    }));
  }

  lengthSort = () => {
    this.setState(state => ({
      products: state.products
        .sort((productA, productB) => productA.length - productB.length),
    }));
  }

  reset = () => {
    this.setState(() => ({
      products: [...goodsFromServer],
    }));
  }

  render() {
    const { listVisibility, products } = this.state;

    return (
      <div className="App">
        <div className="App__buttons">
          <button
            type="button"
            className="cell App__button"
            onClick={this.alphabeticSort}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className="cell App__button"
            onClick={this.lengthSort}
          >
            Sort by length
          </button>

          <button
            type="button"
            className="cell App__button App__button--reverse"
            onClick={this.reverse}
          >
            Reverse
          </button>

          <button
            type="button"
            className="cell App__button App__button--reset"
            onClick={this.reset}
          >
            Reset
          </button>

          {!listVisibility
            && (
              <button
                type="button"
                className="cell App__button App__button--show"
                onClick={this.showList}
              >
                Show
              </button>
            )
          }
        </div>

        <div className="App__table-wrapper">
          {listVisibility
            && <GoodsList products={products} />
          }
        </div>
      </div>
    );
  }
}

export default App;
