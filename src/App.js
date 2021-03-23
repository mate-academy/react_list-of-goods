import React from 'react';
import './App.css';
import { Buttons } from './components/Buttons';

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

export class App extends React.PureComponent {
  state = {
    goods: [...goodsFromServer],
    visible: false,
  }

  getStarted = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  }

  goodsReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  goodsSortByAlphabetically = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((f1, f2) => f1.localeCompare(f2)),
    }));
  }

  goodsSortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((f1, f2) => f1.length - f2.length),
    }));
  }

  goodsReset = () => {
    this.setState(prevState => ({
      goods: [...goodsFromServer],
    }));
  }

  render() {
    const { goods, visible } = this.state;

    return (
      <>
        <h1>Goods</h1>
        {!visible && (
          <button
            type="button"
            onClick={this.getStarted}
          >
            Start
          </button>
        )}

        <button
          type="button"
          onClick={this.goodsReverse}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.goodsSortByAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          onClick={this.goodsSortByLength}
        >
          Sort By Length
        </button>

        <button
          type="button"
          onClick={this.goodsReset}
        >
          Reset
        </button>

        {visible && (
          <Buttons friends={goods} />
        )}
      </>
    );
  }
}

export default App;
