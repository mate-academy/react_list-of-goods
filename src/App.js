import React from 'react';
import './App.css';
import ClassNames from 'classnames';

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
    bool: false,
    sortedAlp: false,
    sortedLen: false,
    selectValue: 1,
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };

  showBasket = () => {
    this.setState(state => ({
      bool: !state.bool,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortAlph = () => {
    this.setState((state) => {
      if (!state.sortedAlp) {
        return {
          goods: [...state.goods].sort(),
          sortedAlp: !state.sortedAlp,
        };
      }

      return {
        goods: [...state.goods].sort().reverse(),
        sortedAlp: !state.sortedAlp,
      };
    });
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
      sortedAlp: false,
      sortedLen: false,
      selectValue: 1,
    });
  };

  sortLen = () => {
    this.setState((state) => {
      if (!state.sortedLen) {
        return {
          goods: [...state.goods].sort((a, b) => a.length - b.length),
          sortedLen: !state.sortedLen,
        };
      }

      return {
        goods: [...state.goods].sort((a, b) => b.length - a.length),
        sortedLen: !state.sortedLen,
      };
    });
  };

  handleChange = (event) => {
    this.setState({
      selectValue: event.target.value,
    });

    this.setState(state => ({
      goods: [...goodsFromServer].filter(el => el.length >= state.selectValue),
    }));
  };

  render() {
    const { goods, bool, selectValue, options } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>

        <button
          type="button"
          className={
            ClassNames(
              'start',
              'button',
              { hide: this.state.bool },
            )}
          onClick={this.showBasket}
        >
          Start
        </button>
        <button
          type="button"
          className={
            ClassNames(
              'button',
              { hide: !this.state.bool },
            )}
          onClick={this.reverse}
        >
          Reverse
        </button>

        <button
          type="button"
          className={
            ClassNames(
              'button',
              { hide: !this.state.bool },
            )}
          onClick={this.sortAlph}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={
            ClassNames(
              'button',
              { hide: !this.state.bool },
            )}
          onClick={this.reset}
        >
          Reset
        </button>

        <button
          type="button"
          className={
            ClassNames(
              'button',
              { hide: !this.state.bool },
            )}
          onClick={this.sortLen}
        >
          Sort by length
        </button>

        <select
          value={selectValue}
          onChange={this.handleChange}
          className={
            ClassNames(
              'button',
              { hide: !this.state.bool },
            )}
        >
          {options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>

        <ul className="list">
          {bool && goods.map(el => (
            <li>
              {el}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
