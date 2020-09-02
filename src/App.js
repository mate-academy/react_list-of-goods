import React from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { Select } from './components/Select/Select';

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
    goods: [...goodsFromServer],
    display: '',
    initialLength: 1,
  }

  start = () => {
    this.setState(prevState => ({
      display: `block`,
    }));
  };

  reverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => (a.length - b.length)),
    }));
  }

  sortByAlphabet = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  }

  reset = () => {
    this.setState(prevState => ({
      goods: [...goodsFromServer],
    }));
  }

  select = (event) => {
    const length = event.target.value;

    this.setState(state => ({
      goods: [...goodsFromServer].filter(good => good.length >= length),
      initialLength: length,
    }));
  }

  render() {
    if (this.state.display === '') {
      return (
        <div className="App">
          <button
            className="buttons"
            onClick={this.start}
            type="button"
          >
            Start
          </button>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {this.state.goods.map(item => (
          <li
            key={item}
            className="goodItem"
          >
            {item}
          </li>
        ))}
        <Button
          click={this.reset}
          text="reset"
        />
        <Button
          click={this.reverse}
          text="reverse"
        />
        <Button
          click={this.sortByLength}
          text="sort By Length"
        />
        <Button
          click={this.sortByAlphabet}
          text="sort By Alphabet"
        />
        <Select
          change={this.select}
          value={String(this.state.initialLength)}
          goods={[...goodsFromServer]}
        />
      </div>
    );
  }
}

export default App;
