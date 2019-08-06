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

class App extends React.Component {
  state = {
    goods: [],
    goodsCurrent: [],
    isLoaded: false,
    sortByAlphabet: 1,
    sortLength: 1,
  }

 handleLoad = () => {
   this.setState({
     goods: goodsFromServer,
     goodsCurrent: goodsFromServer,
     isLoaded: true,
   });
 }

handleReverse = () => {
  this.setState({
    goodsCurrent: [...this.state.goodsCurrent].reverse(),
  });
}

handleSortByAlphabet = () => {
  this.setState(prevState => ({
    goodsCurrent: prevState.goodsCurrent.sort((a, b) => (
    prevState.sortByAlphabet * a.localeCompare(b))),
    sortByAlphabet: -prevState.sortByAlphabet,
  }));
}

handleSortByLength = () => {
  this.setState(prevState => ({
    goodsCurrent: prevState.goodsCurrent.sort((a, b) =>
    prevState.sortLength * (a.length - b.length)),
    sortLength: -prevState.sortLength,
  }));
}

handleReset = () => {
 this.setState({
    goodsCurrent: this.state.goods,
    currentValue: 1,
  });
}

filterByLength = (e) => {
  this.setState({
    goodsCurrent: [...goodsFromServer]
      .filter(item => item.length >= e.target.value),
    currentValue: e.target.value,
  });
};

render() {
  if (!this.state.isLoaded) {
    return (
     <button onClick={this.handleLoad} type="button">Start</button>
    );
  }
  return (
      <div className="block">
       <button onClick={this.handleReverse}>Reverse</button>
       <button onClick={this.handleSortByAlphabet}>Sort by 'Alphabet'</button>
       <button onClick={this.handleSortByLength}>Sort by 'Length'</button>
       <button onClick={this.handleReset}>Reset</button>

      <select onChange={this.filterByLength} value={this.state.currentValue}>
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

       <div>
       <ul>
         {this.state.goodsCurrent.map(item => (
           <li>{item}</li>
         ))}
       </ul>
     </div>
     </div>
  );
}
}

export default App;
