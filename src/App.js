import React from 'react';
import './App.css';

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

const indexOfGoods = [];

for (let i = 1; i < 11; i += 1) {
  indexOfGoods.push(i);
}

class App extends React.Component {
  state = {
    startIsVisible: true,
    visibleGoods: [...goodsFromServer],
    length: 1,
  }

  sortGoods = () => {
    this.setState((state) => {
      const array = [...state.visibleGoods];

      return { visibleGoods: array.reverse() };
    });
  }

  sortAlphabetically = () => {
    this.setState((state) => {
      const array = [...state.visibleGoods];

      return { visibleGoods: array.sort((a, b) => (a.localeCompare(b))) };
    });
  }

  reset = () => {
    this.setState({ visibleGoods: [...goodsFromServer] });
  }

  sortByLength = () => {
    this.setState((state) => {
      const array = [...state.visibleGoods];

      return { visibleGoods: array.sort((a, b) => (a.length - b.length)) };
    });
  }

  render() {
    const { visibleGoods, startIsVisible, length } = this.state;

    return (
      <div className="App">
        <button
          className="button_start"
          type="button"
          onClick={() => {
            this.setState({ startIsVisible: false });
          }}
          hidden={!startIsVisible}
        >
          start
        </button>

        <div className="button-wrapper">
          <button
            hidden={startIsVisible}
            className="button"
            type="button"
            onClick={this.sortGoods}
          >
            reverse
          </button>
          <button
            hidden={startIsVisible}
            className="button"
            type="button"
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>
          <button
            hidden={startIsVisible}
            className="button"
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>
          <button
            hidden={startIsVisible}
            className="button"
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
        </div>
        <div className="wrapper" hidden={startIsVisible}>
          <h1>
            Goods
          </h1>
          <select
            onChange={event => this.setState({ length: event.target.value })}
          >
            {indexOfGoods.map(index => (
              <option value={index} key={index}>
                {index}
              </option>
            ))}
          </select>
          <ul hidden={startIsVisible}>
            {visibleGoods
              .filter(good => good.length >= length).map(good => (
                <li key={good}>
                  {good}
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
