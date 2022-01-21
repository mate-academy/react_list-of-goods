import React from 'react';
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
  goodsToShow: string[],
  hiddenStart: boolean,
  reversed: boolean,
  sortAlphabet: boolean,
  sortLength: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goodsToShow: [],
    hiddenStart: false,
    reversed: false,
    sortAlphabet: false,
    sortLength: false,
  };

  start = () => {
    this.setState({
      goodsToShow: goodsFromServer,
      hiddenStart: true,
    });
  };

  reverse = () => {
    this.setState(state => ({
      reversed: !state.reversed,
    }));
  };

  sortAlph = () => {
    this.setState({
      sortAlphabet: true,
      sortLength: false,
    });
  };

  reset = () => {
    this.setState({
      reversed: false,
      sortAlphabet: false,
      sortLength: false,
    });
  };

  sortLeng = () => {
    this.setState({
      sortAlphabet: false,
      sortLength: true,
    });
  };

  render() {
    const {
      goodsToShow, reversed, sortAlphabet, sortLength,
    } = this.state;

    const filteredGoods = [...goodsToShow];

    if (sortAlphabet) {
      filteredGoods.sort();
    } else if (sortLength) {
      filteredGoods.sort((a:string, b:string) => a.length - b.length);
    }

    if (reversed) {
      filteredGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        <button type="button" onClick={this.start} hidden={this.state.hiddenStart}>Start</button>
        <button type="button" onClick={this.reverse}>Reverse</button>
        <button type="button" onClick={this.sortAlph}>Sort alphabetically</button>
        <button type="button" onClick={this.reset}>Reset</button>
        <button type="button" onClick={this.sortLeng}>Sort by length</button>
        <GoodsList goods={filteredGoods} />
      </div>
    );
  }
}

export default App;
