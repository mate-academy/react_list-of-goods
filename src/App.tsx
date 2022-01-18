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
  sortAlph: boolean,
  sortLeng: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    goodsToShow: [],
    hiddenStart: false,
    reversed: false,
    sortAlph: false,
    sortLeng: false,
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
      sortAlph: true,
      sortLeng: false,
    });
  };

  reset = () => {
    this.setState({
      goodsToShow: [],
      hiddenStart: false,
      reversed: false,
      sortAlph: false,
      sortLeng: false,
    });
  };

  sortLeng = () => {
    this.setState({
      sortAlph: false,
      sortLeng: true,
    });
  };

  render() {
    const {
      goodsToShow, reversed, sortAlph, sortLeng,
    } = this.state;

    const filteredGoods = [...goodsToShow];

    if (sortAlph) {
      filteredGoods.sort();
    } else if (sortLeng) {
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
