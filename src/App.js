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
    goods: goodsFromServer,
    visibleGoods: [],
    isStartButtonVisible: true,
  };

  makeListVisible = () => {
    this.setState(prevState => ({
      visibleGoods: [...prevState.goods],
      isStartButtonVisible: false,
    }));
  }

  reverseList = () => {
    this.setState(prevState => ({
      visibleGoods: prevState.visibleGoods.reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(prevState => ({
      visibleGoods: prevState.visibleGoods.sort(
        (current, next) => current.localeCompare(next),
      ),
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      visibleGoods: prevState.visibleGoods.sort(
        (current, next) => current.length - next.length,
      ),
    }));
  }

  resetList = () => {
    this.setState(prevState => ({
      visibleGoods: [...prevState.goods],
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>

        <ul>
          {this.state.visibleGoods.map(good => (
            <li key="good" className="list__item">
              {good}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={this.state.isStartButtonVisible || 'hidden'}
          onClick={this.makeListVisible}
        >
          Start
        </button>

        <button
          type="button"
          className={!this.state.isStartButtonVisible || 'hidden'}
          onClick={this.reverseList}
        >
          Reverse
        </button>

        <button
          type="button"
          className={!this.state.isStartButtonVisible || 'hidden'}
          onClick={this.sortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={!this.state.isStartButtonVisible || 'hidden'}
          onClick={this.sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={!this.state.isStartButtonVisible || 'hidden'}
          onClick={this.resetList}
        >
          Reset
        </button>

      </div>
    );
  }
}

export default App;
