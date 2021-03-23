import React from 'react';
import './App.css';

import { ListOfGoods } from './ListOfGoods';

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
    isListCreated: false,
    goods: goodsFromServer,
  }

  showList = () => {
    this.setState(prevState => ({
      isListCreated: !prevState.isListCreated,
    }));
  }

  reverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(
        (prevProduct, nextProduct) => prevProduct.localeCompare(nextProduct),
      ),
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(
        (prevProduct, nextProduct) => prevProduct.length - nextProduct.length,
      ),
    }));
  }

  reset = () => {
    this.setState({
      goods: goodsFromServer,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {
          this.state.isListCreated
            ? (
              <div className="Goods">
                <ListOfGoods goods={this.state.goods} />
                <button
                  type="button"
                  onClick={this.reverse}
                >
                  Reverse
                </button>
                <button
                  type="button"
                  onClick={this.sortAlphabetically}
                >
                  sortByName
                </button>
                <button
                  type="button"
                  onClick={this.sortByLength}
                >
                  sortByLength
                </button>
                <button
                  type="button"
                  onClick={this.reset}
                >
                  Reset
                </button>
              </div>
            )
            : (
              <button
                type="button"
                onClick={this.showList}
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
