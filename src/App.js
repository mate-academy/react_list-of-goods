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

const goodsWithId = goodsFromServer.map((name, index) => ({
  name, id: index + 1,
}));

class App extends React.Component {
  state = {
    goods: [...goodsWithId],
    isGoodsVisible: false,
  }

  showGoods = () => {
    this.setState(prevState => ({
      isGoodsVisible: !prevState.isGoodsVisible,
    }));
  }

  reverseGoods = () => {
    this.setState(({
      goods: [...goodsWithId].reverse(),
    }));
  }

  sortByAlphabet = () => {
    this.setState(prevState => ({
      goods: [...goodsWithId].sort((prev, current) => (
        prev.name.localeCompare(current.name)
      )),
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...goodsWithId].sort((prev, current) => (
        prev.name.length - current.name.length
      )),
    }));
  }

  resetSorting = () => {
    this.setState(prevState => ({
      goods: [...goodsWithId],
    }));
  }

  render() {
    const {
      isGoodsVisible,
      goods,
    } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {isGoodsVisible ? (
          <>
            <GoodsList goods={goods} />

            <div className="btn-group">
              <button
                type="button"
                onClick={this.reverseGoods}
                className="btn btn-default"
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={this.sortByAlphabet}
                className="btn btn-default"
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={this.sortByLength}
                className="btn btn-default"
              >
                Sort by length
              </button>

              <button
                type="button"
                onClick={this.resetSorting}
                className="btn btn-warning"
              >
                Reset
              </button>
            </div>
          </>
        ) : (
          <button
            type="button"
            onClick={this.showGoods}
            className="btn btn-success"
          >
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
