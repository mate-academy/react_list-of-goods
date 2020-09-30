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
  });
}

sortListByLength = () => {
  this.setState(state => ({ goodsList: [...state.goodsList]
    .sort((a, b) => a.length - b.length) }));
}

filterList = (value) => {
  this.setState({
    goodsList: goodsFromServer.filter(good => good.length >= value),
  });
}

render() {
  const { goodsList, isHidden } = this.state;

  return (
    <div className="App">
      <h1>Goods</h1>

      {(this.state.isHidden === false)
        ? (
          <button
            type="button"
            onClick={this.showListAndShowButtons}
            hidden={isHidden}
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
              onChange={(event) => {
                this.filterList(event.target.value);
              }}
            >
              <option key={1} value={1}> 1 </option>
              <option key={2} value={2}> 2 </option>
              <option key={3} value={3}> 3 </option>
              <option key={4} value={4}> 4 </option>
              <option key={5} value={5}> 5 </option>
              <option key={6} value={6}> 6 </option>
              <option key={7} value={7}> 7 </option>
              <option key={8} value={8}> 8 </option>
              <option key={9} value={9}> 9 </option>
              <option key={10} value={10}> 10 </option>
            </select>
          </>

        )}
    </div>
  );
}
}
