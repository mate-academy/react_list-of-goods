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
      prevState => ({ goodsCurrent: prevState.goodsConst })
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
      </div>
    );
  }
}

export default App;
