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
    this.setState( state => ({
      currentList: [...state.goodsList],
    }));
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
                <ul>
                  <GoodsList allGoods={this.state.currentList} />
                </ul>
              </>
            )
        }
      </div>
    )
  }
}

export default App;
