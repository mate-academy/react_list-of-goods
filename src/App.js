import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList';

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
    isVisibleList: false,
  }

  showList = () => {
    this.setState({
      isVisibleList: true,
    });
  }

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  reset = () => {
    this.setState({
      goods: goodsFromServer,
    });
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  }

  render() {
    const { isVisibleList, goods } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {goodsFromServer.length}
        <br />
        <br />
        {isVisibleList || (
          <button
            type="button"
            onClick={this.showList}
          >
            Start
          </button>
        )}
        {isVisibleList
          && (
            <>
              <GoodsList goods={goods} />
              <button
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sortAlphabetically}
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
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
            </>
          )
        }
      </div>
    );
  }
}

export default App;
