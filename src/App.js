import React, { Component } from 'react';
import OptionList from './components/OptionsList';
import Filter from './components/Filter';

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

    const filterList = [
      {
        func: this.reverseList, name: 'Reverse',
      },
      {
        func: this.sortAlphabetical, name: 'Sort alphabetically',
      },
      {
        func: this.sortLength, name: 'Sort by length',
      },
      {
        func: this.resetList, name: 'Reset',
      },
    ];

    return (
      <div className="App">
        {isLoaded ? (
          <>
            {filterList.map(filter => (
              <Filter
                func={filter.func}
                name={filter.name}
                key={filter.name}
              />
            ))}
            <select
              value={selectedOption}
              onChange={this.selectValue}
            >
              <OptionList />
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
