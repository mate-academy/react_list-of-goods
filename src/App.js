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

class App extends React.PureComponent {
  state = {
    goodsList: goodsFromServer,
    visibleGoods: false,
    isReverse: false,
    isSort: false,
    sortBy: 'alphabetically',
  };

  isReverse = () => {
    this.setState(state => ({
      isReverse: !state.isReverse,
    }));
  }

  isSort = (sortMethod) => {
    this.setState(state => ({
      isSort: !state.isSort,
      sortBy: sortMethod,
    }));
  }

  reset = () => {
    this.setState(() => ({
      isReverse: false,
      isSort: false,
    }));
  }

  render() {
    return (
      <>
        <div className="App">
          <h1>Goods</h1>
          {goodsFromServer.length}
        </div>

        {!this.state.visibleGoods
          ? (
            <button
              type="button"
              onClick={() => (
                this.setState({
                  visibleGoods: true,
                })
              )}
            >
              start
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={this.isReverse}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={() => (
                  this.isSort('alphabetically')
                )}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => (
                  this.isSort('length')
                )}
              >
                Sort by length
              </button>
              <GoodsList {...this.state} />
            </>
          )}

      </>
    );
  }
}

export default App;
