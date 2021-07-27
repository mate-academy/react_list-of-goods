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
    goods: goodsFromServer,
    isVisible: false,
    sortBy: null,
    isReversed: false,
  }

  showGoodsList =() => {
    this.setState({ isVisible: true });
  }

  sortAlphabetically = () => {
    this.setState({ sortBy: 'alphabetically' });
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  reset = () => {
    this.setState({
      sortBy: null,
      isReversed: false,
    });
  }

  render() {
    const { goods, sortBy, isReversed, isVisible } = this.state;

    const renderedGoods = [...goods];

    renderedGoods.sort((prevGood, currentGood) => {
      switch (sortBy) {
        case 'alphabetically':
          return currentGood.localeCompare(prevGood);

        case 'length':
          return currentGood.length - prevGood.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      renderedGoods.reverse();
    }

    if (!isVisible) {
      return (
        <button
          type="button"
          onClick={this.showGoodsList}
          className="startButton"
        >
          Start
        </button>
      );
    }

    return (
      <div className="App">
        <GoodsList goods={renderedGoods} />
        <button
          type="button"
          className="button"
          onClick={this.sortAlphabetically}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          className="button"
          onClick={this.reset}
        >
          Reset
        </button>
        <button
          type="button"
          className="button"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>
        <button
          type="button"
          className="button"
          onClick={this.reverse}
        >
          Reverse
        </button>
      </div>
    );
  }
}
