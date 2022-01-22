import React from 'react';
import './App.css';

import { GoodsList } from './GoodsList';

const goodsFromServer: string[] = [
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

// const App: React.FC = () => (
//   <div className="App">
//     <h1>Goods</h1>
//     {goodsFromServer.length}
//     <button type="button">Start</button>
//   </div>
// );

interface State {
  isVisible: boolean,
  myGoods: string[],
  value: number,
}

class App extends React.Component<{}, State> {
  state: State = {
    isVisible: false,
    myGoods: [...goodsFromServer],
    value: 1,
  };

  show = () => {
    this.setState(prev => ({ isVisible: !prev.isVisible }));
  };

  reverse = () => {
    this.setState(prev => ({ myGoods: prev.myGoods.reverse() }));
  };

  alphabeticSort = () => {
    this.setState(prev => ({ myGoods: prev.myGoods.sort((a, b) => a.localeCompare(b)) }));
  };

  reset = () => {
    this.setState({
      myGoods: [...goodsFromServer],
      value: 1,
    });
  };

  lengthSort = () => {
    this.setState(prev => ({ myGoods: prev.myGoods.sort((a, b) => (a.length - b.length)) }));
  };

  render() {
    const { isVisible, myGoods, value } = this.state;
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <div className="App">
        <h1>Goods</h1>
        <select
          name="length"
          value={this.state.value}
          onChange={(event) => (
            this.setState({
              value: +event.target.value,
            })
          )}
        >
          {nums.map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        {isVisible && <GoodsList goods={myGoods.filter(good => good.length >= value)} />}
        <button
          type="button"
          onClick={this.show}
        >
          Start
        </button>

        <button
          type="button"
          onClick={this.reverse}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.alphabeticSort}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>

        <button
          type="button"
          onClick={this.lengthSort}
        >
          Sort by length
        </button>
      </div>
    );
  }
}

export default App;
