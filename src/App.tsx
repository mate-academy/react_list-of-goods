import React from 'react';
import './App.css';
import { Goods } from './components/Goods';

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
  isGoodsVisible: boolean,
  isReversed: boolean,
  isSortedAlphabet: boolean,
  visibleGoods: string[],
  isSortedLength: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    isGoodsVisible: false,
    isReversed: false,
    isSortedAlphabet: false,
    visibleGoods: [...goodsFromServer],
    isSortedLength: false,
  };

  reverseGoods = () => {
    this.setState({
      isReversed: true,
      isSortedAlphabet: false,
      isSortedLength: false,
    });
  };

  sortAlphabet = () => {
    this.setState({
      isReversed: false,
      isSortedAlphabet: true,
      isSortedLength: false,
    });
  };

  resetGoods = () => {
    this.setState({
      isReversed: false,
      isSortedAlphabet: false,
      isSortedLength: false,
    });
  };

  sortByLength = () => {
    this.setState({
      isReversed: false,
      isSortedAlphabet: false,
      isSortedLength: true,
    });
  };

  render() {
    return (
      <div className="App">
        {!this.state.isGoodsVisible && (
          <button
            type="button"
            onClick={() => {
              this.setState({ isGoodsVisible: true });
            }}
            className="App__button"
          >
            Start
          </button>
        )}
        {this.state.isGoodsVisible && (
          <div className="App__container">
            <Goods
              goods={this.state.visibleGoods}
              isReversed={this.state.isReversed}
              isSortedAlphabet={this.state.isSortedAlphabet}
              defaultGoods={goodsFromServer}
              isSortedLength={this.state.isSortedLength}
            />
            <div className="App__buttons">
              <button
                type="button"
                onClick={this.reverseGoods}
                className="App__button"
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sortAlphabet}
                className="App__button"
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={this.resetGoods}
                className="App__button"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={this.sortByLength}
                className="App__button"
              >
                Sort by length
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
