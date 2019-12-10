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
    selectedValue: 1,
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

    this.setState({
      goods: goodsFromServer.filter(item => (item.length >= threshold)),
      selectedValue: threshold,
    });
  }

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
      selectedValue: 1,
    });
  }

  render() {
    const {
      isStarted,
      goods,
      currentSortAlph,
      currentSortByLength,
      selectedValue,
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
              value={selectedValue}
              onChange={this.filter}
              className="list__button list__button--select"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
                <option key={value} value={value}>{value}</option>
              ))}
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
