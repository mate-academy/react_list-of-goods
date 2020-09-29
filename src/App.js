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
  value: 'Dumplings',
  hidden: false,
}

hiddenButton = () => {
  this.setState({
    goodsList: [...goodsFromServer],
    hidden: true,
  });
}

reverseButton = () => {
  this.setState({ goodsList: [...goodsFromServer].reverse() });
}

sortABCButton = () => {
  this.setState({ goodsList: [...goodsFromServer].sort() });
}

resetButton = () => {
  this.setState({
    goodsList: [...goodsFromServer],
    value: 'Dumplings',
  });
}

sortByLengthButton = () => {
  this.setState({ goodsList: [...goodsFromServer]
    .sort((a, b) => a.length - b.length) });
}

generateNumForList = (event) => {
  this.setState({
    value: event.target.value,
    goodsList: [...goodsFromServer]
      .filter(good => good.length >= event.target.value.length),
  });
}

render() {
  return (
    <div className="App">
      <h1>Goods</h1>
      <button
        type="button"
        onClick={(event) => {
          this.hiddenButton(event);
        }}
        hidden={this.state.hidden}
      >
        Start
      </button>
      <button
        type="button"
        onClick={() => {
          this.reverseButton();
        }}
        hidden={!this.state.hidden}
      >
        Reverse
      </button>
      <button
        type="button"
        onClick={() => {
          this.sortABCButton();
        }}
        hidden={!this.state.hidden}
      >
        Sort alphabetically
      </button>
      <button
        type="button"
        onClick={() => {
          this.resetButton();
        }}
        hidden={!this.state.hidden}
      >
        Reset
      </button>
      <button
        type="button"
        onClick={() => {
          this.sortByLengthButton();
        }}
        hidden={!this.state.hidden}
      >
        Sort by length
      </button>
      <List
        goodsList={this.state.goodsList}
      />
      <select
        value={this.state.value}
        onChange={this.generateNumForList}
        hidden={!this.state.hidden}
      >
        {this.state.goodsList.map((good, index) => (
          <option
            key={good}
            value={good}
          >
            Number
            {' '}
            {index + 1}
            :
            {' '}
            {good}
          </option>
        ))}
      </select>
    </div>
  );
}
}
