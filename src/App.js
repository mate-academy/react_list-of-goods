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
    visibleGoods: [],
    isStartButtonVisible: true,
  };

  makeListVisibleHandler = () => {
    this.setState(prevState => ({
      visibleGoods: [...goodsFromServer],
      isStartButtonVisible: false,
    }));
  }

  reverseListHandler = () => {
    this.setState(prevState => ({
      visibleGoods: prevState.visibleGoods.reverse(),
    }));
  }

  sortAlphabeticallyHandler = () => {
    this.setState(prevState => ({
      visibleGoods: prevState.visibleGoods.sort(
        (current, next) => current.localeCompare(next),
      ),
    }));
  }

  sortByLengthHandler = () => {
    this.setState(prevState => ({
      visibleGoods: prevState.visibleGoods.sort(
        (current, next) => current.length - next.length,
      ),
    }));
  }

  resetListHandler = () => {
    this.setState(prevState => ({
      visibleGoods: [...goodsFromServer],
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
          onClick={this.makeListVisibleHandler}
        >
          Start
        </button>

        <button
          type="button"
          className={!this.state.isStartButtonVisible || 'hidden'}
          onClick={this.reverseListHandler}
        >
          Reverse
        </button>

        <button
          type="button"
          className={!this.state.isStartButtonVisible || 'hidden'}
          onClick={this.sortAlphabeticallyHandler}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={!this.state.isStartButtonVisible || 'hidden'}
          onClick={this.sortByLengthHandler}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={!this.state.isStartButtonVisible || 'hidden'}
          onClick={this.resetListHandler}
        >
          Reset
        </button>

      </div>
    );
  }
}

export default App;
