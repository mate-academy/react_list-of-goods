import React from 'react';

import GoodsList from './components/GoodsList/GoodsList';
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
    isStart: false,
    selectValue: 1,
    goods: [...goodsFromServer],
  }

  start = () => {
    this.setState({ isStart: true });
  }

  reverse = () => {
    this.setState(state => ({ goods: state.goods.reverse() }));
  }

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: state.goods.sort((good1, good2) => good1.localeCompare(good2)),
    }));
  }

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
      selectValue: 1,
    });
  }

  sortLenght = () => {
    this.setState(state => ({
      goods: state.goods.sort((good1, good2) => good1.length - good2.length),
    }));
  }

  filterLength = (evt) => {
    const goodLength = Number(evt.target.value);

    this.setState({
      goods: goodsFromServer.filter(good => good.length >= goodLength),
      selectValue: goodLength,
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="App__header">Goods</h1>
        {goodsFromServer.length}
        <button
          className="App__button"
          type="button"
          onClick={this.start}
          hidden={this.state.isStart}
        >
          Start
        </button>
        <button
          className="App__button"
          type="button"
          onClick={this.reverse}
          hidden={!this.state.isStart}
        >
          Reverse
        </button>
        <button
          className="App__button"
          type="button"
          onClick={this.sortAlphabetically}
          hidden={!this.state.isStart}
        >
          Sort alphabetically
        </button>
        <button
          className="App__button"
          type="button"
          onClick={this.reset}
          hidden={!this.state.isStart}
        >
          Reset
        </button>
        <button
          className="App__button"
          type="button"
          onClick={this.sortLenght}
          hidden={!this.state.isStart}
        >
          Sort by length
        </button>
        <select
          className="App__select"
          hidden={!this.state.isStart}
          value={this.state.selectValue}
          onChange={this.filterLength}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
        {this.state.isStart ? <GoodsList goods={this.state.goods} /> : ''}
      </div>
    );
  }
}

export default App;
