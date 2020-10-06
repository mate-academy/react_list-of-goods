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
    vision: true,
  };

  addList = (event) => {
    this.setState({
      vision: false,
    });
  }

  reverseSort = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  alphabeticallySort = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  }

  initialSort = () => {
    this.setState({
      goods: [...goodsFromServer],
      selectValue: 1,
    });
  }

  lengthSort = () => {
    this.setState(state => ({
      goods: [
        ...state.goods,
      ].sort((good1, good2) => good1.length - good2.length),
    }));
  }

  changeValue = (event) => {
    this.setState({
      selectValue: event.target.value,
    });
    this.setState(stat => ({
      goods: [...goodsFromServer].filter(
        good => good.length >= +stat.selectValue,
      ),
    }));
  }

  reset = () => {
    this.setState({
      selectValue: 1,
      goods: goodsFromServer,
    });
  }

  render() {
    const { goods, selectValue, vision } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <ul
          className={classNames({ invisible: vision })}
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
            invisible: !vision,
          })}
        >
          Start
        </button>

        <button type="button" onClick={this.reverseSort}>
          Reverse
        </button>

        <button type="button" onClick={this.alphabeticallySort}>
          Sort alphabetically
        </button>

        <button type="button" onClick={this.initialSort}>
          Initial sort
        </button>

        <button type="button" onClick={this.lengthSort}>
          Sort by length
        </button>

        <select
          value={selectValue}
          onChange={this.changeValue}
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

        <button type="button" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}

export default App;
