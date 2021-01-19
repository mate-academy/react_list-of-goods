import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList';

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
    isHidden: false,
  }

  showList = () => {
    this.setState({
      goods: goodsFromServer, isHidden: true,
    });
  }

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods.reverse()],
    }));
  }

  sortByName = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  sortByNameLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  }

  reset = () => {
    this.setState({
      goods: goodsFromServer,
    });
  }

  render() {
    return (
      <div className="app">
        <div className="app__header">
          <h1>Goods</h1>

          <button
            type="button"
            className="app__headerBtn"
            hidden={this.state.isHidden}
            onClick={this.showList}
          >
            Start
          </button>
        </div>

        <div className="app__btnsBlock">
          <button
            type="button"
            className="app__btn"
            onClick={this.reverse}
          >
            Reverse
          </button>

          <button
            type="button"
            className="app__btn"
            onClick={this.sortByName}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className="app__btn"
            onClick={this.sortByNameLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className="app__btn"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>

        <ul className="app__list">
          <GoodsList {...this.state} />
        </ul>
      </div>
    );
  }
}

export default App;
