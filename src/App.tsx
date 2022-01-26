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
  filteredGoods: string[],
  sortBy: SortBy,
};

enum SortBy {
  Alphabet,
  Length,
  None,
}

class App extends React.Component<{}, State> {
  state = {
    goodsToShow: [],
    hiddenStart: false,
    reversed: false,
    filteredGoods: [],
    sortBy: SortBy.None,
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

  reset = () => {
    this.setState({
      reversed: false,
      sortBy: SortBy.None,
    });
  };

  sortByParameter = (parameter: SortBy) => {
    this.state.sortBy = parameter;
    this.forceUpdate();
  };

  sortAlphabeticalyHandler = () => {
    this.sortByParameter(SortBy.Alphabet);
  };

  sortByLengthHandler = () => {
    this.sortByParameter(SortBy.Length);
  };

  showCorrectGoods = () => {
    const {
      goodsToShow, reversed, sortBy,
    } = this.state;

    this.state.filteredGoods = [...goodsToShow];

    if (sortBy === SortBy.Alphabet) {
      this.state.filteredGoods.sort();
    } else if (sortBy === SortBy.Length) {
      this.state.filteredGoods.sort((a:string, b:string) => a.length - b.length);
    }

    if (reversed) {
      this.state.filteredGoods.reverse();
    }
  };

  render() {
    this.showCorrectGoods();

    return (
      <div className="App">
        <h1>Goods</h1>
        <button type="button" onClick={this.start} hidden={this.state.hiddenStart}>Start</button>
        <button type="button" onClick={this.reverse}>Reverse</button>
        <button type="button" onClick={this.sortAlphabeticalyHandler}>Sort alphabetically</button>
        <button type="button" onClick={this.sortByLengthHandler}>Sort by length</button>
        <button type="button" onClick={this.reset}>Reset</button>
        <GoodsList goods={this.state.filteredGoods} />
      </div>
    );
  }
}

export default App;
