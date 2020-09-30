import React from 'react';
import './App.css';

import { List } from './Components/List';

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

export default class App extends React.Component {
state = {
  goodsList: [...goodsFromServer],
  isHidden: false,
  selectedValue: 1,
}

showListAndShowButtons = () => {
  this.setState({
    isHidden: true,
  });
}

reverseList = () => {
  this.setState(state => ({ goodsList: [...state.goodsList].reverse() }));
}

sortABCList = () => {
  this.setState(state => ({ goodsList: [...state.goodsList].sort() }));
}

resetList = () => {
  this.setState({
    goodsList: [...goodsFromServer],
    selectedValue: 1,
  });
}

sortListByLength = () => {
  this.setState(state => ({ goodsList: [...state.goodsList]
    .sort((a, b) => a.length - b.length) }));
}

filterList = (value) => {
  this.setState({
    goodsList: goodsFromServer.filter(good => good.length >= value),
    selectedValue: value,
  });
}

render() {
  const { goodsList, isHidden, selectedValue } = this.state;

  return (
    <div className="App">
      <h1>Goods</h1>

      {(!isHidden)
        ? (
          <button
            type="button"
            onClick={this.showListAndShowButtons}
          >
            Start
          </button>
        ) : (
          <>
            <button
              type="button"
              onClick={this.reverseList}
            >
              Reverse
            </button>
            <button
              type="button"
              onClick={this.sortABCList}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              onClick={this.resetList}
            >
              Reset
            </button>
            <button
              type="button"
              onClick={this.sortListByLength}
            >
              Sort by length
            </button>
            <List
              goodsList={goodsList}
            />
            <select
              value={selectedValue}
              onChange={(event) => {
                this.filterList(event.target.value);
              }}
            >
              {[...Array(10).keys()].map(i => (
                <option value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </>
        )}
    </div>
  );
}
}
