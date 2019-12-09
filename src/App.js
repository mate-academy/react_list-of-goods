import React from 'react';
import GoodsList from './components/GoodsList';

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
    isStarted: false,
    visibleGoods: [...goodsFromServer],
    index: 1,
  };

  start = () => {
    this.setState({ isStarted: true });
  };

  reset = () => {
    this.setState(state => ({
      visibleGoods: [...goodsFromServer],
      index: 1,
    }));
  };

  reverse = () => {
    this.setState(state => (
      { visibleGoods: [...state.visibleGoods].reverse() }));
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      visibleGoods: [...state.visibleGoods]
        .sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      visibleGoods: [...state.visibleGoods]
        .sort((a, b) => a.length - b.length),
    }));
  };

  filterElementsByLength = ({ target }) => {
    const { value } = target;

    this.setState(state => ({
      index: value,
      visibleGoods: goodsFromServer.filter(
        item => item.length >= value
      ),
    }));
  };

  render() {
    const { isStarted, visibleGoods, index } = this.state;

    return (
      <div className="App">
        <h1 className="title">List of Goods</h1>
        {isStarted ? (
          <section className="visible-goods">

            <button
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>

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
              Sort Alphabetically
            </button>

            <button
              type="button"
              onClick={this.sortByLength}
            >
              Sort By Length
            </button>

            <select
              value={index}
              onChange={this.filterElementsByLength}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>

            <GoodsList visibleGoods={visibleGoods} />
          </section>
        )
          : (
            <button
              type="button"
              className="start"
              onClick={this.start}
            >
            Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
