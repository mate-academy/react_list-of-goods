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

class App extends React.Component {
  state = {
    visible: false,
    goods: [...goodsFromServer],
    selected: 1,
  }

  startButton = () => {
    this.setState(
      { visible: true },
    );
  }

  reverseButton = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortButton = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  resetButton = () => {
    this.setState({
      goods: goodsFromServer,
      selected: 1,
    });
  }

  sortByLengthButtton = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => b.length - a.length),
    }));
  }

  changeLength = (event) => {
    this.setState({
      goods: goodsFromServer.filter(val => (val.length >= event.target.value)),
    });
  }

  optionsList = () => {
    const arr = [];

    for (let i = 1; i <= 10; i += 1) {
      arr.push(<option key={i} value={i}>{i}</option>);
    }

    return arr;
  }

  render() {
    const { visible, goods, selected } = this.state;

    return (
      <div>
        <h1>Goods</h1>
        <p>{goods.length}</p>
        <p>
          <button
            type="button"
            hidden={visible}
            onClick={this.startButton}
          >
            Start
          </button>
        </p>
        <div hidden={!visible}>
          <ul>
            {goods.map(good => (
              <li key={good}>
                {good}
              </li>
            ))}
          </ul>
          <button type="button" onClick={this.reverseButton}>
            Reverse
          </button>
          <button type="button" onClick={this.sortButton}>
            Sort
          </button>
          <button type="button" onClick={this.resetButton}>
            Reset
          </button>
          <button type="button" onClick={this.sortByLengthButtton}>
            Sort by length
          </button>
          <select value={selected} onChange={this.changeLength}>
            {this.optionsList()}
          </select>
        </div>
      </div>
    );
  }
}

export default App;
