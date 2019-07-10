/* eslint-disable indent */
import React from 'react';

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

const sortedReverse = goods => [...goods].reverse();
const sortedAlphabetically = goods => [...goods].sort(
  (a, b) => a.localeCompare(b)
  );
const sortedByLength = goods => [...goods].sort(
  (a, b) => b.length - a.length
  );
const sortedByLengthValue = (goods, value) => [...goods].filter(
  (item) => item.length >= value
  );
class App extends React.Component {
 state = {
  goods: [],
  goodsCurrent: [],
  isLoaded: false,
  selectedNumber: 1,
 }

handleClick = () => {
  this.setState({
    goods: goodsFromServer,
    goodsCurrent: goodsFromServer,
    isLoaded: true,
  });
}

sortReverse = () => {
  this.setState({
    goods: sortedReverse(this.state.goods),
  });
};

sortAlphabetically = () => {
  this.setState({
    goods: sortedAlphabetically(this.state.goods),
  });
};

sortByLength = () => {
  this.setState({
    goods: sortedByLength(this.state.goods),
  });
};

sortReset = () => {
  this.setState ({
    goods: this.state.goodsCurrent,
  });
};

sortByLengthValue = (event) => {
  const { value } = event.target;
  this.setState ({
  goods: sortedByLengthValue(this.state.goods, value),
  selectedNumber: value,
});
}

render() {
  if (!this.state.isLoaded) {
    return (
      <button onClick={this.handleClick} type="button">Start</button>
    );
  }
  return (
    <div>
      <ul>
        <button onClick={this.sortReverse} type="button">Reverse</button>
        <button onClick={this.sortAlphabetically} type="button">Alphabetically</button>
        <button onClick={this.sortByLength} type="button">Length</button>
        <button onClick={this.sortReset} type="button">Reset</button>
        <select onChange={this.sortByLengthValue} value={this.state.selectedNumber}>
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
        {this.state.goods.map(item => (
          <li>{item}</li>
         ))}
      </ul>
    </div>
  );
}
}

export default App;
