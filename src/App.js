import React from 'react';
import { GoodsList } from './components/GoodsList';

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
    goods: [...goodsFromServer],
    isVisible: true,
    defaultOption: '1',
  }

  showList = () => {
    this.setState({ isVisible: false });
  };

  hideList = () => {
    this.setState({ isVisible: true });
  }

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortByAlphabet = () => {
    this.setState(state => ({
      goods: [...state.goods]
        .sort((first, second) => first.localeCompare(second)),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods]
        .sort((first, second) => first.length - second.length),
    }));
  }

  reset = () => {
    this.setState(state => ({
      goods: [...goodsFromServer],
      defaultOption: '1',
    }));
  }

  filterByLength = ({ target }) => {
    this.setState(state => ({
      defaultOption: target.value,
      goods: [...goodsFromServer]
        .filter(product => product.length >= target.value),
    }));
  }

  render() {
    const { goods, isVisible, defaultOption } = this.state;
    const selectNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <div className="app">
        {isVisible
          ? (
            <button
              type="button"
              className="app__button-visibility"
              onClick={this.showList}
            >
              Start
            </button>
          )
          : (
            <>
              <button
                type="button"
                className="app__button-visibility"
                onClick={this.hideList}
              >
                Hide
              </button>
              <div className="app__buttons">
                <button
                  type="button"
                  className="app__button app__button-reverse"
                  onClick={this.reverse}
                >
                  Reverse
                </button>
                <button
                  type="button"
                  className="app__button app__button-sort"
                  onClick={this.sortByAlphabet}
                >
                  Sort alphabetically
                </button>
                <button
                  type="button"
                  className="app__button app__button-reset"
                  onClick={this.reset}
                >
                  Reset
                </button>
                <button
                  type="button"
                  className="app__button app__button-sortByLength"
                  onClick={this.sortByLength}
                >
                  Sort by length
                </button>
                <select
                  value={defaultOption}
                  className="app__select"
                  onChange={this.filterByLength}
                >
                  {selectNumbers.map(num => (
                    <option key={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              <GoodsList goods={goods} />
            </>
          )
        }
      </div>
    );
  }
}

export default App;
