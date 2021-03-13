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

class App extends React.Component {
  state = {
    goodsList: goodsFromServer,
    hiddenStart: false,
    defaultLength: 1,
  }

  start = () => {
    this.setState(state => ({
      hiddenStart: !state.hiddenStart,
    }));
  }

  reverseGoods = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].sort(),
    }));
  }

  reset = () => {
    this.setState({
      goodsList: [...goodsFromServer],
      defaultLength: 1,
    });
  }

  sortByLength = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList]
        .sort((a, b) => a.length - b.length),
    }));
  }

  selectedLength = ({ target }) => {
    this.setState({
      goodsList: goodsFromServer
        .filter(good => good.length >= target.value),
      defaultLength: target.value,
    });
  }

  render() {
    const { hiddenStart, defaultLength } = this.state;
    const goodsLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          className="button"
          onClick={this.start}
          hidden={hiddenStart}
        >
          Start
        </button>
        {hiddenStart
          && (
          <GoodsList
            defaultLength={defaultLength}
            {...this.state}
            selectedLength={this.selectedLength}
            goodsLength={goodsLength}
            reverseGoods={this.reverseGoods}
            sortAlphabetically={this.sortAlphabetically}
            reset={this.reset}
            sortByLength={this.sortByLength}
          />
          )
        }
      </div>
    );
  }
}

export default App;
