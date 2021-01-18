import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList/GoodsList';

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
    isVisible: false,
    goods: goodsFromServer,
  };

  show = () => {
    this.setState({
      isVisible: true,
    });
  };

  reverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  };

  reset = () => {
    this.setState(prevState => ({
      goods: goodsFromServer,
    }));
  };

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((a, b) => a.length - b.length),
    }));
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {!isVisible ? (
          <button
            onClick={this.show}
            type="button"
          >
            show
          </button>
        ) : (
          <GoodsList goods={this.state.goods} />
        )}
        <button
          className="btn"
          onClick={this.reverse}
          type="button"
        >
          Reverse
        </button>
        <button
          className="btn"
          onClick={this.sortAlphabetically}
          type="button"
        >
          Sort alphabetically
        </button>
        <button
          className="btn"
          onClick={this.reset}
          type="button"
        >
          Reset
        </button>
        <button
          className="btn"
          onClick={this.sortByLength}
          type="button"
        >
          Sort by length
        </button>
      </div>
    );
  }
}

export default App;
