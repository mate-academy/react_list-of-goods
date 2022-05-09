import React from 'react';
import './App.css';
import { Goods } from './Goods';

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
  visible: boolean;
  goodsAll: string[];
};

class App extends React.Component<{}, State> {
  state = {
    goodsAll: goodsFromServer,
    visible: true,
  };

  notVisible = () => {
    this.setState({
      visible: false,
    });
  };

  reverseGood = () => {
    this.setState(state => ({
      goodsAll: [...state.goodsAll].reverse(),
    }));
  };

  sortedByAbc = () => {
    this.setState(state => ({
      goodsAll: [...state.goodsAll].sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortedByNumber = () => {
    this.setState(state => ({
      goodsAll: [...state.goodsAll].sort((a, b) => a.length - b.length),
    }));
  };

  reset = () => {
    this.setState({
      goodsAll: goodsFromServer,
    });
  };

  removeNumber = () => {
    this.setState(state => ({
      goodsAll: state.goodsAll.slice(),
    }));
  };

  render() {
    const { visible } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        {visible && (
          <button
            className="App__button"
            type="button"
            onClick={this.notVisible}
          >
            Start
          </button>
        )}
        <div className='App__block'>
          {
            !visible && (
              <>
                <button onClick={this.reverseGood} type="button">
                  Reverse
                </button>
                <button onClick={this.sortedByAbc} type="button">
                  Sort alphabetically
                </button>
                <button onClick={this.sortedByNumber} type="button">
                  Sort by length
                </button>
                <button onClick={this.reset} type="button">
                  Reset
                </button>
                <Goods goods={this.state.goodsAll} />
              </>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
