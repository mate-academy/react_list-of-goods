import React from 'react';
import './App.css';
import { GoodsList } from './componets/GoodsList/GoodsList';

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

type State = {
  show: boolean,
  isReversed: boolean,
  sortBy: string,
};

class App extends React.Component <{}, State> {
  state = {
    show: false,
    isReversed: false,
    sortBy: '',
  };

  toggleList = () => {
    this.setState(state => ({
      show: !state.show,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  render() {
    const { isReversed, sortBy } = this.state;
    const goodsCopy = [...goodsFromServer];

    goodsCopy.sort((product1, product2) => {
      switch (sortBy) {
        case 'alphabet':
          return product1.localeCompare(product2);

        case 'length':
          return product1.length - product2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      goodsCopy.reverse();
    }

    return (
      <div className="App">
        <h1 className="title">Goods</h1>

        {!this.state.show && (
          <button
            type="button"
            onClick={this.toggleList}
            className="show-button"
          >
            Show
          </button>
        )}

        {this.state.show && (
          <>
            <ul>
              <GoodsList goods={goodsCopy} />
            </ul>

            <button
              type="button"
              onClick={this.reverse}
              className="level-item"
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={this.sortByAlphabet}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>

            <button
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>
          </>
        )}
      </div>
    );
  }
}

export default App;
