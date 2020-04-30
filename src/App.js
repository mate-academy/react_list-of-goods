import React from 'react';

import './App.css';
import GoodList from './GoodList';

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
    isVisible: false,
    select: 1,
  }

  showContent = () => {
    this.setState({ isVisible: true });
  }

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  reset = () => {
    this.setState(state => ({
      goods: goodsFromServer,
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  }

  sortBySelect = (event) => {
    this.setState({
      select: event.target.value,
    });

    this.setState(state => ({
      goods: goodsFromServer.filter(item => item.length >= state.select),
    }));
  }

  render() {
    const { isVisible, select } = this.state;
    const selectNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <div className="App">
        <h1>Goods</h1>
        {!isVisible && (
          <button type="button" onClick={this.showContent}>
            Start
          </button>
        )}
        {
          isVisible
          && (
            <>
              <GoodList goods={this.state.goods} />
              <button type="button" onClick={this.reverseList}>Reverse</button>
              <button type="button" onClick={this.sortAlphabetically}>
                Sort alphabetically
              </button>
              <button type="button" onClick={this.reset}>Reset</button>
              <button type="button" onClick={this.sortByLength}>
                Sort by length
              </button>
              <select value={select} onChange={this.sortBySelect}>
                {
                  selectNumbers.map(item => (
                    <option key={item} value={item}>{item}</option>
                  ))
                }
              </select>
            </>
          )
        }

      </div>
    );
  }
}

export default App;
