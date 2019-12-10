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
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };

  start = () => {
    this.setState({ isStarted: true });
  };

  reset = () => {
    this.setState({
      visibleGoods: [...goodsFromServer],
      index: '1',
    });
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

  getLength = () => this.state.options
    .map(i => (
      <option value={i}>
        {' '}
        { i }
      </option>
    ))

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
              {this.getLength()}
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
