import React from 'react';
import './App.css';
import Goods from './Components/Goods/Goods';

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

type State = {
  goods: string[],
  isStart: boolean,
  sortBy: string,
  isReverse: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isStart: false,
    sortBy: '',
    isReverse: false,
  };

  startButton = () => {
    this.setState(() => ({
      isStart: true,
    }));
  };

  reverseButton = () => {
    this.setState(pState => ({
      isReverse: !pState.isReverse,
    }));
  };

  resetButton = () => {
    this.setState(() => ({
      isReverse: false,
      sortBy: '',
    }));
  };

  sortButton(sortStr: string) {
    this.setState(() => ({
      sortBy: sortStr,
    }));
  }

  render() {
    const {
      goods,
      isStart,
      sortBy,
      isReverse,
    } = this.state;

    const prepGoods: string[] = sortBy !== ''
      ? [...goods].sort((good1, good2) => {
        switch (sortBy) {
          case 'alphab': return good1.localeCompare(good2);
          case 'length': return good1.length - good2.length;
          default: return 0;
        }
      })
      : [...goods];

    if (isReverse) {
      prepGoods.reverse();
    }

    return (
      <div className="App">
        <h1 className="title">Goods</h1>
        { !isStart
          ? (<button type="button" onClick={this.startButton}>Start</button>)
          : (
            <>
              <button type="button" onClick={this.reverseButton}>
                Reverse
              </button>
              <button
                type="button"
                onClick={() => {
                  this.sortButton('alphab');
                }}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={() => {
                  this.sortButton('length');
                }}
              >
                Sort by length
              </button>
              <button type="button" onClick={this.resetButton}>
                resetButton
              </button>
              <Goods goods={prepGoods} />
            </>
          )}
      </div>
    );
  }
}

export default App;
