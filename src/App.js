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
  goodsList: [],
  valueDefaultSelected: 'Dumplings',
  isHidden: false,
}

showListAndShowButtons = () => {
  this.setState({
    goodsList: [...goodsFromServer],
    isHidden: true,
  });
}

reverseList = () => {
  this.setState(state => ({ goodsList: state.goodsList.reverse() }));
}

sortABCList = () => {
  this.setState(state => ({ goodsList: state.goodsList.sort() }));
}

resetList = () => {
  this.setState({
    goodsList: [...goodsFromServer],
    valueDefaultSelected: 'Dumplings',
  });
}

sortListByLength = () => {
  this.setState(state => ({ goodsList: state.goodsList
    .sort((a, b) => a.length - b.length) }));
}

filterList = (event) => {
  const newList = [...goodsFromServer];

  this.setState({
    valueDefaultSelected: event.target.value,
    goodsList: newList.filter(good => good.length >= event.target.value),
  });
}

render() {
  const { goodsList, isHidden, valueDefaultSelected } = this.state;

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
              value={valueDefaultSelected}
              onChange={this.filterList}
            >
              {this.state.goodsList.map((good, index) => (
                <option
                  key={good}
                  value={index + 1}
                >
                  {index + 1}
                </option>
              ))}
            </select>
          </>

        )}
    </div>
  );
}
}
