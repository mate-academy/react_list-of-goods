import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList/GoodsList';

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

export class App extends React.Component {
  state = {
    isGoodsLoaded: false,
    listOfGoods: [...goodsFromServer],
    minLength: 1,
  }

  loadGoods = () => {
    this.setState({
      isGoodsLoaded: true,
    });
  }

  reverseGoods = () => {
    this.setState(prevState => ({
      listOfGoods: prevState.listOfGoods.reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(prevState => ({
      listOfGoods: prevState.listOfGoods.sort(),
    }));
  }

  resetGoods = () => {
    this.setState({
      listOfGoods: [...goodsFromServer],
      minLength: 1,
    });
  }

  sortByLength = () => {
    this.setState(prevState => ({
      listOfGoods: prevState.listOfGoods
        .sort((a, b) => a.length - b.length),
    }));
  }

  selectedLength = (e) => {
    this.setState({
      listOfGoods: [...goodsFromServer]
        .filter(goods => goods.length >= e.target.value),
      minLength: Number(e.target.value),
    });
  }

  render() {
    return (
      <div className="App">
        { this.state.isGoodsLoaded
          ? (
            <>
              <button type="button" onClick={this.reverseGoods}>
            Reverse
              </button>
              <button type="button" onClick={this.sortAlphabetically}>
            Sort alphabetically
              </button>
              <button type="button" onClick={this.resetGoods}>
            Reset
              </button>
              <button type="button" onClick={this.sortByLength}>
            Sort by length
              </button>
              <select
                className="select"
                value={this.state.minLength}
                onChange={this.selectedLength}
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
              <GoodsList list={this.state.listOfGoods} />
            </>
          )
          : <button type="button" onClick={this.loadGoods}>Load goods</button>
        }
      </div>
    );
  }
}

export default App;
