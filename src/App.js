import React from 'react';
import { Goods } from './components/Goods';

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
    goods: goodsFromServer,
    startButton: false,
    isReversed: false,
    sortBy: '',
  }

  startClicked = () => {
    this.setState(prevState => ({
      startButton: !prevState.startButton,
    }));
  }

  reverse = () => {
    this.setState(prevState => ({
      isReversed: !prevState.isReversed,
    }));
  }

  sortByName = () => {
    this.setState({
      sortBy: 'alphabet',
      isReversed: false,
    });
  }

  reset = () => {
    this.setState({
      sortBy: '',
      isReversed: false,
    });
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  render() {
    const {
      goods,
      startButton,
      isReversed,
      sortBy,
    } = this.state;

    const goodsCopy = [...goods];

    goodsCopy.sort((g1, g2) => {
      switch (sortBy) {
        case 'alphabet':
          return g1.localeCompare(g2);

        case 'length':
          return g2.length - g1.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      goodsCopy.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {!startButton && (
          <button
            type="button"
            onClick={this.startClicked}
          >
            Start
          </button>
        )}
        {startButton && <Goods goods={goodsCopy} />}
        <button
          type="button"
          onClick={this.reverse}
        >
          reverse
        </button>
        <button
          type="button"
          onClick={this.sortByName}
        >
          Sort by name
        </button>
        <button
          type="button"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>
        <button
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default App;
