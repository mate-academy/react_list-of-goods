/* eslint-disable no-param-reassign */
import React from 'react';
import './App.css';
import { Products } from './components/Products/Products';

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
    products: [...goodsFromServer],
    addList: false,
  };

  createList = (event) => {
    this.setState({
      addList: true,
    });
    event.target.hidden = true;
  };

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          className="button-start"
          onClick={this.createList}
        >
          Star
        </button>
        {this.state.addList ? <Products goods={this.state.products} /> : null}
      </div>
    );
  }
}

export default App;
