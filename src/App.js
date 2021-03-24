import React from 'react';
import { GoodsList } from './components/GoodsList';
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
    isStarted: false,
    isReversed: false,
    sortBy: '',
    goods: goodsFromServer,
  }

  start = () => {
    this.setState({ isStarted: true });
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortByName = () => {
    this.setState({ sortBy: 'name' });
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  }

  render() {
    const { isStarted, isReversed, sortBy, goods } = this.state;
    const { start, reverse, sortByName, sortByLength, reset } = this;
    const visibleGoods = [...goods];

    visibleGoods.sort((prevStuff, currentStuff) => {
      switch (sortBy) {
        case 'name':
          return prevStuff.localeCompare(currentStuff);

        case 'length':
          return prevStuff.length - currentStuff.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {!isStarted
          ? <button type="button" onClick={start}>Start</button>
          : (
            <>
              <button type="button" onClick={reverse}>
                Reverse
              </button>
              <button type="button" onClick={sortByName}>
                Sort alphabetically
              </button>
              <button type="button" onClick={sortByLength}>
                Sort by length
              </button>
              <button type="button" onClick={reset}>
                Reverse
              </button>
              <GoodsList goods={visibleGoods} />
            </>
          )
        }
      </div>
    );
  }
}

export default App;
