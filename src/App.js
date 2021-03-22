import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';

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
].map((name, index) => ({
  name,
  id: index + 1,
  length: name.length,
}));

class App extends React.Component {
  state = {
    goods: [...goodsFromServer],
    isStarted: false,
  };

  getStart = () => {
    this.setState(state => ({
      isStarted: !state.isStarted,
    }));
  };

  sortById = () => {
    this.setState({
      goods: [...goodsFromServer].sort((good1, good2) => (
        good1.id - good2.id
      )),
    });
  };

  sortByName = () => {
    this.setState({
      goods: [...goodsFromServer].sort((good1, good2) => (
        good1.name.localeCompare(good2.name)
      )),
    });
  };

  sortByLength = () => {
    this.setState({
      goods: [...goodsFromServer].sort((good1, good2) => (
        good1.length - good2.length
      )),
    });
  };

  reverse = () => {
    this.setState(state => ({
      goods: state.goods.reverse(),
    }));
  };

  render() {
    const {
      goods,
      isStarted,
    } = this.state;

    return (
      <div className="goods">
        <h1>Goods</h1>
        {!isStarted
          && (
          <button
            type="button"
            onClick={this.getStart}
          >
            Start
          </button>
          )
        }

        {isStarted
        && (
        <>
          <button
            type="button"
            onClick={this.reverse}
          >
            Reverse
          </button>
          {' '}
          <button
            type="button"
            onClick={this.sortByName}
          >
            Sort alphabetically
          </button>
          {' '}
          <button
            type="button"
            onClick={this.sortById}
          >
            Reset
          </button>
          {' '}
          <button
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <GoodsList goods={goods} />
        </>
        )
        }
      </div>
    );
  }
}

export default App;
