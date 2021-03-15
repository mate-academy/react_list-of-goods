import React from 'react';
import './App.css';
import { GoodsList } from './Components/GoodsList';

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
    startIsActive: false,
    goods: goodsFromServer,
  }

  activeButton = () => {
    this.setState({ startIsActive: true });
  }

  sortHandler = (sortBy) => {
    const goodsCopy = [...this.state.goods];

    const sorted = goodsCopy.sort((good1, good2) => {
      switch (sortBy) {
        case 'length':
          return good1.length - good2.length;

        case 'alphabet':
          return good1.localeCompare(good2);

        default: return 0;
      }
    });

    this.setState({
      goods: sorted,
    });
  }

  reverseGoods = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  reset = () => {
    this.setState({
      goods: goodsFromServer,
    });
  }

  render() {
    const { goods, startIsActive } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {
        !startIsActive && (
        <button
          type="button"
          onClick={this.activeButton}
        >
          Start
        </button>
        )}
        <button
          type="button"
          onClick={(this.reverseGoods)}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={() => this.sortHandler('alphabet')}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          onClick={() => this.sortHandler('length')}
        >
          Sort by length
        </button>

        <button
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>
        {startIsActive && <GoodsList goods={goods} />}
      </div>
    );
  }
}

export default App;
