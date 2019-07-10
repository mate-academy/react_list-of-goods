import React from 'react';

import GoodsList from './GoodsList';

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
      goods: [],
      isLoaded: false,
      selectValue: 1,
    };

  startGoods = () => {
    this.setState({
      isLoaded: true,
      goods: goodsFromServer,
    });
  };

  sortReverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  };

  sortAlphabet = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({
      selectValue: value,
      goods: goodsFromServer.filter(good => good.length >= value),
    });
  }

  resetAll = () => {
    this.setState(prevState => ({
      goods: goodsFromServer,
      selectValue: 1,
    }));
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoaded
          ? (
            <div>
              <button type="button" onClick={this.sortReverse}>Reverse all goods</button>
              <button type="button" onClick={this.sortAlphabet}>Sort by Alphabet</button>
              <button type="button" onClick={this.sortByLength}>Sort by length</button>
              <button type="button" onClick={this.resetAll}>Reset All</button>
              <select value={this.state.selectValue} onChange={this.handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <GoodsList goods={this.state.goods} />
            </div>
          )
          : (
            <div>
              <button type="button" onClick={this.startGoods}>
            This is button!
              </button>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
