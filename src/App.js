import React from 'react';
import './App.css';
import { ProductList } from './components/ProductList';
import { Button } from './components/Button';

const productsFromServer = [
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

class App extends React.PureComponent {
  state = {
    productList: [...productsFromServer],
    isStarted: false,
  }

  start = () => {
    this.setState({ isStarted: true });
  }

  reverse = () => {
    this.setState(
      state => ({
        productList: [...state.productList].reverse(),
      }),
    );
  }

  sortAlphabet = () => {
    this.setState(
      state => ({
        productList: [...state.productList].sort(
          (product1, product2) => (product1).localeCompare(product2),
        ),
      }),
    );
  }

  reset = () => {
    this.setState(
      () => ({
        productList: [...productsFromServer],
      }),
    );
  }

  sortLength = () => {
    this.setState(
      state => ({
        productList: [...state.productList].sort(
          (product1, product2) => (product1.length - product2.length),
        ),
      }),
    );
  }

  render() {
    return (
      <div className="App">
        {this.state.isStarted ? (
          <div>
            <ProductList productList={this.state.productList} />
            <Button
              text="Reverse"
              onClick={this.reverse}
            />
            <Button
              text="Sort alphabetically"
              onClick={this.sortAlphabet}
            />
            <Button
              text="Reset"
              onClick={this.reset}
            />
            <Button
              text="Sort by length"
              onClick={this.sortLength}
            />
          </div>
        ) : (
          <Button
            text="Start"
            onClick={this.start}
          />
        )}
      </div>
    );
  }
}

export default App;
