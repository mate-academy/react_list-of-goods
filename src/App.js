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
    hiddenButtons: true,
    hiddenStart: false,
  }

  renderGoods = () => {
    this.setState(state => ({
      hiddenButtons: !state.hiddenButtons,
    }));
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
    this.setState({ goodsList: [...goodsFromServer] });
  }

  sortByLength = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList]
        .sort((a, b) => a.length - b.length),
    }));
  }

  selectedLength = ({ target }) => {
    this.setState({
      goodsList: [...goodsFromServer]
        .filter(good => good.length >= target.value),
    });
  }

  render() {
    const goodsLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <div className="App">
        <h1>Goods</h1>
        <GoodsList
          {...this.state}
          selectedLength={this.selectedLength}
          goodsLength={goodsLength}
          renderGoods={this.renderGoods}
          reverseGoods={this.reverseGoods}
          sortAlphabetically={this.sortAlphabetically}
          reset={this.reset}
          sortByLength={this.sortByLength}
        />
      </div>
    );
  }
}

export default App;
