import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ProductList from './components/ProductList';

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
const initialState = {
  listIsVisible: true,
  buttonIsVisible: false,
  products: goodsFromServer,
  selectedElementLength: 1,
};

class App extends React.Component {
  state = initialState

  showList = () => {
    this.setState(prevState => ({
      ...prevState,
      listIsVisible: !prevState.listIsVisible,
      buttonIsVisible: !prevState.buttonIsVisible,
    }));
  }

  reverse = () => {
    this.setState(prevState => ({
      ...prevState,
      products: [...prevState.products].reverse(),
    }));
  }

  sortAlphabet = () => {
    this.setState(prevState => ({
      ...prevState,
      products: [...prevState.products].sort(),
    }));
  }

  reset = () => {
    this.setState(prevState => ({
      ...prevState,
      products: initialState.products,
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      ...prevState,
      products: [...prevState.products]
        .sort((prod1, prod2) => prod1.length - prod2.length),
    }));
  }

  sortBySelect = ({ target }) => {
    this.setState(() => ({
      products: initialState.products
        .filter(product => product.length >= target.value),
    }));
  }

  render() {
    const { listIsVisible, products, buttonIsVisible } = this.state;
    const productsCopy = [...products];
    const selectArray = new Array(10).fill(0);

    return (
      <>
        <div className="App">
          <div className="wrapper">
            <h1>
              Goods
              {' '}
              {goodsFromServer.length}
            </h1>
            <select
              name="selectList"
              id="selectList"
              size={3}
              onChange={this.sortBySelect}
            >
              {selectArray.map((select, index) => (
                <option
                  value={index + 1}
                  key={Math.random()}
                >
                  {index + 1}
                </option>
              ))}
            </select>
          </div>
          <Button
            onClick={this.showList}
            type="button"
            hidden={buttonIsVisible}
            className="mr-2"
          >
            Start
          </Button>
          <Button
            variant="secondary"
            type="button"
            onClick={this.reverse}
            className="mr-2"
          >
            Reverse
          </Button>
          <Button
            variant="success"
            type="button"
            className="mr-2"
            onClick={this.sortAlphabet}
          >
            Sort Alphabetical
          </Button>
          <Button
            variant="warning"
            type="button"
            className="mr-2"
            onClick={this.reset}
          >
            Reset
          </Button>
          <Button
            variant="info"
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </Button>
          <div hidden={listIsVisible}>
            <ProductList
              products={productsCopy}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
