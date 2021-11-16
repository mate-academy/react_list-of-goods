import React from 'react';
import classNames from 'classnames';
import './App.css';
import { GoodsList } from './components/GoodsList';

const goodsFromServer: string[] = [
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

type State = {
  goods: string[],
  showGoods: boolean,
  addButton: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    showGoods: false,
    addButton: true,
  };

  showGoodsList = () => {
    this.setState(state => ({
      showGoods: !state.showGoods,
      addButton: !state.addButton,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      goods: state.goods.reverse(),
    }));
  };

  sortByAlphabetically = () => {
    this.setState(state => ({
      goods: state.goods.sort(),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: state.goods.sort((g1, g2) => g1.length - g2.length),
    }));
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  render() {
    const { goods, showGoods, addButton } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>

        <button
          type="button"
          className={classNames({ 'hide-btn': showGoods })}
          onClick={this.showGoodsList}
        >
          Start
        </button>

        {this.state.showGoods && (
          <GoodsList goods={goods} />
        )}

        <button
          type="button"
          className={classNames({ 'hide-btn': addButton, 'show-btn': showGoods })}
          onClick={this.reverse}
        >
          Reverse
        </button>

        <button
          type="button"
          className={classNames({ 'hide-btn': addButton, 'show-btn': showGoods })}
          onClick={this.sortByAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={classNames({ 'hide-btn': addButton, 'show-btn': showGoods })}
          onClick={this.reset}
        >
          Reset
        </button>

        <button
          type="button"
          className={classNames({ 'hide-btn': addButton, 'show-btn': showGoods })}
          onClick={this.sortByLength}
        >
          Sort by length
        </button>
      </div>
    );
  }
}

export default App;
