/* eslint-disable max-len,react/no-access-state-in-setstate,no-plusplus */
import React, { Component } from 'react';
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

class ListOfGoods extends Component {
  state = {
    goods: [],
    currentGoods: [],
    currentValue: '1',
    isLoaded: false,
  };

  dataLoad = () => {
    this.setState({
      goods: [...goodsFromServer],
      currentGoods: [...goodsFromServer],
      isLoaded: true,
    });
  };

  reversedList = () => {
    this.setState(previousState => ({
      currentGoods: [...previousState.currentGoods].reverse(),
    }));
  };

  sortByName = () => {
    this.setState(previousState => ({
      currentGoods: [...previousState.goods].sort(),
    }));
  };

  sortByLength = () => {
    this.setState(previousState => ({
      currentGoods: [...previousState.goods]
        .sort((a, b) => a.length - b.length),
    }));
  };

  resetToDefault = () => {
    this.setState(previousState => ({
      currentGoods: previousState.goods,
      currentValue: '1',
    }));
  };

  filterByLength = (event) => {
    const { value } = event.target;
    this.setState({
      currentValue: value,
      currentGoods: this.state.goods.filter(good => good.length >= Number(value)),
    });
  };

  render() {
    const items = [];
    for (let i = 1; i < 11; i++) {
      items.push(<option value={i}>{i}</option>);
    }

    return (
      <div>
        {!this.state.isLoaded && (
          <button type="button" onClick={this.dataLoad}>
            Start
          </button>
        )}

        {this.state.isLoaded && (
          <div>
            <button type="button" onClick={this.reversedList}>Reverse</button>
            <button type="button" onClick={this.sortByName}>Alphabetically</button>
            <button type="button" onClick={this.sortByLength}>By length</button>
            <button type="button" onClick={this.resetToDefault}>Reset</button>
            <select onChange={this.filterByLength} value={this.state.currentValue}>
              {items}
            </select>
            <ul>
              {this.state.currentGoods.map(good => (
                <li key={Date.now() + good}>{good}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default ListOfGoods;
