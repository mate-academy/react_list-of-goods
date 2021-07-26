import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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
    goods: [...goodsFromServer],
    isVisible: false,
    isReverse: false,
  };

  show = () => {
    this.setState({
      isVisible: true,
    });
  }

  reverse = () => {
    this.setState(state => ({
      isReverse: !state.isReverse,
      goods: state.goods.reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: state.goods.sort(),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: state.goods.sort((a, b) => a.length - b.length),
    }));
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  }

  render() {
    const { isVisible, goods } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>

        {isVisible
          ? (
            <>
              <GoodsList goods={goods} />
              <button
                className="App__btn-list"
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                className="App__btn-list"
                type="button"
                onClick={this.sortAlphabetically}
              >
                Sort alphabetically
              </button>
              <button
                className="App__btn-list"
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
              <button
                className="App__btn-list"
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
            </>
          )
          : (
            <button
              className="App__btn"
              type="button"
              onClick={this.show}
            >
              Show
            </button>
          )}
      </div>
    );
  }
}

export default App;
