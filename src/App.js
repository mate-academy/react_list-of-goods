import React from 'react';
import GoodsList from './components/GoodsList';
import './style.css';

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
    goods: [...goodsFromServer],
    currentSortAlph: true,
    currentSortByLength: true,
  }

  start = () => {
    this.setState({ isStarted: true });
  }

  reverse = () => {
    this.setState(state => ({ goods: [...state.goods].reverse() }));
  }

  sortAlph = (currentSort) => {
    this.setState(state => (currentSort
      ? {
        goods: [...state.goods].sort(),
        currentSortAlph: !currentSort,
      }
      : {
        goods: [...state.goods].sort((a, b) => b.localeCompare(a)),
        currentSortAlph: !currentSort,
      }));
  }

  sortByLength = (currentSort) => {
    this.setState(state => (currentSort
      ? {
        goods: [...state.goods].sort((a, b) => a.length - b.length),
        currentSortByLength: !currentSort,
      }
      : {
        goods: [...state.goods].sort((a, b) => b.length - a.length),
        currentSortByLength: !currentSort,
      }));
  }

  filter = (event) => {
    const threshold = +event.target.value;

    this.setState(
      { goods: goodsFromServer.filter(item => (item.length >= threshold)) }
    );
  }

  reset = () => {
    this.setState({ goods: [...goodsFromServer] });
  }

  render() {
    const {
      isStarted,
      goods,
      currentSortAlph,
      currentSortByLength,
    } = this.state;

    return (
      <div className="App">
        <h1>Goods 1</h1>

        {isStarted ? (
          <section className="list">
            <button
              type="button"
              className="list__button"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              type="button"
              className="list__button"
              onClick={() => this.sortAlph(currentSortAlph)}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className="list__button"
              onClick={() => this.sortByLength(currentSortByLength)}
            >
              Sort by length
            </button>

            <select
              onChange={this.filter}
              className="list__button list__button--select"
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

            <button
              type="button"
              className="list__button list__button--reset"
              onClick={this.reset}
            >
              Reset
            </button>

            <GoodsList goods={[...goods]} />
          </section>
        ) : (
          <button
            type="button"
            className="list__button list__button--start"
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
