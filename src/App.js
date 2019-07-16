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
    isLoaded: false,
    goodsList: [],
    currentList: [],
    direction: 1,
    length: 1,
  }

  goodsLoad = () => {
    this.setState({
      isLoaded: true,
      goodsList: [...goodsFromServer],
      currentList: [...goodsFromServer],
    });
  }

  lengthSort = () => {
    this.setState(state => ({
      currentList: [...state.currentList].sort((a, b) => (
        (a.length) - (b.length)
      )),
    }));
  }

  alphabetSort = () => {
    this.setState(state => ({
      direction: state.direction === 1 ? -1 : 1,
      currentList: [...state.currentList].sort((a, b) => (
        a.localeCompare(b) * state.direction
      )),
    }));
  }

  reverseSort = () => {
    this.setState(state => ({
      direction: state.direction === 1 ? -1 : 1,
      currentList: state.currentList.reverse(),
    }));
  }

  resetSort = () => {
    this.setState(state => ({
      currentList: [...state.goodsList],
      length: 1,
    }));
  }

  filterByLength = (event) => {
    const { value } = event.target;
    this.setState({
      length: value,
      currentList: [...goodsFromServer].filter(item => item.length >= value),
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Goods 1</h1>
        {
          (!this.state.isLoaded)
            ? <button onClick={this.goodsLoad}>Start</button>
            : (
              <>
                <button onClick={this.alphabetSort}>alpha</button>
                <button onClick={this.reverseSort}>reverse</button>
                <button onClick={this.resetSort}>reset</button>
                <button onClick={this.lengthSort}>length</button>
                <select
                  value={this.state.length}
                  onChange={this.filterByLength}
                >
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
                <ul>
                  <GoodsList allGoods={this.state.currentList} />
                </ul>
              </>
            )
        }
      </div>
    );
  }
}

export default App;
