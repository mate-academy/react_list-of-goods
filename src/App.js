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
    goodsVisibility: false,
    goodsList: goodsFromServer,
  }

  startHandler = () => {
    this.setState({ goodsVisibility: true });
  }

  reverseHandler = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].reverse(),
    }));
  };

  resetHandler = () => {
    this.setState({
      goodsList: goodsFromServer,
    });
  };

  sortAlphabetHandler = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].sort(
        (a, b) => (
          a.localeCompare(b)
        ),
      ),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].sort(
        (a, b) => (
          a.length - b.length
        ),
      ),
    }));
  };

  render() {
    const { goodsVisibility, goodsList } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {!goodsVisibility && (
          <button
            type="button"
            onClick={this.startHandler}
          >
            Start
          </button>
        )}
        {goodsVisibility && (
          <>
            <button
              type="button"
              onClick={this.reverseHandler}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={this.sortAlphabetHandler}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={this.resetHandler}
            >
              Reset
            </button>

            <button
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>

            <GoodsList
              goodsList={goodsList}
            />
          </>
        )}
      </div>
    );
  }
}

export default App;
