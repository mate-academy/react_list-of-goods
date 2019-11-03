import React, { Component } from 'react';
import './App.css';
import Start from './components/Start';
import Goods from './components/Goods';

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
  constructor(props) {
    super(props);

    this.state = {
      initialValue: [...goodsFromServer],
      goods: [...goodsFromServer],
      isStarted: false,
    };
  }

  showGoods = () => {
    this.setState(prevState => ({
      ...prevState,
      isStarted: true,
    }));
  };

  reset = () => {
    this.setState(prevState => ({
      ...prevState,
      goods: [...goodsFromServer],
    }));
  };

  reverse = () => {
    this.setState(prevState => ({
      ...prevState,
      goods: [...prevState.goods].reverse(),
    }));
  };

  sortAlph = () => {
    this.setState(prevState => ({
      ...prevState,
      goods: [...prevState.goods].sort(),
    }));
  };

  sortLength = () => {
    this.setState(prevState => ({
      ...prevState,
      goods: [...prevState.goods].sort((a, b) => a.length - b.length),
    }));
  };

  showByLength = (event) => {
    const { value } = event.target;

    this.setState(prevState => ({
      ...prevState,
      selectedOption: value,
      goods: [...prevState.initialValue].filter(item => item.length >= +value),
    }));
  };

  render() {
    return (
      <div className="wrapper">
        {this.state.isStarted ? (
          <Goods
            reverse={this.reverse}
            sortAlph={this.sortAlph}
            reset={this.reset}
            sortLength={this.sortLength}
            showByLength={this.showByLength}
            goods={this.state.goods}
            initialValue={this.state.initialValue}
          />
        ) : (
          <Start showGoods={this.showGoods} />
        )
        }
      </div>
    );
  }
}

export default App;
