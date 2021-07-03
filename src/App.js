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
    isStarted: false,
  };

  createList = () => {
    this.setState({
      isStarted: true,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {!this.state.isStarted ? (
          <button
            type="button"
            className="button-start"
            onClick={this.createList}
          >
            Star
          </button>
        ) : null}
        {this.state.isStarted
          ? (<Products goods={this.state.products} />)
          : null
        }
      </div>
    );
  }
}

export default App;
