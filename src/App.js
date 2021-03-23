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
    isVisible: true,
  };

  listVisible = () => {
    this.setState(state => ({
      visibleGoods: [...goodsFromServer],
      isVisible: false,
    }));
  }

  reverseList = () => {
    this.setState(state => ({
      visibleGoods: state.visibleGoods.reverse(),
    }));
  }

  sortByName = () => {
    this.setState(state => ({
      visibleGoods: state.visibleGoods.sort(
        (current, next) => current.localeCompare(next),
      ),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      visibleGoods: state.visibleGoods.sort(
        (current, next) => current.length - next.length,
      ),
    }));
  }

  resetList = () => {
    this.setState(state => ({
      visibleGoods: [...goodsFromServer],
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>

        <ul className="list">
          {this.state.visibleGoods.map(good => (
            <li key="good" className="list__item">
              {good}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={this.state.isVisible || 'hidden'}
          onClick={this.listVisible}
        >
          Start
        </button>

        <button
          type="button"
          className={!this.state.isVisible || 'hidden'}
          onClick={this.reverseList}
        >
          Reverse
        </button>

        <button
          type="button"
          className={!this.state.isVisible || 'hidden'}
          onClick={this.sortByName}
        >
          Sort by Name
        </button>

        <button
          type="button"
          className={!this.state.isVisible || 'hidden'}
          onClick={this.sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={!this.state.isVisible || 'hidden'}
          onClick={this.resetList}
        >
          Reset
        </button>

      </div>
    );
  }
}

export default App;
