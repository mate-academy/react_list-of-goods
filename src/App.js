import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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

  reverseGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortByAlphabetically = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(
        (prevGood, currentGood) => prevGood.localeCompare(currentGood),
      ),
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(
        (prevGood, currentGood) => prevGood.length - currentGood.length,
      ),
    }));
  }

  resetSort = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
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
          onClick={this.reverseGoods}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.sortByAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          onClick={this.sortByLength}
        >
          Sort By Length
        </button>

        <button
          type="button"
          onClick={this.resetSort}
        >
          Reset
        </button>

        {visible && (
          <GoodsList goods={goods} />
        )}
      </>
    );
  }
}

export default App;
