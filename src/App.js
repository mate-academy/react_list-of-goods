import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';

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
    visibleList: false,
    visibleButton: 'visible',
    initial: goodsFromServer,
    selectedLength: 1,
  }

  showGoods = (event) => {
    this.setState(state => ({
      visibleList: !state.visibleList,
      visibleButton: 'hidden',
    }));
  }

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  selectChange = (event) => {
    const { value } = event.target;

    this.setState(state => ({
      selectedLength: value,
      goods: state.initial.filter(item => item.length >= +value),
    }));
  }

  sortByAlphabet = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  }

  backToInitial = () => {
    this.setState(state => ({
      goods: state.initial,
      selectedLength: 1,
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  }

  render() {
    const { visibleList, goods, visibleButton } = this.state;
    const selecting = new Array(10).fill(0);

    return (
      <div className="App">
        <div className="main-content">
          <h1 className="title is-1">Goods:</h1>
          <ul
            className="block-list is-small is-outlined is-success is-centered"
          >
            {visibleList && <GoodsList goods={goods} />}
          </ul>

          <p>
            <select
              className="select-list"
              size={3}
              name="select"
              id="23"
              value={this.state.selectedLength}
              onChange={this.selectChange}
            >
              <option disabled>Select number</option>
              {selecting
                .map((item, index) => (
                  <option
                    value={index + 1}
                    key={Math.random()}
                  >
                    {index + 1}
                  </option>
                ))}
            </select>
          </p>
        </div>

        <div className="buttons">
          <button
            className="button is-dark"
            type="button"
            onClick={this.reverseList}
          >
            Reverse
          </button>

          <button
            className="button is-dark"
            type="button"
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            className="button is-dark"
            type="button"
            onClick={this.backToInitial}
          >
            Reset
          </button>

          <button
            className="button is-dark"
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            className="button is-dark"
            type="button"
            onClick={this.showGoods}
            style={{ visibility: `${visibleButton}` }}
          >
            Show
          </button>
        </div>

      </div>
    );
  }
}

export default App;
