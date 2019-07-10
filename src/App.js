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
  constructor() {
    super();
    this.state = {
      isStarted: false,
      goodsConst: [],
      goodsCurrent: [],
      choosenValue: 0,
      constValue: 0,
    };
  }

  handleClick = () => {
    this.setState({
      isStarted: true,
      goodsConst: goodsFromServer,
      goodsCurrent: goodsFromServer,
    });
  }

  handleResert = () => {
    this.setState(
      prevState => ({
        goodsCurrent: prevState.goodsConst,
        choosenValue: prevState.constValue,
      })
    );
  }

  handleReverse = () => {
    this.setState(
      prevState => ({ goodsCurrent: [...prevState.goodsCurrent].reverse() })
    );
  }

  handleSortAlphabet = () => {
    this.setState(
      prevState => ({ goodsCurrent: [...prevState.goodsCurrent].sort() })
    );
  }

  handleSortByLength = () => {
    this.setState(
      prevState => ({
        goodsCurrent: [...prevState.goodsCurrent].sort(
          (a, b) => a.length - b.length
        ),
      })
    );
  }

  filterByNumber = (event) => {
    const { value } = event.target;
    this.setState(
      prevState => ({
        choosenValue: value,
        goodsCurrent: [...prevState.goodsConst].filter(
          good => good.length >= value
        ),
      })
    );
  }

  render() {
    if (this.state.isStarted === false) {
      return (
        <button onClick={this.handleClick} type="button">Start</button>
      );
    }
    return (
      <div className="App">
        <button onClick={this.handleReverse} type="button">
          Reverse
        </button>
        <button onClick={this.handleSortAlphabet} type="button">
          Sort alphabetically
        </button>
        <button onClick={this.handleResert} type="button">
          Resert
        </button>
        <button onClick={this.handleSortByLength} type="button">
          Sort by length
        </button>
        <ul>
          {this.state.goodsCurrent.map(good => (<li>{good}</li>))}
        </ul>
        <select value={this.state.choosenValue} onChange={this.filterByNumber}>
          <option value="0">Choose a number</option>
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
      </div>
    );
  }
}

export default App;
