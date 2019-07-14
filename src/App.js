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
    currentValue: 1,
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
  this.setState({
    goodsCurrent: this.state.goodsCurrent.sort((a, b) => a.localeCompare(b)),
  });
}

handleSortByLength = () => {
  this.setState({
    goodsCurrent: this.state.goodsCurrent.sort((a, b) => a.length - b.length),
  });
}

handleReset = () => {
 this.setState({
    goodsCurrent: this.state.goods,
    currentValue: 1,
  });
}

filterByLength = (e) => {
  const { value } = e.target
  this.setState({
    currentValue: value,
    goodsCurrent: this.state.goodsCurrent.filter((item) => item.length >= value),
  });
}

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

      <select onChange={this.filterByLength} defaultVlue="this.state.currentValue">
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
