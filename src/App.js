import React from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { Select } from './components/Select';

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
  constructor(props) {
    super(props);

    this.state = {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      goods: [...goodsFromServer],
      visibility: true,
      initialLength: 1,
    };

    this.showGoods = () => (
      this.setState(state => ({
        visibility: !state.visibility,
      }))
    );

    this.reverseGoods = () => (
      this.setState(state => ({
        goods: [...goodsFromServer].reverse(),
      }))
    );

    this.alphabeticSort = () => (
      this.setState(state => ({
        goods: [...goodsFromServer].sort(),
      }))
    );

    this.lengthSort = () => (
      this.setState(state => ({
        goods: [...goodsFromServer].sort((a, b) => a.length - b.length),
      }))
    );

    this.resetSorts = () => (
      this.setState(state => ({
        goods: [...goodsFromServer],
        initialLength: 1,
      }))
    );

    this.filterGoods = (event) => {
      const minLength = event.target.options[event.target.selectedIndex].value;

      this.setState(state => ({
        goods: [...goodsFromServer].filter(i => i.length >= minLength),
        initialLength: minLength,
      }));
    };
  }

  render() {
    if (this.state.visibility) {
      return (
        <div className="App">
          <h1>Goods</h1>
          <Button
            handleClick={this.showGoods}
            text="START"
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        <ol>
          {this.state.goods.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <Button
          handleClick={this.alphabeticSort}
          text="Sort alphabetically"
        />
        <Button
          handleClick={this.reverseGoods}
          text="Reverse"
        />
        <Button
          handleClick={this.lengthSort}
          text="Sort by length"
        />
        <Button
          handleClick={this.resetSorts}
          text="Reset"
        />
        <Select
          options={this.state.options}
          handleClick={this.filterGoods}
          value={String(this.state.initialLength)}
        />
      </div>
    );
  }
}

export default App;
