import React from 'react';
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

const array = new Array(10);
const selectOprions = array.fill(0).map((value, i) => i + 1);

class App extends React.Component {
  state = {
    visability: true,
    items: [...goodsFromServer],
  }

start = () => {
  this.setState({
    visability: false,
  });
};

reverse = () => {
  this.setState(state => ({
    items: [...state.items].reverse(),
  }));
};

sortAlphabetically = () => {
  this.setState(state => ({
    items: [...state.items].sort((a, b) => a.localeCompare(b)),
  }));
};

reset = () => {
  this.setState({
    items: goodsFromServer,
    selectedValue: 1,
  });
};

sortByLength = () => {
  this.setState(state => ({
    items: [...state.items].sort((a, b) => a.length - b.length),
  }));
};

leaveItemsByLength = (e) => {
  this.setState({
    items: [...goodsFromServer].filter(val => val.length >= e.target.value),
  });
};

render() {
const {
  items,
  visability,
  selectedValue
} = this.state;

return (
  <div className="app">
    <h1>Goods</h1>
    <p>{goodsFromServer.length}</p>
    <button
      type="button"
      onClick={this.start}
      hidden={!visability}
    >
      Start
    </button>
    <div hidden={visability}>
      <ul>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="options">
        <div>
          <button type="button" onClick={this.reverse}>
          Reverse
          </button>
        </div>
        <div>
          <button type="button" onClick={this.sortAlphabetically}>
          Sort alphabetically
          </button>
        </div>
        <div>
          <button type="button" onClick={this.reset}>
          Reset
          </button>
        </div>
        <div>
          <button type="button" onClick={this.sortByLength}>
          Sort by length
          </button>
        </div>
        <div>
          <select value={selectedValue} onChange={this.leaveItemsByLength}>
            {selectOprions.map(item => (
            <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  </div>
);
}
}

export default App;
