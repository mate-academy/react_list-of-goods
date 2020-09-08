import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList/GoodsList';

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

export class App extends React.Component {
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
        {!this.state.isStarted ? (
          <button
            type="button"
            className="start"
            onClick={this.createList}
          >
            Star
          </button>
        ) : null}
        {this.state.isStarted
          ? (<GoodsList initialGoods={this.state.products} />)
          : null
        }
      </div>
    );
  }
}
