import React from 'react';
import './App.css';
import { Goodslist } from './components/Goodslist';
import { Button } from './components/Button';

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
    goods: goodsFromServer,
    isVisible: false,
    reverse: false,
    sortBy: null,
  }

  start = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  }

  reverse = () => {
    this.setState(state => ({
      reverse: !state.reverse,
    }));
  }

  sortAlphabetically = () => {
    this.setState({
      sortBy: 'name',
      reverse: false,
    });
  }

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
      reverse: false,
    });
  }

  reset = () => {
    this.setState({
      reverse: false,
      sortBy: null,
    });
  }

  render() {
    if (!this.state.isVisible) {
      return (
        <div>
          <Button
            onClick={this.start}
            text="Start"
            className="button__start"
          />
        </div>
      );
    }

    const { goods, reverse, sortBy } = this.state;
    const newGoodsList = [...goods];

    switch (sortBy) {
      case 'name':
        newGoodsList.sort((cur, next) => cur.localeCompare(next));
        break;
      case 'length':
        newGoodsList.sort((cur, next) => next - cur);
        break;

      default:
        break;
    }

    if (reverse) {
      newGoodsList.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        <Goodslist goods={newGoodsList} />

        <Button
          onClick={this.reverse}
          text="Reverse"
          className="button__reverse"
        />

        <Button
          onClick={this.sortAlphabetically}
          text="Sort alphabetically"
          className="button__sort button__sort--alphabetically"
        />

        <Button
          onClick={this.reset}
          text="Reset"
          className="button__reset"
        />

        <Button
          onClick={this.sortByLength}
          text="Sort by length"
          className="button__sort button__sort--byLength"
        />
      </div>
    );
  }
}
export default App;
