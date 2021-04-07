import React from 'react';
import './App.css';
import { GoodsList } from './components/goodsList/GoodsList';

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
    isButtonVisible: true,
    goods: [...goodsFromServer],
  }

  showContent = () => {
    this.setState(state => ({
      isButtonVisible: !state.isButtonVisible,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortByAlphabet = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((good1, good2) => good1.length - good2.length),
    }));
  }

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  }

  render() {
    const { isButtonVisible, goods } = this.state;

    return (
      <div className="block shadow p-3 mb-5 bg-body rounded">
        {isButtonVisible
          ? (
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.showContent}
            >
              Start
            </button>
          )

          : (
            <div className="App">
              <h1>Goods</h1>

              <button
                className="btn btn-success"
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                className="btn btn-warning"
                type="button"
                onClick={this.sortByAlphabet}
              >
                Sort alphabetically
              </button>
              <button
                className="btn btn-info"
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
              <button
                className="btn btn-danger"
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
              <GoodsList goods={goods} />
            </div>
          )}
      </div>
    );
  }
}

export default App;
