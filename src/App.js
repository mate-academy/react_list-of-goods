import React, { Component } from 'react';

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

export default class App extends Component {
  state = {
    goods: [...goodsFromServer],
    originalGoods: [...goodsFromServer],
    isLoaded: false,
    selectedOption: 1,
  };

  loadData = () => {
    this.setState({
      goods: [...goodsFromServer],
      isLoaded: true,
    });
  };

  resetList = () => {
    this.setState(state => ({
      goods: [...state.originalGoods],
      selectedOption: 1,
    }));
  };

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => (
        a.replace(/\s/g, '').length - b.replace(/\s/g, '').length
      )),
    }));
  };

  sortAlphabetical = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  selectValue = ({ target }) => {
    const { value } = target;

    this.setState(state => ({
      selectedOption: value,
      goods: [...state.originalGoods].filter(
        item => item.length >= value
      ),
    }));
  };

  render() {
    const { isLoaded, goods, selectedOption } = this.state;

    return (
      <div className="App">
        {isLoaded ? (
          <>
            <button type="button" onClick={this.reverseList}>Reverse</button>
            <button type="button" onClick={this.sortAlphabetical}>
              Sort alphabetically
            </button>
            <button type="button" onClick={this.sortLength}>
              Sort by length
            </button>
            <button type="button" onClick={this.resetList}>Reset</button>
            <select
              value={selectedOption}
              onChange={this.selectValue}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <ul>
              {goods.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        ) : (
          <button type="button" onClick={this.loadData}>Start</button>
        )}
      </div>
    );
  }
}
