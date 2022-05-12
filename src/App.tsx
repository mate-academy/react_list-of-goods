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
  visibleGoods: string[],
  isStart: boolean,
  sortBy: string,
};

class App extends React.Component<{}, State> {
  state = {
    visibleGoods: goodsFromServer,
    isStart: false,
    sortBy: '',
  };

  startButton = () => {
    this.setState(pState => ({
      isStart: !pState.isStart,
    }));
  };

  reverseButton = () => {
    this.setState(pState => ({
      visibleGoods: pState.visibleGoods.reverse(),
    }));
  };

  resetButton = () => {
    this.setState({
      visibleGoods: goodsFromServer,
    });
  };

  sortButton(sortStr: string) {
    this.setState(() => ({
      sortBy: sortStr,
    }));
  }

  render() {
    const {
      visibleGoods,
      isStart,
      sortBy,
    } = this.state;

    if (sortBy !== '') {
      visibleGoods.sort((good1, good2) => {
        switch (sortBy) {
          case 'alphab': return good1.localeCompare(good2);
          case 'length': return good1.length - good2.length;
          default: return 0;
        }
      });
    }

    return (
      <div className="App">
        <h1>Goods</h1>
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
              <button type="button" onClick={this.startButton}>
                resetButton
              </button>
              <Goods goods={visibleGoods} />
            </>
          )}
      </div>
    );
  }
}

export default App;
