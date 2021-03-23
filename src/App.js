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
    goods: [...goodsFromServer],
  }

  start = () => {
    const goodsList = document.querySelector('.goodsList');

    goodsList.innerHTML = '';
    this.state.goods.map((product) => {
      const html = `<li>${product}</li>`;

      return goodsList.insertAdjacentHTML('beforeend', html);
    });
  }

  reverse = () => {
    const goodsList = document.querySelector('.goodsList');

    goodsList.innerHTML = '';
    [...this.state.goods].reverse().map((product) => {
      const html = `<li>${product}</li>`;

      return goodsList.insertAdjacentHTML('beforeend', html);
    });
  }

  sort = () => {
    const goodsList = document.querySelector('.goodsList');

    goodsList.innerHTML = '';
    [...this.state.goods].sort().map((product) => {
      const html = `<li>${product}</li>`;

      return goodsList.insertAdjacentHTML('beforeend', html);
    });
  }

  reset = () => {
    const goodsList = document.querySelector('.goodsList');

    goodsList.innerHTML = '';
    this.state.goods.map((product) => {
      const html = `<li>${product}</li>`;

      return goodsList.insertAdjacentHTML('beforeend', html);
    });
  }

  sortByLength = () => {
    const goodsList = document.querySelector('.goodsList');

    goodsList.innerHTML = '';
    [...this.state.goods].sort((a, b) => b.length - a.length)
      .map((product) => {
        const html = `<li>${product}</li>`;

        return goodsList.insertAdjacentHTML('beforeend', html);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        <ul className="goodsList" />
        <div>
          <button
            type="button"
            onClick={this.start}
          >
            Start
          </button>
          <button
            type="button"
            onClick={this.reverse}
          >
            Reverse
          </button>
          <button
            type="button"
            onClick={this.sort}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>
          <button
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
        </div>
      </div>
    );
  }
}

export default App;
