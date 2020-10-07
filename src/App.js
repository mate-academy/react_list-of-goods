import React from 'react';
import classNames from 'classnames/bind';
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
    selectValue: 1,
    selectItems: 10,
    showGoods: true,
  };

  addList = () => {
    this.setState({
      showGoods: false,
    });
  }

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  }

  initialList = () => {
    this.setState({
      goods: [...goodsFromServer],
      selectValue: 1,
    });
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [
        ...state.goods,
      ].sort((good1, good2) => good1.length - good2.length),
    }));
  }

  changeValue = (event) => {
    this.setState({
      selectValue: event.target.value,
      goods: goodsFromServer.filter(
        good => good.length >= +event.target.value,
      ),
    });
  }

  reset = () => {
    this.setState({
      selectValue: 1,
      goods: goodsFromServer,
    });
  }

  render() {
    const { goods, selectValue, showGoods, selectItems } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <ul
          className={classNames({ invisible: showGoods })}
        >
          {goods.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={this.addList}
          className={classNames({
            invisible: !showGoods,
          })}
        >
          Start
        </button>

        <button
          type="button"
          onClick={this.reverseList}
          className={classNames({ invisible: showGoods })}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.sortAlphabetically}
          className={classNames({ invisible: showGoods })}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          onClick={this.initialList}
          className={classNames({ invisible: showGoods })}
        >
          Initial list
        </button>

        <button
          type="button"
          onClick={this.sortByLength}
          className={classNames({ invisible: showGoods })}
        >
          Sort by length
        </button>

        <select
          value={selectValue}
          onChange={this.changeValue}
          className={classNames({ invisible: showGoods })}
        >

          {[...new Array(selectItems).keys()].map(elem => (
            <option key={elem} value={elem + 1}>
              {elem + 1}
            </option>
          ))}

        </select>

        <button
          type="button"
          onClick={this.reset}
          className={classNames({ invisible: showGoods })}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default App;
