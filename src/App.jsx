import React from 'react';
import './App.scss';

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
    goods: [],
  };

  showList = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortList = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((prev, next) => prev.localeCompare(next)),
    }));
  };

  resetList = () => {
    this.setState({
      goods: goodsFromServer,
    });
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((prev, next) => prev.length - next.length),
    }));
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <div className="container">
          <button
            type="button"
            className="button container__button-start"
            onClick={this.showList}
          >
            Start
          </button>

          <ul className="list container__list">
            {goods.map(good => (
              <li className="list__item" key="good">
                {good}
              </li>
            ))}
          </ul>

          <div className="list__button">
            <button
              type="button"
              className="button list__button-item"
              hidden={!goods.length}
              onClick={this.reverseList}
            >
              Reverse
            </button>

            <button
              type="button"
              className="button list__button-item"
              hidden={!goods.length}
              onClick={this.sortList}
            >
              Sort
            </button>

            <button
              type="button"
              className="button list__button-item"
              hidden={!goods.length}
              onClick={this.resetList}
            >
              Reset
            </button>

            <button
              type="button"
              className="button list__button-item"
              hidden={!goods.length}
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
