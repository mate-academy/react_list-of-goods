import React, { Component } from 'react';
import { Button } from './components/Button';
import './App.css';
import { Select } from './components/Select';
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

class App extends Component {
  state = {
    goods: goodsFromServer,
    isStarted: false,
    sortBy: '',
    optionValue: 1,
  }

  start = () => this.setState({ isStarted: true });

  sortAlphabetically = () => this.setState({ sortBy: 'alphabet' });

  sortByLength = () => this.setState({ sortBy: 'length' });

  reverse = () => this.setState(state => ({ isReversed: !state.isReversed }));

  handleChange = event => this.setState({ optionValue: event });

  reset = () => this.setState({
    goods: goodsFromServer,
    sortBy: '',
    isReversed: false,
    optionValue: 1,
  });

  visibleGoods = () => this.state.goods.filter(
    good => good.length >= this.state.optionValue,
  ).sort((a, b) => {
    switch (this.state.sortBy) {
      case 'alphabet':
        return a.localeCompare(b);
      case 'length':
        return a.length - b.length;
      default:
        return 0;
    }
  });

  render() {
    const visibleGoods = this.visibleGoods();

    if (this.state.isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        {this.state.isStarted ? (
          <>
            <h1>Goods:</h1>
            <GoodsList goods={visibleGoods} />
            <Button name="Reverse" onClick={this.reverse} />
            <Button
              name="Sort alphabetically"
              onClick={this.sortAlphabetically}
            />
            <Button name="Sort by length" onClick={this.sortByLength} />
            <Button name="Reset" onClick={this.reset} />
            <Select
              value={this.state.optionValue}
              onChange={this.handleChange}
            />
          </>
        ) : (
          <Button name="Start" onClick={this.start} />
        )}
      </div>
    );
  }
}

export default App;
