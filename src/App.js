import React from 'react';
import classNames from 'classnames';
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

class App extends React.Component {
  state = {
    goods: goodsFromServer,
    isVisible: false,
    isReversed: false,
    sortBy: 'id',
    selectValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    selectedValue: 1,
    filterValue: 10,
  };

  start = () => {
    this.setState(state => ({
      isVisible: true,
    }));
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      sortBy: 'alphabetically',
      filterValue: state.selectedValue,
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      sortBy: 'length',
      filterValue: state.selectedValue,
    }));
  };

  reset = () => {
    this.setState(state => ({
      goods: goodsFromServer,
      isReversed: false,
      sortBy: 'id',
      selectedValue: 1,
      filterValue: 10,
    }));
  };

  select = ({ target }) => {
    this.setState(state => ({
      selectedValue: target.value,
    }));
  }

  render() {
    const {
      goods,
      isVisible,
      isReversed,
      sortBy,
      selectValues,
      selectedValue,
      filterValue,
    } = this.state;

    const startGoods = goods.filter(good => good.length <= filterValue);

    startGoods.sort((g1, g2) => {
      switch (sortBy) {
        case 'alphabetically':
          return g1.localeCompare(g2);
        case 'length':
          return g1.length - g2.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      startGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        <pre>{goodsFromServer.length}</pre>
        <button
          type="button"
          className={classNames({ hidden: isVisible })}
          onClick={this.start}
        >
          Start
        </button>
        <select value={selectedValue} onChange={this.select}>
          {selectValues
            .map(value => <option value={value} key={value}>{value}</option>)}
        </select>
        <ul className={classNames({ hidden: !isVisible })}>
          <button
            type="button"
            onClick={this.sortAlphabetically}
          >
            sortAlphabetically
          </button>
          <button
            type="button"
            onClick={this.sortByLength}
          >
            sortByLength
          </button>
          <button type="button" onClick={this.reverse}>Reverse</button>
          <button type="button" onClick={this.reset}>Reset</button>
          {startGoods.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
