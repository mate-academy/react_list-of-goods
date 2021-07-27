import React from 'react';
import './App.css';
import { ProductList } from './components/ProductList';
import { Button } from './components/Button';

const productFromServer = [
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
    productList: [...productFromServer],
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
        productList: [...state.productList].sort(),
      }),
    );
  }

  reset = () => {
    this.setState(
      () => ({
        productList: [...productFromServer],
      }),
    );
  }

  sortLength = () => {
    this.setState(
      state => ({
        productList: [...state.productList].sort(
          (a, b) => (a.length - b.length),
        ),
      }),
    );
  }

  render() {
    return (
      <div className="App">
        {this.state.isStarted ? (
          <React.Fragment>
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
          </React.Fragment>
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
