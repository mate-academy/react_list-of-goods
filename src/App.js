import React from 'react';

import Buttons from './components/Buttons/Buttons';
import Select from './components/Select/Select';
import GoodsList from './components/GoodsList/GoodsList';
import './App.css';

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
    isStart: false,
    selectValue: 1,
    goods: goodsFromServer,
  }

  start = () => {
    this.setState({ isStart: true });
  }

  reverse = () => {
    this.setState(state => ({ goods: [...state.goods].reverse() }));
  }

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((good1, good2) => (
        good1.localeCompare(good2)
      )),
    }));
  }

  reset = () => {
    this.setState({
      goods: goodsFromServer,
      selectValue: 1,
    });
  }

  sortLenght = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((good1, good2) => (
        good1.length - good2.length
      )),
    }));
  }

  filterLength = (evt) => {
    const goodLength = Number(evt.target.value);

    this.setState({
      goods: goodsFromServer.filter(good => good.length >= goodLength),
      selectValue: goodLength,
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="App__header">Goods</h1>
        {goodsFromServer.length}
        <Buttons
          isStart={this.state.isStart}
          start={this.start}
          reverse={this.reverse}
          sortAlphabetically={this.sortAlphabetically}
          reset={this.reset}
          sortLenght={this.sortLenght}
        />
        <Select
          isStart={this.state.isStart}
          selectValue={this.state.selectValue}
          filterLength={this.filterLength}
        />
        {this.state.isStart ? <GoodsList goods={this.state.goods} /> : ''}
      </div>
    );
  }
}

export default App;
