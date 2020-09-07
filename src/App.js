import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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
    goods: [...goodsFromServer],
  }

  Start = (event) => {
    document.querySelector('.list').classList.add('active');
    event.target.classList.add('inactive');
  }

  Reverse = () => {
    this.setState(state => ({
      goods: state.goods.reverse(),
    }));
  }

  Sort = () => {
    this.setState(state => ({
      goods: state.goods.sort(),
    }));
  }

  Reset = () => {
    this.setState(state => ({
      goods: [...goodsFromServer],
    }));
  }

  SortLength = () => {
    this.setState(state => ({
      goods: state.goods.sort((a, b) => a.length - b.length),
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          onClick={this.Start}
        >
          Start
        </button>
        <button
          type="button"
          onClick={this.Reverse}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={this.Sort}
        >
          Sort
        </button>
        <button
          type="button"
          onClick={this.Reset}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={this.SortLength}
        >
          Sort by length
        </button>
        <GoodsList goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
