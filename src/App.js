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
    isReversed: false,
    sortBy: '',
  }

  showList = () => {
    this.setState(prevState => ({
      isListCreated: !prevState.isListCreated,
    }));
  }

  reverse = () => {
    this.setState(prevState => ({
      isReversed: !prevState.isReversed,
    }));
  }

  sortAlphabetically = () => {
    this.setState({
      sortBy: 'alphabet',
    });
  }

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  }

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  }

  render() {
    const visibleGoods = [...this.state.goods];
    const { isReversed, sortBy } = this.state;

    visibleGoods.sort((prevProduct, nextProduct) => {
      switch (sortBy) {
        case 'length':
          return prevProduct.length - nextProduct.length;
        case 'alphabet':
          return prevProduct.localeCompare(nextProduct);
        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {
          this.state.isListCreated
            ? (
              <div className="Goods">
                <ListOfGoods goods={visibleGoods} />
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
